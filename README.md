# RocketWeb UI Core module
Magento 2 module including custom functionality and UI customizations. Module can be used on its own but works best with [RW Prime theme](https://github.com/rocketweb-fed/magento2-theme-prime) which it comes bundled with.

## Installation
Install using Composer
```
$ composer require rocketweb/module-ui-core
```
To install manually download the module contents into app/code/RocketWeb/UiCore

Once installed enable module and upgrade your magento instance
```
$ bin/magento module:enable RocketWeb_UiCore
$ bin/magento setup:upgrade
```

## Changes:
- added Style Guide page that can be enabled/disabled via config
- added product labels
- added social sharing buttons on PDP
