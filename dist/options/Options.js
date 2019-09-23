"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Option_1 = require("./Option");
exports.TopOption = new Option_1.default({
    key: 'topType',
    label: 'Top'
});
exports.AccessoriesOption = new Option_1.default({
    key: 'accessoriesType',
    label: '↳ 👓 Accessories'
});
exports.HatColorOption = new Option_1.default({
    key: 'hatColor',
    label: '🎨 HatColor'
});
exports.HairColorOption = new Option_1.default({
    key: 'hairColor',
    label: '↳ 💈 Hair Color'
});
exports.FacialHairOption = new Option_1.default({
    key: 'facialHairType',
    label: 'Facial Hair'
});
exports.FacialHairColor = new Option_1.default({
    key: 'facialHairColor',
    label: '↳ ✂️ Facial Hair Color'
});
exports.ClotheOption = new Option_1.default({
    key: 'clotheType',
    label: '👔 Clothes'
});
exports.ClotheColorOption = new Option_1.default({
    key: 'clotheColor',
    label: '↳ Color Fabric'
});
exports.GraphicOption = new Option_1.default({
    key: 'graphicType',
    label: '↳ Graphic'
});
exports.EyesOption = new Option_1.default({
    key: 'eyeType',
    label: '👁 Eyes'
});
exports.EyebrowOption = new Option_1.default({
    key: 'eyebrowType',
    label: '✏️ Eyebrow'
});
exports.MouthOption = new Option_1.default({
    key: 'mouthType',
    label: '👄 Mouth'
});
exports.SkinOption = new Option_1.default({
    key: 'skinColor',
    label: '🎨 Skin'
});
var AllOptions = [
    exports.TopOption,
    exports.AccessoriesOption,
    exports.HatColorOption,
    exports.HairColorOption,
    exports.FacialHairOption,
    exports.FacialHairColor,
    exports.ClotheOption,
    exports.ClotheColorOption,
    exports.GraphicOption,
    exports.EyesOption,
    exports.EyebrowOption,
    exports.MouthOption,
    exports.SkinOption
];
exports.default = AllOptions;
