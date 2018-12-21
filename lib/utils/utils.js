"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const errors_1 = require("../errors");
const getSize = (num) => {
    if (typeof num === "number") {
        return getNumberSize(num);
    }
    else if (typeof num === "string") {
        return getStringNumberSize(num);
    }
    else if (bignumber_js_1.default.isBigNumber(num)) {
        return getBigNumberSize(num);
    }
    else {
        throw new errors_1.TypeNotSupportedError();
    }
};
exports.getSize = getSize;
const getNumberSize = (num) => num.toString(2).length;
const getBigNumberSize = (num) => num.toNumber().toString(2).length;
const getStringNumberSize = (num) => parseInt(num, 10).toString(2).length;
const bigNumberOrThrowError = (x) => {
    if (x instanceof Error) {
        throw x;
    }
    else {
        return x;
    }
};
exports.bigNumberOrThrowError = bigNumberOrThrowError;
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
exports.pipe = pipe;
