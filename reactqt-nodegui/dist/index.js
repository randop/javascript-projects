"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_nodegui_1 = require("@nodegui/react-nodegui");
const react_1 = __importStar(require("react"));
const nodegui_1 = require("@nodegui/nodegui");
const os_1 = __importDefault(require("os"));
const weather_1 = require("./utils/weather");
const WeatherIcon_1 = require("./components/WeatherIcon");
const TemperatureBox_1 = require("./components/TemperatureBox");
const Summary_1 = require("./components/Summary");
const PlaceDate_1 = require("./components/PlaceDate");
const App = () => {
    const winRef = react_1.useRef(null);
    const win2Ref = react_1.useRef(null);
    const [weather, setWeather] = react_1.useState(defaultState);
    react_1.useEffect(() => {
        if (winRef.current) {
            const win = winRef.current;
            initWindow(win);
        }
        getWeather();
    }, []);
    const getWeather = react_1.useCallback(() => __awaiter(this, void 0, void 0, function* () {
        console.log("getWeather");
        try {
            const data = yield weather_1.getCurrentWeather();
            setWeather(data);
        }
        catch (err) {
            console.log(err);
        }
    }), []);
    const summary = weather.weather[0] || {};
    const refreshHandler = react_nodegui_1.useEventHandler({
        [nodegui_1.QPushButtonEvents.clicked]: () => __awaiter(this, void 0, void 0, function* () {
            console.log("QPushButtonEvents.clicked");
            setWeather(defaultState);
            yield getWeather();
        })
    }, []);
    const quitHandler = react_nodegui_1.useEventHandler({
        [nodegui_1.QPushButtonEvents.clicked]: () => {
            nodegui_1.QApplication.instance().quit();
        }
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_nodegui_1.Window, { id: "win", ref: winRef, styleSheet: stylesheet },
            react_1.default.createElement(react_nodegui_1.View, { id: "container" },
                react_1.default.createElement(WeatherIcon_1.WeatherIcon, { icon: summary.icon, id: "image" }),
                react_1.default.createElement(react_nodegui_1.View, { id: "details" },
                    react_1.default.createElement(Summary_1.Summary, { title: summary.main, description: summary.description }),
                    react_1.default.createElement(react_nodegui_1.View, { style: midBox },
                        react_1.default.createElement(TemperatureBox_1.TemperatureBox, { now: weather.main.temp, max: weather.main.temp_max, min: weather.main.temp_min }),
                        react_1.default.createElement(PlaceDate_1.PlaceDate, { place: weather.name, date: new Date() })),
                    react_1.default.createElement(react_nodegui_1.View, { style: buttonBox },
                        react_1.default.createElement(react_nodegui_1.Button, { on: refreshHandler, text: "Refresh" }),
                        react_1.default.createElement(react_nodegui_1.Button, { on: quitHandler, text: "Close" }))))),
        react_1.default.createElement(react_nodegui_1.Window, { id: "win2", ref: win2Ref, styleSheet: stylesheet },
            react_1.default.createElement(react_nodegui_1.View, null,
                react_1.default.createElement(react_nodegui_1.Text, { id: "smallInfo" }, "tests")))));
};
const stylesheet = `
  #win {
    background-color: transparent;
  }
  #container {
    height: '100%';
  }
  #details {
    flex: 1;
    padding: 10px;
    justify-content: 'space-around';
    background-color: qlineargradient( x1:0 y1:0, x2:0 y2:1, stop:0 rgba(32,65,106,0.6), stop:1 rgba(8,8,8,0.6));
    border-radius: 5px;
  }
  #image {
    flex: 2;
    qproperty-alignment: 'AlignCenter';
    margin-right: '10%';
  }
  #smallInfo {
    width: 150px;
    color: white;
    qproperty-alignment: AlignCenter;
  }
`;
const midBox = `
    margin-vertical: 10px;
    flex-direction: 'row';
`;
const buttonBox = `
    flex-direction: 'row';
    justify-content: 'center';
`;
const initWindow = (win) => {
    win.hide(); //https://forum.qt.io/topic/60642/framelesswindowhint-fails-at-runtime-on-mainwindow
    win.resize(300, 300);
    win.setWindowFlag(nodegui_1.WindowType.FramelessWindowHint, true);
    win.setWindowFlag(nodegui_1.WindowType.Widget, true);
    if (os_1.default.platform() === "darwin") {
        win.setAttribute(nodegui_1.WidgetAttribute.WA_TranslucentBackground, true);
    }
    win.show();
};
const defaultState = {
    weather: [],
    main: {
        temp: 0,
        temp_min: 0,
        temp_max: 0
    },
    name: "NA"
};
react_nodegui_1.Renderer.render(react_1.default.createElement(App, null), {
    onRender: () => {
        console.log("Yo");
    },
    enableDevtools: false
});
//# sourceMappingURL=index.js.map