import BigNumber from "bignumber.js";
import {
    DivisionByZeroError,
    FloatingPointNotSupportedError,
    InconsistentSizeError,
    OverflowError,
    TypeNotSupportedError,
    UnderflowError
} from "./errors";
import { getSize, pipe } from "./utils";
import { 
    MetaInteger,
    Uint8,
    Uint16,
    Uint32,
    Uint64,
    Uint
} from "./Interfaces";


//  Validators
const validateSize = (a: MetaInteger) => (b: MetaInteger): boolean => a._size === b._size
const checkOverFlow = (iVal: BigNumber) => (iSize: number) => (sum: BigNumber) => iVal.lt(sum) ? sum : new OverflowError(iSize, getSize(sum))
const checkUnderFlow = (iVal: BigNumber) => (iSize: number) => (difference: BigNumber) => iVal.gt(difference) ? difference : new OverflowError(iSize, getSize(difference))
const checkMult = (multiplicand: BigNumber) => (multiplicandSize: number) => (multiplier: BigNumber) => (product: BigNumber) => 
    (multiplicand.toNumber() === 0 || multiplier.toNumber() === 0) && product.toNumber() === 0
        ? product
        : product.dividedBy(multiplier).eq(multiplicand)
            ? product
            : new OverflowError(multiplicandSize, getSize(product))
const checkDivByZero = (divisor: BigNumber) => (quotient: BigNumber) => !divisor.isZero() ? quotient : new DivisionByZeroError()
const bigNumberOrThrowError = (x: BigNumber | Error): BigNumber => {
    if (x instanceof Error) throw x
    else return x
}

// Math Method Factories
const addFactory = <T>(initial: Uint) => (addend:Uint): T => {
   if(initial.validateSize(addend)) throw new InconsistentSizeError(initial._size, addend._size)
   else return pipe ( 
            initial._value.plus, 
            checkOverFlow(initial._value)(initial._size),
            bigNumberOrThrowError,
            resultTyper(addend)
        )(addend._value)
}

const subFactory = <T>(minuend: Uint) => (subtrahend:Uint): T => {
   if(minuend.validateSize(subtrahend)) throw new InconsistentSizeError(minuend._size, subtrahend._size)
   else return pipe ( 
            minuend._value.minus, 
            checkUnderFlow(minuend._value)(minuend._size),
            bigNumberOrThrowError,
            resultTyper(minuend)
        )(subtrahend._value)
}

const mulFactory = <T>(multiplicand: Uint) => (multiplier:Uint): T => {
   if(multiplicand.validateSize(multiplier)) throw new InconsistentSizeError(multiplicand._size, multiplier._size)
   else return pipe ( 
            multiplicand._value.multipliedBy, 
            checkMult(multiplicand._value)(multiplicand._size)(multiplier._value),
            bigNumberOrThrowError,
            resultTyper(multiplicand)
        )(multiplier._value)
}

const divFactory = <T>(dividend: Uint) => (divisor:Uint): T => {
   if(dividend.validateSize(divisor)) throw new InconsistentSizeError(dividend._size, divisor._size)
   else return pipe ( 
            dividend._value.dividedBy, 
            checkDivByZero(dividend._value),
            bigNumberOrThrowError,
            resultTyper(dividend)
        )(divisor._value)
}

// Typers
const factoryTyper = (uint: Uint) => (fn: <T>(internal: Uint) => (external: Uint) => T )  => {
    if (uint._size === 8) return fn<Uint8>(uint)
    else if (uint._size === 16) return fn<Uint16>(uint)
    else if (uint._size === 32) return fn<Uint32>(uint)
    else if (uint._size === 64) return fn<Uint64>(uint)
    else throw new TypeNotSupportedError()
}

const resultTyper = (initial: Uint) => (result: BigNumber) => {
    if (initial._size === 8) return Uint8(result)
    else if (initial._size === 16) return Uint16(result)
    else if (initial._size === 32) return Uint32(result)
    else if (initial._size === 64) return Uint64(result)
    else throw new TypeNotSupportedError()
}

// Type Checkers
const isUint8 = (x: Uint): x is Uint8 => (<Uint8>x)._uint8
const isUint16 = (x: Uint): x is Uint16 => (<Uint16>x)._uint16
const isUint32 = (x: Uint): x is Uint32 => (<Uint32>x)._uint32
const isUint64 = (x: Uint): x is Uint64 => (<Uint64>x)._uint64

// Convert Constructor Inputs to BigNumbers
const emptyValueToZero = x => x ? x : 0
const noFloatString = (x: string): BigNumber | Error => noFloatNumber(parseInt(x))
const noFloatBigNumber = (x: BigNumber): BigNumber | Error => x.isInteger() ? x : new FloatingPointNotSupportedError()
const noFloatNumber = (x: number): BigNumber | Error => x % 1 === 0 ? new BigNumber(x) : new FloatingPointNotSupportedError()

const inputTypeToBigNumber = (value?: number | string | BigNumber): BigNumber | Error => {
    if (value instanceof BigNumber) return noFloatBigNumber(value)
    else if (typeof value === 'string') return noFloatString(value)
    else if (typeof value === 'number') return noFloatNumber(value)
}

// Uint Factory
const buildUint = (_size: number) => (_value: BigNumber): MetaInteger => ({
    _value,
    _size,
    validateSize,
    add: factoryTyper(this)(addFactory),
    sub: factoryTyper(this)(subFactory),
    mul: factoryTyper(this)(mulFactory),
    div: factoryTyper(this)(divFactory),
})

const composeObjects = <T>(x: Object) => (y: Object): T => Object.assign(y, x) as T

const Uint8 = (value?: number | string | BigNumber): Uint8 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        bigNumberOrThrowError,
        buildUint(8),
        composeObjects<Uint8>({_uint8: true})
    )(value)

const Uint16 = (value?: number | string | BigNumber): Uint16 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        bigNumberOrThrowError,
        buildUint(16),
        composeObjects<Uint16>({_uint16: true})
    )(value)

const Uint32 = (value?: number | string | BigNumber): Uint32 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        bigNumberOrThrowError,
        buildUint(32),
        composeObjects<Uint32>({_uint32: true})
    )(value)

const Uint64 = (value?: number | string | BigNumber): Uint64 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        bigNumberOrThrowError,
        buildUint(64),
        composeObjects<Uint64>({_uint64: true})
    )(value)

export default {
    Uint8,
    Uint16,
    Uint32,
    Uint64
}