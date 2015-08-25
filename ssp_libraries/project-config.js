/*
 * Must also be valid JSON object after the ' = ', in order to work locally
 * Don't panic, new Object() is used instead of brackets for local parsing purposes
 * Therefore, DON'T USE BRACKETS BEFORE OR AFTER THE CONFIG ONES
 */
var SC = SC || new Object();
SC.projectConfig = {
    "local": {
        "host": "localhost/",
        "folder": "Bliss/",
        "hosting_folder": "Hosting Files/"
    },
    "hosting_files_folder": "Live Hosting Files",
    "urlroots": {
        "global": "global",
        "shopflow": "shopflow",
        "myaccount": "myaccount",
        "checkout": "checkout"
    },
    "site": {
        "categories": {
            "enable": true,
            "home_id": 72,
            "secure_enable": true,
            "secure_enable_subcategories": true
        },
        "content": {
            "enable": true,
            "secure_enable": false
        },
        "showOrdesAlsoFromSites": []
    },
    "precedences": {
        "global": [
            "Bliss SuiteCommerce/Global/"
        ],
        "shopflow": [
            "Bliss Reference/Reference ShopFlow 1.06.0/",
            "Bliss SuiteCommerce/Global/",
            "Bliss SuiteCommerce/ShopFlow/"
        ],
        "myaccount": [
            "Bliss Reference/Reference My Account/",
            "Bliss SuiteCommerce/Global/",
            "Bliss SuiteCommerce/MyAccount/"
        ],
        "checkout": [
            "Bliss Reference/Reference Checkout/",
            "Bliss SuiteCommerce/Global/",
            "Bliss SuiteCommerce/Checkout/"
        ]
    },
    "async_apps": ["shopflow"],
    "combiners": {
        "suitelet": {
            "script": "customscript_ns_sca_trigger_combiners",
            "deploy": "customdeploy_ns_sca_trigger_combiners"
        },
        "publisher": "Bliss - SuiteCommerce",
        "applications": {
            "shopflow" : {
                "folder": "ShopFlow",
                "combine": ["js", "js/libs", "skins/standard", "templates"]
            },
            "myaccount" : {
                "folder": "MyAccount",
                "combine": ["js", "skins/standard", "templates"]
            },
            "checkout" : {
                "folder": "Checkout",
                "combine": ["js", "skins/standard", "templates"]
            }
        },
        "password": {
            "required": false,
            "value": "CombineDaFil3s!"
        }
    }
};
