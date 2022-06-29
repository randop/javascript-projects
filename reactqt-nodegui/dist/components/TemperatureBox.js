"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_nodegui_1 = require("@nodegui/react-nodegui");
exports.TemperatureBox = props => {
    return (react_1.default.createElement(react_nodegui_1.View, { style: temperatureBoxStyle },
        react_1.default.createElement(react_nodegui_1.Text, { style: currentTempStyle }, `${props.now} <sup>o</sup>C`),
        react_1.default.createElement(react_nodegui_1.View, { style: smallBox },
            react_1.default.createElement(react_nodegui_1.Text, { style: smallInfo }, `${props.min} <sup>o</sup>C / ${props.max} <sup>o</sup>C`))));
};
const currentTempStyle = `
    font-size: 20px; 
    width: 100px;
    qproperty-alignment: AlignCenter;
    color: #000;
`;
const temperatureBoxStyle = `
    border-right: 1px solid white;
    flex: 1;
    align-items: 'center';
    justify-content: 'center';
`;
const smallBox = `
    flex-direction: 'row';
    align-items: 'center';
    justify-content: 'center';
`;
const smallInfo = `
    width: 150px;
    color: white;
    qproperty-alignment: AlignCenter;
`;
//# sourceMappingURL=TemperatureBox.js.map