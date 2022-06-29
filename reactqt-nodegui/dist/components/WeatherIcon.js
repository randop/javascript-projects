"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_nodegui_1 = require("@nodegui/react-nodegui");
const path_1 = __importDefault(require("path"));
const nodegui_1 = require("@nodegui/nodegui");
const rootDir = path_1.default.resolve(__dirname, "../..");
const assetUrl = path_1.default.resolve(rootDir, "src/assets/icons");
exports.WeatherIcon = react_1.default.memo(props => {
    const iconId = props.icon || "na";
    const imageUrl = `${path_1.default.resolve(assetUrl, `${iconId}.png`)}`;
    return (react_1.default.createElement(react_nodegui_1.Image, Object.assign({}, props, { src: imageUrl, aspectRatioMode: nodegui_1.AspectRatioMode.KeepAspectRatio })));
});
//# sourceMappingURL=WeatherIcon.js.map