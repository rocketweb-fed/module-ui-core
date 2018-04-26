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

    CONST XML_PATH_ENABLE      = 'rw_uicore/general/enable';
    CONST XML_PATH_STYLE_GUIDE = 'rw_uicore/style_guide/enable';

    public function __construct(
        \Magento\Framework\App\Helper\Context $context,
        \Magento\Framework\App\Config\ScopeConfigInterface $scopeConfig
    ) {
        parent::__construct($context);

        $this->_scopeConfig = $scopeConfig;
    }

    /** 
     * Return true if UI core module is enabled
     * @return bool
    */
    public function getEnable(){
        return $this->_scopeConfig->getValue(self::XML_PATH_ENABLE);
    }

    /** 
     * Return true if Style Guid page is enabled
     * @return bool
    */
    public function getStyleGuide(){
        return $this->_scopeConfig->getValue(self::XML_PATH_STYLE_GUIDE);
    }

    /** 
     * Return true if social share buttons option is enabled
     * @return bool
    */
    public function isShareButtonsEnabled() {
        return $this->_scopeConfig->getValue('rw_uicore/social_sharing/enable');
    }

    /** 
     * Return social share buttons code
     * @return bool
    */
    public function getShareButtonsCode() {
        return $this->_scopeConfig->getValue('rw_uicore/social_sharing/share_buttons');
    }

}

