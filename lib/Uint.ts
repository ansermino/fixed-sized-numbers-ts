import BigNumber from "bignumber.js";
import {
    DivisionByZeroError,
    FloatingPointNotSupportedError,
    InconsistentSizeError,
    OverflowError,
    TypeNotSupportedError,
    UnderflowError
} from "./errors";
import { getMaxValue, getSize } from "./utils";
import { 
    MetaInteger,
    Uint8,
    Uint16,
    Uint32,
    Uint64,
    Uint
} from "./Interfaces";

// Validators
const validateSize = (a: MetaInteger) => (b: MetaInteger): boolean => a._size === b._size
const checkOverFlow = (iVal: BigNumber) => (iSize: number) => (sum: BigNumber) => iVal.lt(sum) ? sum : new OverflowError(iSize, getSize(sum))
const checkUnderFlow = (iVal: BigNumber) => (iSize: number) => (difference: BigNumber) => iVal.gt(difference) ? difference : new OverflowError(iSize, getSize(sum))
const bigNumberOrThrowError = (x: BigNumber | Error): BigNumber => {
    if (x instanceof Error) throw x
    else return x
}

const addFactory = <T>(initial: Uint) => (addend:Uint): T => {
   if(initial.validateSize(addend)) throw new InconsistentSizeError(initial._size, addend._size)
   else return pipe ( 
            initial._value.plus, 
            checkOverFlow(initial._value)(initial._size)
        )(addend._value)
}

const subFactory = <T>(minuend: Uint) => (subtrahend:Uint): T => {
   if(minuend.validateSize(subtrahend)) throw new InconsistentSizeError(minuend._size, subtrahend._size)
   else return pipe ( 
            minuend._value.minus, 
            checkUnderFlow(minuend._value)(minuend._size)
        )(subtrahend._value)
}

const funcTyper = (uint: Uint) => (fn: <T>(internal: Uint) => (external: Uint) => T )  => {
    if (uint._size === 8) return fn<Uint8>(uint)
    else if (uint._size === 16) return fn<Uint16>(uint)
    else if (uint._size === 32) return fn<Uint32>(uint)
    else if (uint._size === 64) return fn<Uint64>(uint)
    else throw new TypeNotSupportedError()
}



const sub = (m) => m
const mul = (m) => m
const div = (m) => m

const isUint8 = (x: Uint): x is Uint8 => (<Uint8>x)._uint8 
const isUint16 = (x: Uint): x is Uint16 => (<Uint16>x)._uint16 
const isUint32 = (x: Uint): x is Uint32 => (<Uint32>x)._uint32 
const isUint64 = (x: Uint): x is Uint64 => (<Uint64>x)._uint64 

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)

const emptyValueToZero = x => x ? x : 0
const noFloatString = (x: string): BigNumber | Error => noFloatNumber(parseInt(x))
const noFloatBigNumber = (x: BigNumber): BigNumber | Error => x.isInteger() ? x : new FloatingPointNotSupportedError()
const noFloatNumber = (x: number): BigNumber | Error => x % 1 === 0 ? new BigNumber(x) : new FloatingPointNotSupportedError()

const inputTypeToBigNumber = (value?: number | string | BigNumber): BigNumber | Error => {
    if (value instanceof BigNumber) return noFloatBigNumber(value)
    else if (typeof value === 'string') return noFloatString(value)
    else if (typeof value === 'number') return noFloatNumber(value)
}



const buildUint = (_size: number) => (_value: BigNumber): MetaInteger => ({
    _value,
    _size,
    validateSize,
    add: funcTyper(this)(addFactory),
    sub: funcTyper(this)(subFactory),
    mul,
    div,
})

const composeObjects = (x: Object) => (y: Object) => Object.assign(y, x)

const Uint8 = (value?: number | string | BigNumber): Uint8 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        bigNumberOrThrowError,
        buildUint(8),
        composeObjects({_uint8: true})
    )(value)

const Uint16 = (value?: number | string | BigNumber): Uint16 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        bigNumberOrThrowError,
        buildUint(16),
        composeObjects({_uint16: true})
    )(value)

const Uint32 = (value?: number | string | BigNumber): Uint32 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        bigNumberOrThrowError,
        buildUint(32),
        composeObjects({_uint32: true})
    )(value)

const Uint64 = (value?: number | string | BigNumber): Uint64 => pipe(
        emptyValueToZero,
        inputTypeToBigNumber,
        bigNumberOrThrowError,
        buildUint(64),
        composeObjects({_uint64: true})
    )(value)



// class Uint extends MetaInteger{

//     public static ValidateSize(a: Uint, b: Uint) {
//         if (a._size !== b._size) {
//             throw new InconsistentSizeError(a._size, b._size);
//         }
//     }
//     // TODO: Enforce minimum (positive) size


//     constructor(value?: number | string | BigNumber, size?: number) {
//         super()
//         // No value provided
//         if (!value) {
//             this._value = new BigNumber(0);
//             // BigNumber
//         } else if (value instanceof BigNumber) {
//             if (value.isInteger()) {
//                 this._value = value;
//             } else {
//                 throw new FloatingPointNotSupportedError();
//             }
//             // String
//         } else if (typeof value === "string") {
//             let val;
//             try {
//                 // TODO: Ensure this handles all radix (possible without specifying separately?)
//                 val = parseInt(value);

//             } catch (err) {
//                 throw new TypeNotSupportedError();
//             }

//             if (val % 1 !== 0) {
//                 throw new FloatingPointNotSupportedError();
//             }
//             // Number
//         } else if (typeof value === "number") {
//             if (value % 1 !== 0) {
//                 throw new FloatingPointNotSupportedError();
//             }
//             this._value = new BigNumber(value);
//         } else {
//             throw new TypeNotSupportedError();
//         }
        
//         if (size && size <= getSize(this._value)){
//             this._size = size
//         } else {
//             this._size = this._value.toNumber().toString(2).length
//         }
//     }

//     public add(i: Uint): Uint {
//         Uint.ValidateSize(this, i);

//         let res: BigNumber = this._value.plus(i._value);

//         if(this._value.gt(res)){
//             throw new OverflowError(this._size, res.toString(2).length)
//         }

//         return new Uint(res);
//     }

//     public sub(i: Uint): Uint {
//         Uint.ValidateSize(this, i);

//         let res: BigNumber = this._value.minus(i._value);

//         if (this._value.lt(res)) {
//             throw new UnderflowError(this._size, res.toString(2).length);
//         }

//         return new Uint(res);
//     }

//     public mul(i: Uint): Uint {
//         Uint.ValidateSize(this, i);

//         if(i._value.isZero() || this._value.isZero()){
//             return new Uint(new BigNumber(0))
//         }

//         let res: BigNumber = this._value.multipliedBy(i._value);
//         let divRes: BigNumber = res.dividedBy(this._value)

//         if (!divRes.eq(i._value)) {
//             throw new OverflowError(this._size, res.toString(2).length);
//         }
//         return new Uint(res);
//     }

//     public div(i: Uint): Uint {
//         Uint.ValidateSize(this, i);

//         if(i._value.isZero()){
//             throw new DivisionByZeroError();
//         }

//         return new Uint(this._value.dividedBy(i._value));
//     }

// }

// export default Uint;