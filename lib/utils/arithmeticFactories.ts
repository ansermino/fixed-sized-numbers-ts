import BigNumber from "bignumber.js";
BigNumber.config({
    DECIMAL_PLACES: 0,
});
import { DivisionByZeroError } from "../errors";
import { MetaInteger } from "../Interfaces";
import { pipe } from "./utils";

//  Validators
// TODO: stop exporting once factories are localized to this file
const validateSize = (initialSize: number) => (external: MetaInteger): boolean => initialSize === external._size;
const checkDivByZero = (divisor: BigNumber) => (dividend: BigNumber) => (quotient: BigNumber) => !divisor.isZero() && !dividend.isZero() ? quotient : new DivisionByZeroError();
const bigNumberOrThrowError = (x: BigNumber | Error): BigNumber => {
    if (x instanceof Error) {
        throw x;
    } else { return x; }
};

export {
    bigNumberOrThrowError,
    checkDivByZero,
    validateSize,
};
