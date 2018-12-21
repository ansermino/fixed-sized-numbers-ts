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
const utils_1 = require("./utils");
const Int_1 = require("../Int");
const Uint_1 = require("../Uint");
//  Validators
// TODO: stop exporting once factories are localized to this file
const checkDivByZero = (divisor) => (dividend) => (quotient) => !divisor.isZero() && !dividend.isZero() ? quotient : new errors_1.DivisionByZeroError();
// Math Method Factories ( Need to return any type so that it can receive type from Generic )
const addFactory = (resultTyper) => (initial) => (addend) => {
    if (!initial.validateSize(addend)) {
        throw new errors_1.InconsistentSizeError(initial._size, addend._size);
    }
    else {
        return resultTyper(addend)(initial._value.plus(addend._value));
    }
};
const subFactory = (resultTyper) => (minuend) => (subtrahend) => {
    if (!minuend.validateSize(subtrahend)) {
        throw new errors_1.InconsistentSizeError(minuend._size, subtrahend._size);
    }
    else {
        return resultTyper(minuend)(minuend._value.minus(subtrahend._value));
    }
};
const mulFactory = (resultTyper) => (multiplicand) => (multiplier) => {
    if (!multiplicand.validateSize(multiplier)) {
        throw new errors_1.InconsistentSizeError(multiplicand._size, multiplier._size);
    }
    else {
        return resultTyper(multiplicand)(multiplicand._value.multipliedBy(multiplier._value));
    }
};
const divFactory = (resultTyper) => (dividend) => (divisor) => {
    if (!dividend.validateSize(divisor)) {
        throw new errors_1.InconsistentSizeError(dividend._size, divisor._size);
    }
    else {
        return utils_1.pipe(checkDivByZero(dividend._value)(divisor._value), utils_1.bigNumberOrThrowError, resultTyper(dividend))(dividend._value.dividedBy(divisor._value));
    }
};
// Typer
const factoryTyper = (metaInt) => (factory) => factory(metaInt);
const resultTyperInt = (initial) => (result) => {
    if (initial._size === 8) {
        return Int_1.Int8(result);
    }
    else if (initial._size === 16) {
        return Int_1.Int16(result);
    }
    else if (initial._size === 32) {
        return Int_1.Int32(result);
    }
    else if (initial._size === 64) {
        return Int_1.Int64(result.toString());
    }
    else if (initial._size === 128) {
        return Int_1.Int128(result.toString());
    }
    else if (initial._size === 256) {
        return Int_1.Int256(result.toString());
    }
    else {
        throw new errors_1.TypeNotSupportedError();
    }
};
exports.resultTyperInt = resultTyperInt;
const resultTyperUint = (initial) => (result) => {
    if (initial._size === 8) {
        return Uint_1.Uint8(result);
    }
    else if (initial._size === 16) {
        return Uint_1.Uint16(result);
    }
    else if (initial._size === 32) {
        return Uint_1.Uint32(result);
    }
    else if (initial._size === 64) {
        return Uint_1.Uint64(result.toString());
    }
    else if (initial._size === 128) {
        return Uint_1.Uint128(result.toString());
    }
    else if (initial._size === 256) {
        return Uint_1.Uint256(result.toString());
    }
    else {
        throw new errors_1.TypeNotSupportedError();
    }
};
exports.resultTyperUint = resultTyperUint;
// Add Methods
const addMathMethods = (resultTyper) => (metaInt) => (Object.assign({}, metaInt, { add: factoryTyper(metaInt)(addFactory(resultTyper)), sub: factoryTyper(metaInt)(subFactory(resultTyper)), mul: factoryTyper(metaInt)(mulFactory(resultTyper)), div: factoryTyper(metaInt)(divFactory(resultTyper)) }));
exports.addMathMethods = addMathMethods;
