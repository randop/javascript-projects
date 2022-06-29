"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_nodegui_1 = require("@nodegui/react-nodegui");
//https://doc.qt.io/qt-5/04-qdoc-commands-textmarkup.html
exports.Summary = props => {
    return (react_1.default.createElement(react_nodegui_1.View, { style: containerStyle },
        react_1.default.createElement(react_nodegui_1.Text, { style: textStyle }, `<b>${props.title}</b>: <i>${props.description}</i>.`)));
};
const containerStyle = `
    align-items: 'center';
`;
const textStyle = `
  color: white;
`;
//# sourceMappingURL=Summary.js.map