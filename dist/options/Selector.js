"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var OptionContext_1 = require("./OptionContext");
function getComponentOptionValue(component) {
    var optionValue = component.optionValue;
    if (!optionValue) {
        throw new Error("optionValue should be provided for " + component);
    }
    return optionValue;
}
var Selector = function (props) {
    var optionContext = React.useContext(OptionContext_1.default);
    var option = props.option, defaultOption = props.defaultOption, children = props.children;
    function updateOptionValues() {
        var values = React.Children.map(children, function (child) { return getComponentOptionValue((child).type); });
        if (new Set(values).size !== values.length) {
            throw new Error('Duplicate values');
        }
        this.optionContext.setOptions(option.key, values);
    }
    function optionContextUpdate() {
        // forceUpdate()
    }
    React.useEffect(function () {
        function initialize() {
            var defaultValue = (typeof defaultOption === 'string' ?
                defaultOption : getComponentOptionValue(defaultOption));
            optionContext.addStateChangeListener(optionContextUpdate);
            optionContext.optionEnter(option.key);
            var optionState = optionContext.getOptionState(option.key);
            updateOptionValues();
            if (optionState) {
                optionContext.setDefaultValue(option.key, defaultValue);
            }
        }
        initialize();
        return function () {
            optionContext.removeStateChangeListener(optionContextUpdate);
            optionContext.optionExit(props.option.key);
        };
    }, []);
    React.useEffect(function () {
        updateOptionValues();
    }, [props]);
    var result = null;
    var value = _this.optionContext.getValue(option.key);
    React.Children.forEach(children, function (child) {
        if (getComponentOptionValue((child).type) === value) {
            result = child;
        }
    });
    return result;
};
exports.default = Selector;
