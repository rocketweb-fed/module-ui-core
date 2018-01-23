<?php
/**
 * @author Rocket Web Team
 * @copyright Copyright (c) 2018 Rocket Web (http://www.rocketweb.com)
 * @package RocketWeb_UiCore
 */
namespace RocketWeb\UiCore\Helper;

class Data extends \Magento\Framework\App\Helper\AbstractHelper
{
    /**
     * @var \Magento\Framework\App\Config\ScopeConfigInterfac
     */
    protected $_scopeConfig;

    CONST XML_PATH_ENABLE      = 'uicore/general/enable';
    CONST XML_PATH_STYLE_GUIDE = 'uicore/style_guide/enable';

    public function __construct(
        \Magento\Framework\App\Helper\Context $context,
        \Magento\Framework\App\Config\ScopeConfigInterface $scopeConfig
    ) {
        parent::__construct($context);

        $this->_scopeConfig = $scopeConfig;
    }

    public function getEnable(){
        return $this->_scopeConfig->getValue(self::XML_PATH_ENABLE);
    }

    public function getStyleGuide(){
        return $this->_scopeConfig->getValue(self::XML_PATH_STYLE_GUIDE);
    }

}

