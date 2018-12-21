"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = __importDefault(require("bignumber.js"));
bignumber_js_1.default.config({
    DECIMAL_PLACES: 0,
});
const errors_1 = require("../errors");
// Convert Constructor Inputs to BigNumbers
const emptyValueToZero = (x) => x ? x : 0;
exports.emptyValueToZero = emptyValueToZero;
const notFloat = (x) => x % 1 === 0;
const inputTypeToBigNumber = (value) => {
    if (value instanceof bignumber_js_1.default) {
        return value.isInteger() ? value : new errors_1.FloatingPointNotSupportedError();
    }
    else if (typeof value === "string") {
        return notFloat(parseInt(value, 10)) ? new bignumber_js_1.default(value) : new errors_1.FloatingPointNotSupportedError();
    }
    else if (typeof value === "number") {
        return notFloat(value) ? new bignumber_js_1.default(value) : new errors_1.FloatingPointNotSupportedError();
    }
};
exports.inputTypeToBigNumber = inputTypeToBigNumber;
const sizeCheckUint = (size) => (value) => {
    if (value instanceof Error) {
        return value;
    }
    const numSize = value.toString(2).length;
    return numSize <= size ? value : new errors_1.InvalidSizeError(numSize);
};
exports.sizeCheckUint = sizeCheckUint;
const sizeCheckInt = (size) => (value) => {
    if (value instanceof Error) {
        return value;
    }
    const numSize = value.toString(2).length;
    const adjustedSize = value >= new bignumber_js_1.default(0) ? numSize + 1 : numSize;
    return adjustedSize <= size ? value : new errors_1.InvalidSizeError(numSize);
};
exports.sizeCheckInt = sizeCheckInt;
