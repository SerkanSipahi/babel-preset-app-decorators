import transformAppDecComponent from "babel-plugin-app-decorators-component";
import transformAppDecComponentRegister from 'babel-plugin-app-decorators-component-register';
import transformDecoratorsLegacy from "babel-plugin-transform-decorators-legacy";
import transformClassProperties from "babel-plugin-transform-class-properties";
import transformFunctionBind from "babel-plugin-transform-function-bind";

export default {
    plugins: [
        transformAppDecComponent,
        [transformAppDecComponentRegister, {
            "storage_pointer": '@component',
            "imports": [
                { "IMPORT_NAME": "Register", "SOURCE": "app-decorators-helper/register-customelement" },
                { "IMPORT_NAME": "storage",  "SOURCE": "app-decorators-helper/random-storage" },
            ],
        }],
        transformDecoratorsLegacy,
        transformClassProperties,
        transformFunctionBind,
    ]
};