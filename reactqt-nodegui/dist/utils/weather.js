"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
let theCity = "Cebu";
exports.getCurrentWeather = () => __awaiter(this, void 0, void 0, function* () {
    let apiKey = "227cc563e20085503cccb34e04686c36";
    let city = theCity;
    if (theCity === "Cebu") {
        theCity = "Manila";
    }
    else {
        theCity = "Cebu";
    }
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = yield node_fetch_1.default(url);
    const data = yield response.json();
    return data;
});
//# sourceMappingURL=weather.js.map