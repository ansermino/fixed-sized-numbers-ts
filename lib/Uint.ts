import BigNumber from "bignumber.js";
import {
    DivisionByZeroError,
    FloatingPointNotSupportedError,
    InconsistentSizeError,
    InvalidSizeError,
    OverflowError,
    TypeNotSupportedError,
    UnderflowError,
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
const checkOverFlow = (iVal: BigNumber) => (iSize: number) => (sum: BigNumber) => iVal.lt(sum) ? sum : new OverflowError(iSize, getSize(sum));
const checkUnderFlow = (iVal: BigNumber) => (iSize: number) => (difference: BigNumber) => iVal.gt(difference) ? difference : new UnderflowError(iSize, getSize(difference));
const checkMult = (multiplicand: BigNumber) => (multiplicandSize: number) => (multiplier: BigNumber) => (product: BigNumber) =>
    (multiplicand.toNumber() === 0 || multiplier.toNumber() === 0) && product.toNumber() === 0
        ? product
        : product.dividedBy(multiplier).eq(multiplicand)
            ? product
            : new OverflowError(multiplicandSize, getSize(product));
const checkDivByZero = (divisor: BigNumber) => (quotient: BigNumber) => !divisor.isZero() ? quotient : new DivisionByZeroError();
const bigNumberOrThrowError = (x: BigNumber | Error): BigNumber => {
    if (x instanceof Error) {
        throw x;
    } else { return x; }
};

// Math Method Factories
const addFactory = (initial: MetaInteger) => (addend: Uint) => {
    if (!initial.validateSize(addend)) {
       throw new InconsistentSizeError(initial._size, addend._size);
    } else { return pipe (
            checkOverFlow(initial._value)(initial._size),
            bigNumberOrThrowError,
            resultTyper(addend),
        )(initial._value.plus(addend._value));
   }
};

const subFactory = (minuend: MetaInteger) => (subtrahend: Uint) => {
   if (!minuend.validateSize(subtrahend)) {
       throw new InconsistentSizeError(minuend._size, subtrahend._size);
    } else { return pipe (
            checkUnderFlow(minuend._value)(minuend._size),
            bigNumberOrThrowError,
            resultTyper(minuend),
        )(minuend._value.minus(subtrahend._value));
   }
};

const mulFactory = (multiplicand: MetaInteger) => (multiplier: Uint) => {
   if (!multiplicand.validateSize(multiplier)) {
       throw new InconsistentSizeError(multiplicand._size, multiplier._size);
    } else { return pipe (
            checkMult(multiplicand._value)(multiplicand._size)(multiplier._value),
            bigNumberOrThrowError,
            resultTyper(multiplicand),
        )(multiplicand._value.multipliedBy(multiplier._value));
   }
};

const divFactory = (dividend: MetaInteger) => (divisor: Uint) => {
   if (!dividend.validateSize(divisor)) {
       throw new InconsistentSizeError(dividend._size, divisor._size);
    } else { return pipe (
            checkDivByZero(dividend._value),
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
    } else if (initial._size === 64) { return Uint64(result);
    } else { throw new TypeNotSupportedError(); }
};

// Convert Constructor Inputs to BigNumbers
const emptyValueToZero = (x) => x ? x : 0;
const noFloatString = (x: string): BigNumber | Error => noFloatNumber(parseInt(x, 10));
const noFloatBigNumber = (x: BigNumber): BigNumber | Error => x.isInteger() ? x : new FloatingPointNotSupportedError();
const noFloatNumber = (x: number): BigNumber | Error => x % 1 === 0 ? new BigNumber(x) : new FloatingPointNotSupportedError();

const inputTypeToBigNumber = (value?: number | string | BigNumber): BigNumber | Error => {
    if (value instanceof BigNumber) { return noFloatBigNumber(value);
    } else if (typeof value === "string") { return noFloatString(value);
    } else if (typeof value === "number") { return noFloatNumber(value); }
};

const sizeCheck = (size: number) => (value: BigNumber | Error): BigNumber | Error => {
    if (value instanceof Error) { return value; }
    const numSize = value.toString(2).length;
    return numSize <= size ? value : new InvalidSizeError(numSize);
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
        bigNumberOrThrowError,
        buildMetaInt(8),
        addMathMethods<Uint8>(),
        composeObjects<Uint8>({_uint8: true}),
    )(value);

const Uint16 = (value?: number | string | BigNumber): Uint16 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        sizeCheck(16),
        bigNumberOrThrowError,
        buildMetaInt(16),
        addMathMethods<Uint16>(),
        composeObjects<Uint16>({_uint16: true}),
    )(value);

const Uint32 = (value?: number | string | BigNumber): Uint32 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        sizeCheck(32),
        bigNumberOrThrowError,
        buildMetaInt(32),
        addMathMethods<Uint32>(),
        composeObjects<Uint32>({_uint32: true}),
    )(value);

const Uint64 = (value?: number | string | BigNumber): Uint64 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        sizeCheck(64),
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
