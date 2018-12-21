import BigNumber from "bignumber.js";
BigNumber.config({
    DECIMAL_PLACES: 0,
});
import { DivisionByZeroError, TypeNotSupportedError, InconsistentSizeError } from "../errors";
import { MetaInteger, Int, Uint } from "../Interfaces";
import { pipe, bigNumberOrThrowError } from "./utils";
import { Int128, Int16, Int256, Int32, Int64, Int8 } from "../Int";
import { Uint128, Uint16, Uint256, Uint32, Uint64, Uint8 } from "../Uint";

//  Validators
// TODO: stop exporting once factories are localized to this file
const checkDivByZero = (divisor: BigNumber) => (dividend: BigNumber) => (quotient: BigNumber) => !divisor.isZero() && !dividend.isZero() ? quotient : new DivisionByZeroError();

// Math Method Factories ( Need to return any type so that it can receive type from Generic )
const addFactory = (resultTyper: resTyperUint | resTyperInt) => (initial: MetaInteger) => (addend: Uint | Int): any => {
    if (!initial.validateSize(addend)) {
       throw new InconsistentSizeError(initial._size, addend._size);
    } else {
        return resultTyper(addend)(initial._value.plus(addend._value));
    }
};

const subFactory = (resultTyper: resTyperUint | resTyperInt) => (minuend: MetaInteger) => (subtrahend: Uint | Int): any => {
   if (!minuend.validateSize(subtrahend)) {
       throw new InconsistentSizeError(minuend._size, subtrahend._size);
    } else {
        return resultTyper(minuend)(minuend._value.minus(subtrahend._value));
   }
};

const mulFactory = (resultTyper: resTyperUint | resTyperInt) => (multiplicand: MetaInteger) => (multiplier: Uint | Int): any => {
   if (!multiplicand.validateSize(multiplier)) {
       throw new InconsistentSizeError(multiplicand._size, multiplier._size);
    } else {
        return resultTyper(multiplicand)(multiplicand._value.multipliedBy(multiplier._value));
   }
};

const divFactory = (resultTyper: resTyperUint | resTyperInt) => (dividend: MetaInteger) => (divisor: Uint | Int): any => {
   if (!dividend.validateSize(divisor)) {
       throw new InconsistentSizeError(dividend._size, divisor._size);
    } else { return pipe (
            checkDivByZero(dividend._value)(divisor._value),
            bigNumberOrThrowError,
            resultTyper(dividend),
        )(dividend._value.dividedBy(divisor._value));
   }
};

// Typer
const factoryTyper = <U>(metaInt: MetaInteger) => (factory: (internal: MetaInteger) => (external: Uint | Int) => U ) => factory(metaInt);

const resultTyperInt = (initial: MetaInteger) => (result: BigNumber): Int => {
    if (initial._size === 8) { return Int8(result);
    } else if (initial._size === 16) { return Int16(result);
    } else if (initial._size === 32) { return Int32(result);
    } else if (initial._size === 64) { return Int64(result.toString());
    } else if (initial._size === 128) { return Int128(result.toString());
    } else if (initial._size === 256) { return Int256(result.toString());
    } else { throw new TypeNotSupportedError(); }
};

const resultTyperUint = (initial: MetaInteger) => (result: BigNumber): Uint => {
    if (initial._size === 8) { return Uint8(result);
    } else if (initial._size === 16) { return Uint16(result);
    } else if (initial._size === 32) { return Uint32(result);
    } else if (initial._size === 64) { return Uint64(result.toString());
    } else if (initial._size === 128) { return Uint128(result.toString());
    } else if (initial._size === 256) { return Uint256(result.toString());
    } else { throw new TypeNotSupportedError(); }
};

type resTyperUint = (initial: MetaInteger) => (result: BigNumber) => Uint;
type resTyperInt = (initial: MetaInteger) => (result: BigNumber) => Int;

// Add Methods

const addMathMethods = <T>(resultTyper: resTyperInt | resTyperUint) => (metaInt: MetaInteger) => ({
    ...metaInt,
    add: factoryTyper<T>(metaInt)(addFactory(resultTyper)),
    sub: factoryTyper<T>(metaInt)(subFactory(resultTyper)),
    mul: factoryTyper<T>(metaInt)(mulFactory(resultTyper)),
    div: factoryTyper<T>(metaInt)(divFactory(resultTyper)),
});

export {
    resultTyperInt,
    resultTyperUint,
    addMathMethods,
};

