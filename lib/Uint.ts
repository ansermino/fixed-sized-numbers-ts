import BigNumber from "bignumber.js";
BigNumber.config({
    DECIMAL_PLACES: 0,
});

import {
    Uint,
    Uint8,
    Uint16,
    Uint32,
    Uint64,
    Uint128,
    Uint256,
} from "./Interfaces";

import { NegativeUnsignedError } from "./errors";
import { bigNumberOrThrowError, pipe } from "./utils/utils";
import { buildMetaInt, composeObjects } from "./utils/metaIntFactory";
import { resultTyperUint, addMathMethods } from "./utils/arithmeticFactories";
import { emptyValueToZero, inputTypeToBigNumber, sizeCheckUint } from "./utils/inputParsers";

const noNegativeUnsignedInteger = (value: BigNumber | Error): BigNumber | Error => {
    if (value instanceof Error) { return value; }
    return value.isPositive() ? value : new NegativeUnsignedError(value.toNumber());
};

const UintFactory = <T>(size: number) => (identifier: object) => pipe(
    emptyValueToZero,
    inputTypeToBigNumber,
    sizeCheckUint(size),
    noNegativeUnsignedInteger,
    bigNumberOrThrowError,
    buildMetaInt(size),
    addMathMethods<T>(resultTyperUint),
    composeObjects<T>(identifier),
    Object.freeze,
);

const Uint8 = (value?: number | string | BigNumber): Uint8 => UintFactory<Uint8>(8)({_uint8: true})(value);

const Uint16 = (value?: number | string | BigNumber): Uint16 => UintFactory<Uint16>(16)({_uint16: true})(value);

const Uint32 = (value?: number | string | BigNumber): Uint32 => UintFactory<Uint32>(32)({_uint32: true})(value);

const Uint64 = (value?: string): Uint64 => UintFactory<Uint64>(64)({_uint64: true})(value);

const Uint128 = (value?: string): Uint128 => UintFactory<Uint128>(128)({_uint128: true})(value);

const Uint256 = (value?: string): Uint256 => UintFactory<Uint256>(256)({_uint256: true})(value);

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
