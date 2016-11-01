import transformAppDecComponent from "babel-plugin-app-decorators-component";
import transformDecoratorsLegacy from "babel-plugin-transform-decorators-legacy";
import transformClassProperties from "babel-plugin-transform-class-properties";
import transformFunctionBind from "babel-plugin-transform-function-bind";

export default {
    plugins: [
        transformAppDecComponent,
        transformDecoratorsLegacy,
        transformClassProperties,
        transformFunctionBind,
    ]
};