"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var avatar_1 = require("./avatar");
var options_1 = require("./options");
var avatar_2 = require("./avatar");
exports.Avatar = avatar_2.default;
exports.AvatarStyle = avatar_2.AvatarStyle;
var options_2 = require("./options");
exports.Option = options_2.Option;
exports.OptionContext = options_2.OptionContext;
var piece_1 = require("./avatar/piece");
exports.AvatarComponent = function (props) {
    var optionContext = React.useContext(options_1.Context);
    function updateOptionContext(optionContext, props) {
        var data = {};
        for (var _i = 0, AllOptions_1 = options_1.AllOptions; _i < AllOptions_1.length; _i++) {
            var option = AllOptions_1[_i];
            var value = props[option.key];
            if (!value) {
                continue;
            }
            data[option.key] = value;
        }
        optionContext.setData(data);
    }
    React.useEffect(function () {
        updateOptionContext(optionContext, props);
    }, [props]);
    var avatarStyle = props.avatarStyle, style = props.style;
    return (React.createElement(options_1.Context.Provider, { value: optionContext },
        React.createElement(avatar_1.default, { avatarStyle: avatarStyle, style: style })));
};
exports.default = exports.AvatarComponent;
exports.Piece = function (props) {
    var optionContext = React.useContext(options_1.Context);
    function updateOptionContext(optionContext, props) {
        var data = {};
        for (var _i = 0, AllOptions_2 = options_1.AllOptions; _i < AllOptions_2.length; _i++) {
            var option = AllOptions_2[_i];
            var value = props[option.key];
            if (!value) {
                continue;
            }
            data[option.key] = value;
        }
        optionContext.setData(data);
    }
    React.useEffect(function () {
        updateOptionContext(optionContext, props);
    }, [props]);
    var avatarStyle = props.avatarStyle, style = props.style, pieceType = props.pieceType, pieceSize = props.pieceSize, viewBox = props.viewBox;
    return (React.createElement(options_1.Context.Provider, { value: optionContext },
        React.createElement(piece_1.default, { avatarStyle: avatarStyle, style: style, pieceType: pieceType, pieceSize: pieceSize, viewBox: viewBox })));
};
