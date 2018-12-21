import BigNumber from "bignumber.js";
BigNumber.config({
    DECIMAL_PLACES: 0,
});

import {
    Int,
    Int8,
    Int16,
    Int32,
    Int64,
    Int128,
    Int256,
    MetaInteger,
} from "./Interfaces";

import { bigNumberOrThrowError, pipe } from "./utils/utils";
import { buildMetaInt, composeObjects } from "./utils/metaIntFactory";
import { resultTyperInt, addMathMethods } from "./utils/arithmeticFactories";
import { emptyValueToZero, inputTypeToBigNumber, sizeCheckInt } from "./utils/inputParsers";

const signInteger = (metaInt: MetaInteger) => ( {...metaInt, _isPositive: metaInt._value >= new BigNumber(0)} );

const IntFactory = <T>(size: number) => (identifier: object) => pipe(
    emptyValueToZero,
    inputTypeToBigNumber,
    sizeCheckInt(size),
    bigNumberOrThrowError,
    buildMetaInt(size),
    signInteger,
    addMathMethods<T>(resultTyperInt),
    composeObjects<T>(identifier),
    Object.freeze,
);

const Int8 = (value?: number | string | BigNumber): Int8 => IntFactory<Int8>(8)({_int8: true})(value);

const Int16 = (value?: number | string | BigNumber): Int16 => IntFactory<Int16>(16)({_int16: true})(value);

const Int32 = (value?: number | string | BigNumber): Int32 => IntFactory<Int32>(32)({_int32: true})(value);

const Int64 = (value?: string): Int64 => IntFactory<Int64>(64)({_int64: true})(value);

const Int128 = (value?: string): Int128 => IntFactory<Int128>(128)({_int128: true})(value);

const Int256 = (value?: string): Int256 => IntFactory<Int256>(256)({_int256: true})(value);

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
