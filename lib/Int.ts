import BigNumber from "bignumber.js";
BigNumber.config({
    DECIMAL_PLACES: 0,
});
import {
    DivisionByZeroError,
    FloatingPointNotSupportedError,
    InconsistentSizeError,
    InvalidSizeError,
    TypeNotSupportedError,
} from "./errors";
import {
    Int,
    Int128,
    Int16,
    Int256,
    Int32,
    Int64,
    Int8,
    MetaInteger,
} from "./Interfaces";
import { getSize, pipe } from "./utils";
import { bigNumberOrThrowError, checkDivByZero, validateSize } from "./utils/arithmeticFactories";
import { emptyValueToZero, inputTypeToBigNumber, sizeCheck } from "./utils/inputParsers";

// Math Method Factories ( Need to return any type so that it can receive type from Generic )
const addFactory = (initial: MetaInteger) => (addend: Int): any => {
    if (!initial.validateSize(addend)) {
       throw new InconsistentSizeError(initial._size, addend._size);
    } else {
        return resultTyper(addend)(initial._value.plus(addend._value));
    }
};

const subFactory = (minuend: MetaInteger) => (subtrahend: Int): any => {
   if (!minuend.validateSize(subtrahend)) {
       throw new InconsistentSizeError(minuend._size, subtrahend._size);
    } else {
        return resultTyper(minuend)(minuend._value.minus(subtrahend._value));
   }
};

const mulFactory = (multiplicand: MetaInteger) => (multiplier: Int): any => {
   if (!multiplicand.validateSize(multiplier)) {
       throw new InconsistentSizeError(multiplicand._size, multiplier._size);
    } else {
        return resultTyper(multiplicand)(multiplicand._value.multipliedBy(multiplier._value));
   }
};

const divFactory = (dividend: MetaInteger) => (divisor: Int): any => {
   if (!dividend.validateSize(divisor)) {
       throw new InconsistentSizeError(dividend._size, divisor._size);
    } else { return pipe (
            checkDivByZero(dividend._value)(divisor._value),
            bigNumberOrThrowError,
            resultTyper(dividend),
        )(dividend._value.dividedBy(divisor._value));
   }
};

// Typers
const factoryTyper = <U>(uint: MetaInteger) => (factory: (internal: MetaInteger) => (external: Int) => U ) => factory(uint);

const resultTyper = (initial: MetaInteger) => (result: BigNumber): Int => {
    if (initial._size === 8) { return Int8(result);
    } else if (initial._size === 16) { return Int16(result);
    } else if (initial._size === 32) { return Int32(result);
    } else if (initial._size === 64) { return Int64(result.toString());
    } else if (initial._size === 128) { return Int128(result.toString());
    } else if (initial._size === 256) { return Int256(result.toString());
    } else { throw new TypeNotSupportedError(); }
};

// Int Factory
const buildMetaInt = (size: number) => (value: BigNumber): MetaInteger => ({
    _value: value,
    _size: size,
    validateSize: validateSize(size),
});

const signInteger = (metaInt: MetaInteger) => ( {...metaInt, _isPositive: metaInt._value >= new BigNumber(0)} );

const addMathMethods = <T>() => (metaInt: MetaInteger) => ({
    ...metaInt,
    add: factoryTyper<T>(metaInt)(addFactory),
    sub: factoryTyper<T>(metaInt)(subFactory),
    mul: factoryTyper<T>(metaInt)(mulFactory),
    div: factoryTyper<T>(metaInt)(divFactory),
});

const composeObjects = <T>(x) => (y: MetaInteger): T => Object.assign(y, x) as T;

const Int8 = (value?: number | string | BigNumber): Int8 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        sizeCheck(8),
        bigNumberOrThrowError,
        buildMetaInt(8),
        signInteger,
        addMathMethods<Int8>(),
        composeObjects<Int8>({_int8: true}),
        Object.freeze,
    )(value);

const Int16 = (value?: number | string | BigNumber): Int16 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        sizeCheck(16),
        bigNumberOrThrowError,
        buildMetaInt(16),
        signInteger,
        addMathMethods<Int16>(),
        composeObjects<Int16>({_int16: true}),
        Object.freeze,
    )(value);

const Int32 = (value?: number | string | BigNumber): Int32 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        sizeCheck(32),
        bigNumberOrThrowError,
        buildMetaInt(32),
        signInteger,
        addMathMethods<Int32>(),
        composeObjects<Int32>({_int32: true}),
        Object.freeze,
    )(value);

const Int64 = (value?: string): Int64 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        sizeCheck(64),
        bigNumberOrThrowError,
        buildMetaInt(64),
        signInteger,
        addMathMethods<Int64>(),
        composeObjects<Int64>({_int64: true}),
        Object.freeze,
    )(value);

const Int128 = (value?: string): Int128 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        sizeCheck(128),
        bigNumberOrThrowError,
        buildMetaInt(128),
        signInteger,
        addMathMethods<Int128>(),
        composeObjects<Int128>({_int128: true}),
        Object.freeze,
    )(value);

const Int256 = (value?: string): Int256 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        sizeCheck(256),
        bigNumberOrThrowError,
        buildMetaInt(256),
        signInteger,
        addMathMethods<Int256>(),
        composeObjects<Int256>({_int256: true}),
        Object.freeze,
    )(value);

// Type Checkers
const isInt8 = (x: Int): x is Int8 => (x as Int8)._int8;
const isInt16 = (x: Int): x is Int16 => (x as Int16)._int16;
const isInt32 = (x: Int): x is Int32 => (x as Int32)._int32;
const isInt64 = (x: Int): x is Int64 => (x as Int64)._int64;
const isInt128 = (x: Int): x is Int128 => (x as Int128)._int128;
const isInt256 = (x: Int): x is Int256 => (x as Int256)._int256;

export {
    Int8,
    Int16,
    Int32,
    Int64,
    Int128,
    Int256,
    isInt8,
    isInt16,
    isInt32,
    isInt64,
    isInt128,
    isInt256,
};
