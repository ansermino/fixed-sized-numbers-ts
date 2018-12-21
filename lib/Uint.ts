import BigNumber from "bignumber.js";
BigNumber.config({
    DECIMAL_PLACES: 0,
});
import {
    DivisionByZeroError,
    FloatingPointNotSupportedError,
    InconsistentSizeError,
    InvalidSizeError,
    NegativeUnsignedError,
    TypeNotSupportedError,
} from "./errors";
import {
    MetaInteger,
    Uint,
    Uint128,
    Uint16,
    Uint256,
    Uint32,
    Uint64,
    Uint8,
} from "./Interfaces";
import { getSize, pipe } from "./utils";
import { bigNumberOrThrowError, checkDivByZero, validateSize } from "./utils/arithmeticFactories";
import { emptyValueToZero, inputTypeToBigNumber, sizeCheck } from "./utils/inputParsers";

// Math Method Factories ( Need to return any type so that it can receive type from Generic )
const addFactory = (initial: MetaInteger) => (addend: Uint): any => {
    if (!initial.validateSize(addend)) {
       throw new InconsistentSizeError(initial._size, addend._size);
    } else {
        return resultTyper(addend)(initial._value.plus(addend._value));
    }
};

const subFactory = (minuend: MetaInteger) => (subtrahend: Uint): any => {
   if (!minuend.validateSize(subtrahend)) {
       throw new InconsistentSizeError(minuend._size, subtrahend._size);
    } else {
        return resultTyper(minuend)(minuend._value.minus(subtrahend._value));
   }
};

const mulFactory = (multiplicand: MetaInteger) => (multiplier: Uint): any => {
   if (!multiplicand.validateSize(multiplier)) {
       throw new InconsistentSizeError(multiplicand._size, multiplier._size);
    } else {
        return resultTyper(multiplicand)(multiplicand._value.multipliedBy(multiplier._value));
   }
};

const divFactory = (dividend: MetaInteger) => (divisor: Uint): any => {
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
const factoryTyper = <U>(metaInt: MetaInteger) => (factory: (internal: MetaInteger) => (external: Uint) => U ) => factory(metaInt);

const resultTyper = (initial: MetaInteger) => (result: BigNumber): Uint => {
    if (initial._size === 8) { return Uint8(result);
    } else if (initial._size === 16) { return Uint16(result);
    } else if (initial._size === 32) { return Uint32(result);
    } else if (initial._size === 64) { return Uint64(result.toString());
    } else if (initial._size === 128) { return Uint128(result.toString());
    } else if (initial._size === 256) { return Uint256(result.toString());
    } else { throw new TypeNotSupportedError(); }
};

const noNegativeUnsignedInteger = (value: BigNumber | Error): BigNumber | Error => {
    if (value instanceof Error) { return value; }
    return value.isPositive() ? value : new NegativeUnsignedError(value.toNumber());
};

// Uint Factory
const buildMetaInt = (size: number) => (value: BigNumber): MetaInteger => ({
    _value: value,
    _size: size,
    validateSize: validateSize(size),
});

const addMathMethods = <T>() => (metaInt: MetaInteger) => ({
    ...metaInt,
    add: factoryTyper<T>(metaInt)(addFactory),
    sub: factoryTyper<T>(metaInt)(subFactory),
    mul: factoryTyper<T>(metaInt)(mulFactory),
    div: factoryTyper<T>(metaInt)(divFactory),
});

const composeObjects = <T>(x) => (y: MetaInteger): T => Object.assign(y, x) as T;

const Uint8 = (value?: number | string | BigNumber): Uint8 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        sizeCheck(8),
        noNegativeUnsignedInteger,
        bigNumberOrThrowError,
        buildMetaInt(8),
        addMathMethods<Uint8>(),
        composeObjects<Uint8>({_uint8: true}),
        Object.freeze,
    )(value);

const Uint16 = (value?: number | string | BigNumber): Uint16 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        sizeCheck(16),
        noNegativeUnsignedInteger,
        bigNumberOrThrowError,
        buildMetaInt(16),
        addMathMethods<Uint16>(),
        composeObjects<Uint16>({_uint16: true}),
        Object.freeze,
    )(value);

const Uint32 = (value?: number | string | BigNumber): Uint32 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        sizeCheck(32),
        noNegativeUnsignedInteger,
        bigNumberOrThrowError,
        buildMetaInt(32),
        addMathMethods<Uint32>(),
        composeObjects<Uint32>({_uint32: true}),
        Object.freeze,
    )(value);

const Uint64 = (value?: string): Uint64 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        sizeCheck(64),
        noNegativeUnsignedInteger,
        bigNumberOrThrowError,
        buildMetaInt(64),
        addMathMethods<Uint64>(),
        composeObjects<Uint64>({_uint64: true}),
    )(value);

const Uint128 = (value?: string): Uint128 => pipe(
    emptyValueToZero,
    inputTypeToBigNumber,
    sizeCheck(128),
    noNegativeUnsignedInteger,
    bigNumberOrThrowError,
    buildMetaInt(128),
    addMathMethods<Uint128>(),
    composeObjects<Uint128>({_uint128: true}),
)(value);

const Uint256 = (value?: string): Uint256 => pipe(
    emptyValueToZero,
    inputTypeToBigNumber,
    sizeCheck(256),
    noNegativeUnsignedInteger,
    bigNumberOrThrowError,
    buildMetaInt(256),
    addMathMethods<Uint256>(),
    composeObjects<Uint256>({_uint256: true}),
)(value);

// Type Checkers
const isUint8 = (x: Uint): x is Uint8 => (x as Uint8)._uint8;
const isUint16 = (x: Uint): x is Uint16 => (x as Uint16)._uint16;
const isUint32 = (x: Uint): x is Uint32 => (x as Uint32)._uint32;
const isUint64 = (x: Uint): x is Uint64 => (x as Uint64)._uint64;
const isUint128 = (x: Uint): x is Uint128 => (x as Uint128)._uint128;
const isUint256 = (x: Uint): x is Uint256 => (x as Uint256)._uint256;

export {
    Uint8,
    Uint16,
    Uint32,
    Uint64,
    Uint128,
    Uint256,
    isUint8,
    isUint16,
    isUint32,
    isUint64,
    isUint128,
    isUint256,
};
