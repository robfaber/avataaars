"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var options_1 = require("./options");
var avatar_1 = require("./avatar");
var piece_1 = require("./avatar/piece");
var avatar_2 = require("./avatar");
exports.AvatarStyle = avatar_2.AvatarStyle;
var options_2 = require("./options");
exports.Option = options_2.Option;
exports.OptionContext = options_2.OptionContext;
exports.AvatarComponent = function (props) {
    var avatarStyle = props.avatarStyle, style = props.style;
    var optionContext = new options_1.OptionContext(options_1.AllOptions);
    React.useEffect(function () {
        function updateOptionContext() {
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
        updateOptionContext();
    }, [props]);
    return (React.createElement(options_1.Context.Provider, { value: optionContext },
        React.createElement(avatar_1.default, { avatarStyle: avatarStyle, style: style })));
};
exports.default = exports.AvatarComponent;
exports.Piece = function (props) {
    var avatarStyle = props.avatarStyle, style = props.style, pieceType = props.pieceType, pieceSize = props.pieceSize, viewBox = props.viewBox;
    var optionContext = new options_1.OptionContext(options_1.AllOptions);
    React.useEffect(function () {
        function updateOptionContext() {
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
        updateOptionContext();
    }, [props]);
    return (React.createElement(options_1.Context.Provider, { value: optionContext },
        React.createElement(piece_1.default, { avatarStyle: avatarStyle, style: style, pieceType: pieceType, pieceSize: pieceSize, viewBox: viewBox })));
};
