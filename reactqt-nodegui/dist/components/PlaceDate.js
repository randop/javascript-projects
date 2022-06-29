"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_nodegui_1 = require("@nodegui/react-nodegui");
const helpers_1 = require("../utils/helpers");
exports.PlaceDate = props => {
    return (react_1.default.createElement(react_nodegui_1.View, { style: containerStyle },
        react_1.default.createElement(react_nodegui_1.Text, { style: placeStyle }, props.place),
        react_1.default.createElement(react_nodegui_1.Text, { style: dateStyle }, helpers_1.dateFormatter(props.date))));
};
const placeStyle = `
    flex: 1;
    font-size: 20px; 
    qproperty-alignment: 'AlignCenter';
    color: white;
`;
const dateStyle = `
    flex: 1;
    font-size: 12px;
    qproperty-alignment: 'AlignCenter';
    color: white;
`;
const containerStyle = `
    flex: 1;
`;
//# sourceMappingURL=PlaceDate.js.map