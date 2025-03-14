---
title: Optimal Development Environment | Commerce PHP Extensions
description: Learn about the ideal local development environment for Adobe Commerce and Magento Open Source extension developers.
---

# Optimal development environment

A typical software development flow is as follows:

**Local dev machine** > **QA/integration server** > **Preview server** (optional) > **Production server**

Whether you are writing a new [extension](https://glossary.magento.com/extension) or contributing to the [code base](https://github.com/magento/magento2), the first step for any developer is setting up a development environment.
This article will guide you in setting up and optimizing your local development machine.

## Local development machine

Your local development machine is where you develop and deploy your code to test it against a running Adobe Commerce or Magento Open Source application.
Its configuration should be as close to a production server as possible.

In your development machine, make sure you are running the Adobe Commerce or Magento Open Source application in [developer mode](https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/setup/application-modes.html).
You can enable this mode with the command `bin/magento deploy:mode:set developer`.

### Installation

The following is a list of the different ways you can install Adobe Commerce or Magento Open Source locally:

*  **Manual installation:**
   If you are developing on a local machine that meets the system requirements, you can follow the same steps for [installing](https://devdocs.magento.com/guides/v2.4/install-gde/bk-install-guide.html) on a production server.
*  **Virtual Machine (VM) installation:**
   Installing Adobe Commerce and Magento Open Source in a virtual environment allows you to run it without the need to install a local [LAMP](https://en.wikipedia.org/wiki/LAMP_(software_bundle)) stack.

   You can use a VM tool, such as [VirtualBox](https://www.virtualbox.org/wiki/VirtualBox), together with a virtual environment tool, such as [Vagrant](https://www.vagrantup.com/) or [Docker](https://www.docker.com/), to create reusable and shareable instances for development.

   A search for ["magento developer box"](https://github.com/search?utf8=%E2%9C%93&q=magento+developer+box) in GitHub provides a list of unofficial virtual machines configured for development.

### Optimal configuration

The following is a list of optimizations you can make on your local development machine

*  We recommend installing and using the latest supported version of [PHP](https://glossary.magento.com/php) 7 to increase performance.
*  Replace your MySQL database with [Percona](https://www.percona.com/software/mysql-database/percona-server).
*  Make sure you install and enable [PHP OPcache](http://php.net/manual/en/intro.opcache.php).
*  Xdebug is off by default. Enable this feature only when you need it because it requires a lot of memory and degrades performance.
   The `xdebug.max_nesting_level` configuration needs to be set to 200 or greater for Magento.
   You can increase the memory available to PHP to get an increase in performance with Xdebug on.
*  If you need sample data, you can install it using [composer](https://devdocs.magento.com/guides/v2.4/install-gde/install/web/install-web-sample-data-composer.html) or by [cloning repositories](https://devdocs.magento.com/guides/v2.4/install-gde/install/web/install-web-sample-data-clone.html).
*  To speed up frontend development, [turn off merging of CSS and JavaScript](https://docs.magento.com/user-guide/system/file-optimization.html).
*  Make sure [caching](https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cache/caching-overview.html) is turned on (this is the default behavior).
   Generally, only page [cache](https://glossary.magento.com/cache) and block cache should be turned off for development and turned back on when testing.
*  [Opcache timestamp validation](http://php.net/manual/en/opcache.configuration.php#ini.opcache.validate-timestamps) should always be on for development.
   Development is impossible with opcache on and revalidation off because any PHP modification would require a cache reset.
