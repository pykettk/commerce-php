---
title: Example Bulk Operations Implementation | Commerce PHP Extensions
description: Use this example to create your own bulk operation in Adobe Commerce or Magento Open Source.
---

# Example bulk operations implementation

This document describes how bulk operations can be implemented. There are three primary tasks to accomplish this:

*  Create a [publisher](https://glossary.magento.com/publisher-subscriber-pattern) that sends messages to the message queue
*  Create a consumer that receives and processes messages
*  Configure the message queues

## Create a publisher

A publisher's duties include scheduling a bulk operation. It must generate a `bulkUuid` for each operation, send each operation to the message queue, and report on the status of each operations.

The following code sample shows how these duties can be completed.

```php
<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

use Magento\AsynchronousOperations\Api\Data\OperationInterface;
use Magento\AsynchronousOperations\Api\Data\OperationInterfaceFactory;
use Magento\Authorization\Model\UserContextInterface;
use Magento\Framework\Bulk\BulkManagementInterface;
use Magento\Framework\DataObject\IdentityGeneratorInterface;
use Magento\Framework\Exception\LocalizedException;
use Magento\Framework\Json\Helper\Data as JsonHelper;
use Magento\Framework\UrlInterface;

/**
 * Class ScheduleBulk
 */
class ScheduleBulk
{
    /**
     * @var BulkManagementInterface
     */
    private $bulkManagement;

    /**
     * @var OperationInterfaceFactory
     */
    private $operationFactory;

    /**
     * @var IdentityGeneratorInterface
     */
    private $identityService;

    /**
     * @var UrlInterface
     */
    private $urlBuilder;

    /**
     * @var UserContextInterface
     */
    private $userContext;

    /**
     * @var JsonHelper
     */
    private $jsonHelper;

    /**
     * ScheduleBulk constructor.
     *
     * @param BulkManagementInterface $bulkManagement
     * @param OperationInterfaceFactory $operationFactory
     * @param IdentityGeneratorInterface $identityService
     * @param UserContextInterface $userContextInterface
     * @param UrlInterface $urlBuilder
     */
    public function __construct(
        BulkManagementInterface $bulkManagement,
        OperationInterfaceFactory $operationFactory,
        IdentityGeneratorInterface $identityService,
        UserContextInterface $userContextInterface,
        UrlInterface $urlBuilder,
        JsonHelper $jsonHelper
    ) {
        $this->userContext = $userContextInterface;
        $this->bulkManagement = $bulkManagement;
        $this->operationFactory = $operationFactory;
        $this->identityService = $identityService;
        $this->urlBuilder = $urlBuilder;
        $this->jsonHelper = $jsonHelper;

    }

    /**
     * Schedule new bulk operation
     *
     * @param array $operationData
     * @throws LocalizedException
     * @return void
     */
    public function execute($operationData)
    {
        $operationCount = count($operationData);
        if ($operationCount > 0) {
            $bulkUuid = $this->identityService->generateId();
            $bulkDescription = 'Specify here your bulk description';

            $operations = [];
            foreach ($operationData as $operation) {

                $serializedData = [
                    //this data will be displayed in Failed item grid in ID column
                    'entity_id' => $operation['entity_id'],
                    //add here logic to add url for your entity(this link will be displayed in the Failed item grid)
                    'entity_link' => $this->urlBuilder->getUrl('your_url'),
                    //this data will be displayed in Failed item grid in the column "Meta Info"
                    'meta_information' => 'Specify here meta information for your entity',//this data will be displayed in Failed item grid in the column "Meta Info"
                ];
                $data = [
                    'data' => [
                        'bulk_uuid' => $bulkUuid,
                        //topic name must be equal to data specified in the queue configuration files
                        'topic_name' => '%your_topic name%',
                        'serialized_data' => $this->jsonHelper->jsonEncode($serializedData),
                        'status' => OperationInterface::STATUS_TYPE_OPEN,
                    ]
                ];

                /** @var OperationInterface $operation */
                $operation = $this->operationFactory->create($data);
                $operations[] = $operation;

            }
            $userId = $this->userContext->getUserId();
            $result = $this->bulkManagement->scheduleBulk($bulkUuid, $operations, $bulkDescription, $userId);
            if (!$result) {
                throw new LocalizedException(
                    __('Something went wrong while processing the request.')
                );
            }
        }
    }
}
```

## Create a consumer

A consumer class receives messages from the message queue and changes the status after it is processed. The following example defines a consumer that handles price update bulk operations.

```php
<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace Magento\SharedCatalog\Model\ResourceModel\ProductItem\Price;

use Magento\AsynchronousOperations\Api\Data\OperationInterface;
use Magento\AsynchronousOperations\Api\Data\OperationInterfaceFactory;
use Magento\Framework\Bulk\BulkManagementInterface;
use Magento\Framework\Bulk\OperationManagementInterface;
use Magento\Framework\DB\Adapter\ConnectionException;
use Magento\Framework\DB\Adapter\DeadlockException;
use Magento\Framework\DB\Adapter\LockWaitException;
use Magento\Framework\Exception\LocalizedException;
use Magento\Framework\Exception\NoSuchEntityException;
use Magento\Framework\Exception\TemporaryStateExceptionInterface;
use Magento\Framework\Json\Helper\Data as JsonHelper;
use Psr\Log\LoggerInterface;

/**
 * Class Consumer
 */
class Consumer
{
    /**
     * @var LoggerInterface
     */
    private $logger;

    /**
     * @var JsonHelper
     */
    private $jsonHelper;

    /**
     * @var OperationManagementInterface
     */
    private $operationManagement;

    /**
     * Consumer constructor.
     *
     * @param LoggerInterface $logger
     * @param JsonHelper $jsonHelper
     */
    public function __construct(
        LoggerInterface $logger,
        JsonHelper $jsonHelper,
        OperationManagementInterface $operationManagement
    ) {
        $this->logger = $logger;
        $this->jsonHelper = $jsonHelper;
        $this->operationManagement = $operationManagement;
    }

    /**
     * Processing operation for update price
     *
     * @param OperationInterface $operation
     * @return void
     */
    public function processOperation(OperationInterface $operation)
    {
        $status = OperationInterface::STATUS_TYPE_COMPLETE;
        $errorCode = null;
        $message = null;
        $serializedData = $operation->getSerializedData();
        $unserializedData = $this->jsonHelper->jsonDecode($serializedData);
        try {
            //add here your own logic for async operations
        } catch (\Zend_Db_Adapter_Exception  $e) {
            //here sample how to process exceptions if they occurred
            $this->logger->critical($e->getMessage());
            //you can add here your own type of exception when operation can be retried
            if (
                $e instanceof LockWaitException
                || $e instanceof DeadlockException
                || $e instanceof ConnectionException
            ) {
                $status = OperationInterface::STATUS_TYPE_RETRIABLY_FAILED;
                $errorCode = $e->getCode();
                $message = __($e->getMessage());
            } else {
                $status = OperationInterface::STATUS_TYPE_NOT_RETRIABLY_FAILED;
                $errorCode = $e->getCode();
                $message = __('Sorry, something went wrong during product prices update. Please see log for details.');
            }

        } catch (NoSuchEntityException $e) {
            $this->logger->critical($e->getMessage());
            $status = ($e instanceof TemporaryStateExceptionInterface) ? OperationInterface::STATUS_TYPE_NOT_RETRIABLY_FAILED : OperationInterface::STATUS_TYPE_NOT_RETRIABLY_FAILED;
            $errorCode = $e->getCode();

            $message = $e->getMessage();
            unset($unserializedData['entity_link']);
            $serializedData = $this->jsonHelper->jsonEncode($unserializedData);
        } catch (LocalizedException $e) {
            $this->logger->critical($e->getMessage());
            $status = OperationInterface::STATUS_TYPE_NOT_RETRIABLY_FAILED;
            $errorCode = $e->getCode();
            $message = $e->getMessage();
        } catch (\Exception $e) {
            $this->logger->critical($e->getMessage());
            $status = OperationInterface::STATUS_TYPE_NOT_RETRIABLY_FAILED;
            $errorCode = $e->getCode();
            $message = __('Sorry, something went wrong during product prices update. Please see log for details.');
        }

        //update operation status based on result performing operation(it was successfully executed or exception occurs
        $this->operationManagement->changeOperationStatus(
            $operation->getId(),
            $status,
            $errorCode,
            $message,
            $serializedData
        );
    }
}
```

## Configure message queues

The message queue topology must be configured to implement bulk operations. Create or edit the following files in the module's `app/code/<vendor>/<module_name>/etc` directory.

*  `communication.xml`
*  `di.xml`
*  `queue_consumer.xml`
*  `queue_publisher.xml`
*  `queue_topology.xml`

For more information about the `di.xml` file, see [Dependency Injection](../dependency-injection.md). For information the other files, see [Configure message queues](configuration.md).

### Create `communication.xml`

The `communication.xml` file defines aspects of the message queue system that apply to all topics for the [module](https://glossary.magento.com/module). Create this file with the following contents:

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Communication/etc/communication.xsd">
    <topic name="<your_topic_name>" request="Magento\AsynchronousOperations\Api\Data\OperationInterface">
        <handler name="<your_handler_name>" type="<Consumer_Class>" method="<consumer_method>" />
    </topic>
</config>
```

### Create `di.xml`

Add the following type to the module's `di.xml` file.

```xml
<type name="Magento\Framework\MessageQueue\MergerFactory">
    <arguments>
        <argument name="mergers" xsi:type="array">
            <item name="<your_consumer_name>" xsi:type="string"><Merger_Class></item>
        </argument>
    </arguments>
</type>
```

### Create `queue_consumer.xml`

The `queue_consumer.xml` file defines the relationship between a queue and its consumer. Create this file with the following contents:

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/consumer.xsd">
    <consumer name="<consumer_name>" queue="<queue_name>" connection="amqp" consumerInstance="Magento\Framework\MessageQueue\Consumer" handler="<Consumer_Class>::<Consumer_method>"/>
</config>
```

### Create `queue_publisher.xml`

The `queue_publisher.xml` file defines the exchange where a topic is published. Create this file with the following contents:

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/publisher.xsd">
    <publisher topic="<topic_name>">
        <connection name="amqp" exchange="<exchange>" />
    </publisher>
</config>
```

### Create `queue_topology.xml`

The `queue_topology.xml` file defines the message routing rules and declares queues and exchanges. Create this file with the following contents:

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/topology.xsd">
    <exchange name="magento" type="topic" connection="amqp">
        <binding id="defaultBinding" topic="" destinationType="queue" destination="<queue_name>"/>
    </exchange>
</config>
```

<InlineAlert variant="info" slots="text"/>

Message queue connections are defined dynamically, based on the deployment configuration in the `env.php` file. If AMQP is configured in the deployment configuration of the queue, AMQP connections are used. Otherwise, database connections are used.
As a result, if AMQP is configured in the deployment configuration of the queue, you can omit connection declarations in the `queue_consumer.xml`, `queue_publisher.xml`, and `queue_topology.xml` [message queue configuration files](./configuration.md).
