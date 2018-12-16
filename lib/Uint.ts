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
    MetaIntCore,
    MetaInteger,
    Uint,
    Uint16,
    Uint32,
    Uint64,
    Uint8,
} from "./Interfaces";
import { getSize, pipe } from "./utils";


//  Validators
const validateSize = (initialSize: number) => (external: MetaIntCore): boolean => initialSize === external._size;
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
const addFactory = <T>(initial: MetaIntCore) => (addend: Uint): T => {
    if (!initial.validateSize(addend)) {
       throw new InconsistentSizeError(initial._size, addend._size);
    } else { return pipe (
            checkOverFlow(initial._value)(initial._size),
            bigNumberOrThrowError,
            resultTyper(addend),
        )(initial._value.plus(addend._value));
   }
};

const subFactory = <T>(minuend: MetaIntCore) => (subtrahend: Uint): T => {
   if (!minuend.validateSize(subtrahend)) {
       throw new InconsistentSizeError(minuend._size, subtrahend._size);
    } else { return pipe (
            minuend._value.minus,
            checkUnderFlow(minuend._value)(minuend._size),
            bigNumberOrThrowError,
            resultTyper(minuend),
        )(subtrahend._value);
   }
};

const mulFactory = <T>(multiplicand: MetaIntCore) => (multiplier: Uint): T => {
   if (!multiplicand.validateSize(multiplier)) {
       throw new InconsistentSizeError(multiplicand._size, multiplier._size);
    } else { return pipe (
            multiplicand._value.multipliedBy,
            checkMult(multiplicand._value)(multiplicand._size)(multiplier._value),
            bigNumberOrThrowError,
            resultTyper(multiplicand),
        )(multiplier._value);
   }
};

const divFactory = <T>(dividend: MetaIntCore) => (divisor: Uint): T => {
   if (!dividend.validateSize(divisor)) {
       throw new InconsistentSizeError(dividend._size, divisor._size);
    } else { return pipe (
            dividend._value.dividedBy,
            checkDivByZero(dividend._value),
            bigNumberOrThrowError,
            resultTyper(dividend),
        )(divisor._value);
   }
};

// Typers
const factoryTyper = (uint: MetaIntCore) => (factory: <T>(internal: MetaIntCore) => (external: Uint) => T )  => {
    if (uint._size === 8) { return factory<Uint8>(uint);
    } else if (uint._size === 16) { return factory<Uint16>(uint);
    } else if (uint._size === 32) { return factory<Uint32>(uint);
    } else if (uint._size === 64) { return factory<Uint64>(uint);
    } else { throw new TypeNotSupportedError(); }
};

const resultTyper = (initial: MetaIntCore) => (result: BigNumber) => {
    if (initial._size === 8) { return Uint8(result);
    } else if (initial._size === 16) { return Uint16(result);
    } else if (initial._size === 32) { return Uint32(result);
    } else if (initial._size === 64) { return Uint64(result);
    } else { throw new TypeNotSupportedError(); }
};

const coerceUint8 = (uint: Uint): Uint8 => {
    if (isUint8(uint)) { return uint;
    } else { throw new TypeNotSupportedError(); }
};
const coerceUint16 = (uint: Uint): Uint16 => {
    if (isUint16(uint)) { return uint;
    } else { throw new TypeNotSupportedError(); }
};
const coerceUint32 = (uint: Uint): Uint32 => {
    if (isUint32(uint)) { return uint;
    } else { throw new TypeNotSupportedError(); }
};
const coerceUint64 = (uint: Uint): Uint64 => {
    if (isUint64(uint)) { return uint;
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
const buildUint = (coercer) => (size: number) => (value: BigNumber): MetaInteger => ({
    _value: value,
    _size: size,
    validateSize: validateSize(size),
    add: factoryTyper({_value: value, _size: size, validateSize: validateSize(size)})(addFactory),
    sub: factoryTyper({_value: value, _size: size, validateSize: validateSize(size)})(subFactory),
    mul: factoryTyper({_value: value, _size: size, validateSize: validateSize(size)})(mulFactory),
    div: factoryTyper({_value: value, _size: size, validateSize: validateSize(size)})(divFactory),
});

const composeObjects = <T>(x) => (y: MetaInteger): T => Object.assign(y, x) as T;

const Uint8 = (value?: number | string | BigNumber): Uint8 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        sizeCheck(8),
        bigNumberOrThrowError,
        buildUint(8),
        composeObjects<Uint8>({_uint8: true}),
    )(value);

const Uint16 = (value?: number | string | BigNumber): Uint16 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        sizeCheck(16),
        bigNumberOrThrowError,
        buildUint(16),
        composeObjects<Uint16>({_uint16: true}),
    )(value);

const Uint32 = (value?: number | string | BigNumber): Uint32 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        sizeCheck(32),
        bigNumberOrThrowError,
        buildUint(32),
        composeObjects<Uint32>({_uint32: true}),
    )(value);

const Uint64 = (value?: number | string | BigNumber): Uint64 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        sizeCheck(64),
        bigNumberOrThrowError,
        buildUint(64),
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
