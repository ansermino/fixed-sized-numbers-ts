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
    Uint16,
    Uint32,
    Uint64,
    Uint8,
} from "./Interfaces";
import { getSize, pipe } from "./utils";


//  Validators
const validateSize = (initialSize: number) => (external: MetaInteger): boolean => initialSize === external._size;
const checkDivByZero = (divisor: BigNumber) => (dividend: BigNumber) => (quotient: BigNumber) => !divisor.isZero() && !dividend.isZero() ? quotient : new DivisionByZeroError();
const bigNumberOrThrowError = (x: BigNumber | Error): BigNumber => {
    if (x instanceof Error) {
        throw x;
    } else { return x; }
};

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
const factoryTyper = <U>(uint: MetaInteger) => (factory: (internal: MetaInteger) => (external: Uint) => U ) => factory(uint);

const resultTyper = (initial: MetaInteger) => (result: BigNumber) => {
    if (initial._size === 8) { return Uint8(result);
    } else if (initial._size === 16) { return Uint16(result);
    } else if (initial._size === 32) { return Uint32(result);
    } else if (initial._size === 64) { return Uint64(result.toString());
    } else { throw new TypeNotSupportedError(); }
};

// Convert Constructor Inputs to BigNumbers
const emptyValueToZero = (x) => x ? x : 0;
const notFloat = (x: number): boolean => x % 1 === 0;

const inputTypeToBigNumber = (value?: number | string | BigNumber): BigNumber | Error => {
    if (value instanceof BigNumber) {
        return value.isInteger() ? value : new FloatingPointNotSupportedError();
    } else if (typeof value === "string") {
        return notFloat(parseInt(value, 10)) ? new BigNumber(value) : new FloatingPointNotSupportedError();
    } else if (typeof value === "number") {
        return notFloat(value) ? new BigNumber(value) : new FloatingPointNotSupportedError();
    }
};

const sizeCheck = (size: number) => (value: BigNumber | Error): BigNumber | Error => {
    if (value instanceof Error) { return value; }
    const numSize = value.toString(2).length;
    return numSize <= size ? value : new InvalidSizeError(numSize);
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

// FIXME: Right now Uint64 can only be constructed using a string because of JS imprecision with numbers
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

// Type Checkers
const isUint8 = (x: Uint): x is Uint8 => (x as Uint8)._uint8;
const isUint16 = (x: Uint): x is Uint16 => (x as Uint16)._uint16;
const isUint32 = (x: Uint): x is Uint32 => (x as Uint32)._uint32;
const isUint64 = (x: Uint): x is Uint64 => (x as Uint64)._uint64;

export {
    Uint8,
    Uint16,
    Uint32,
    Uint64,
    isUint8,
    isUint16,
    isUint32,
    isUint64,
};
