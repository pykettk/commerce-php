---
title: Events and Observers | Commerce PHP Extensions
description: Extend Adobe Commerce and Magento Open Source by running custom code in response to specific events.
---

# Events and observers

Working with events and observers is one of the main ways to extend Adobe Commerce and Magento Open Source functionality. The events and observers implementation in Adobe Commerce and Magento Open Source are based on the [publish-subscribe pattern](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern). Using events and observers, you can run your custom code in response to a specific [event](https://glossary.magento.com/event) or even a custom event.

## Events

Events are dispatched by modules when certain actions are triggered. In addition to its own events, the application allows you to create your own events that can be dispatched in your code. When an event is dispatched, it can pass data to any observers configured to watch that event.

### Dispatching events

Events can be dispatched using the [`Magento\Framework\Event\ManagerInterface`](https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Event/ManagerInterface.php) class. This class can be obtained through [dependency injection](../dependency-injection.md) by defining the dependency in your constructor.

To dispatch an event, call the `dispatch` function of the event manager class and provide it with the name of the event you want to dispatch along with an array of data you wish to provide to observers.

The following example shows you how to dispatch an event with and without an array of data.

```php
<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace MyCompany\MyModule;

use Magento\Framework\Event\ManagerInterface as EventManager;

class MyClass
{
    /**
     * @var EventManager
     */
    private $eventManager;

    /*
     * @param EventManager $eventManager
     */
    public function __construct(EventManager $eventManager)
    {
        $this->eventManager = $eventManager;
    }

    public function something()
    {
        $eventData = null;
        // Code...
        $this->eventManager->dispatch('my_module_event_before');
        // More code that sets $eventData...
        $this->eventManager->dispatch('my_module_event_after', ['myEventData' => $eventData]);
    }
}

```

### Creating new events

Custom events can be dispatched by simply passing in a unique event name to the event manager when you call the `dispatch` function. Your unique event name is referenced in your module's `events.xml` file where you specify which observers will react to that event.

You can make the custom event `my_module_event_after` subscribable by declaring the `MyCompany/MyModule/etc/events.xml` file as follows:

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Event/etc/events.xsd">
    <event name="my_module_event_after">
        <observer name="my_module_event_after_observer" instance="MyCompany\MyModule\Observer\MyEvent"/>
    </event>
</config>
```

### Event areas

Generally, the location of the `events.xml` file will be under the `<module-root>/etc` directory. Observers that are associated with events here will watch for these events globally. The `events.xml` file can also be defined under the `<module-root>/etc/frontend` and `<module-root>/etc/adminhtml` directories to configure observers to only watch for events in those specific areas.

Declare the observer in the appropriate area. The `global` area allows the observer to run in all areas (`adminhtml`, `crontab`, `frontend`, `graphql`, `webapi_rest`, `webapi_soap`).

| Area | File location |
| --- | --- |
| `global` | `<module-dir>/etc/events.xml` |
| `adminhtml` | `<module-dir>/etc/adminhtml/events.xml` |
| `crontab` | `<module-dir>/etc/crontab/events.xml` |
| `frontend` | `<module-dir>/etc/frontend/events.xml` |
| `graphql` | `<module-dir>/etc/graphql/events.xml` |
| `webapi_rest` | `<module-dir>/etc/webapi_rest/events.xml` |
| `webapi_soap` | `<module-dir>/etc/webapi_soap/events.xml` |

## Observers

Observers are a certain type of class that can influence general behavior, performance, or change business logic. Observers are executed whenever the event they are configured to watch is dispatched by the event manager.

### Creating an observer

To create an observer, you must place your class file under your `<module-root>/Observer` directory. Your observer class should implement [`Magento\Framework\Event\ObserverInterface`](https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Event/ObserverInterface.php) and define its `execute` function.

Below is an example of the basic observer class structure:

```php
<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace MyCompany\MyModule\Observer;

use Magento\Framework\Event\Observer;
use Magento\Framework\Event\ObserverInterface;

class MyObserver implements ObserverInterface
{
    public function __construct()
    {
        // Observer initialization code...
        // You can use dependency injection to get any class this observer may need.
    }

    public function execute(Observer $observer)
    {
        // Observer execution code...
    }
}
```

One of the more powerful feature of observers is that they are able to use parameters passed into the event when it was dispatched. Below is an example of an observer obtaining data passed in when the event was dispatched.

```php
<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace MyCompany\MyModule\Observer;

use Magento\Framework\Event\Observer;
use Magento\Framework\Event\ObserverInterface;

class AnotherObserver implements ObserverInterface
{
    public function __construct()
    {
        // Observer initialization code...
        // You can use dependency injection to get any class this observer may need.
    }

    public function execute(Observer $observer)
    {
        $myEventData = $observer->getData('myEventData');
        // Additional observer execution code...
    }
}
```

### Subscribing to events

Observers can be configured to watch certain events in the `events.xml` file.

The `observer` [xml](https://glossary.magento.com/xml) element has the following properties:

*  `name` (required) - The name of the observer for the event definition.
*  `instance` (required) - The fully qualified class name of the observer.
*  `disabled` - Determines whether this observer is active or not. Default value is false.
*  `shared` - Determines the [lifestyle](../../build/dependency-injection-file.md#object-lifestyle-configuration) of the class. Default is `true`.

<InlineAlert variant="warning" slots="text"/>

The observer name must be unique, or an override will occur.

Below is an example of how to assign observers to watch certain events:

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Event/etc/events.xsd">
    <event name="my_module_event_before">
        <observer name="myObserverName" instance="MyCompany\MyModule\Observer\MyObserver" />
    </event>
    <event name="my_module_event_after">
        <observer name="myObserverName" instance="MyCompany\MyModule\Observer\AnotherObserver" />
    </event>
</config>
```

In the preceding example, we assign the observer `MyObserver` to the custom event `my_module_event_before` and `AnotherObserver` to `my_module_event_after`.

Observer names must be unique per event definition. This means that you cannot have two observers with the same name in the same event definition. In the example, both observers have the name `myObserverName`. This is acceptable because each of those observers belong to different event definitions.

If you declare an observer with a name that is already in use within the same event, the application merges these declaration nodes into a single observer declaration, respecting the module load order as defined in the `app/etc/config.php` file. This is useful when disabling an observer declared in another module.

### Disabling an observer

Existing observers can be disabled, if you do not want to have them running. It is a good practice to disable the obsever if you want to change its logic rather than override it.
Below is an example of how to disable the previously created observer.

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Event/etc/events.xsd">
    <event name="my_module_event_before">
        <observer name="myObserverName" disabled="true" />
    </event>
</config>
```

## Recommended Reading

*  [Observers best practices](https://developer.adobe.com/commerce/php/best-practices/extensions/observers/)
