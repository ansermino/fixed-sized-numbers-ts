import BigNumber from "bignumber.js";
BigNumber.config({
    DECIMAL_PLACES: 0,
});
import { FloatingPointNotSupportedError, InvalidSizeError } from "../errors";

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

const sizeCheckUint = (size: number) => (value: BigNumber | Error): BigNumber | Error => {
    if (value instanceof Error) { return value; }
    const numSize = value.toString(2).length;
    return numSize <= size ? value : new InvalidSizeError(numSize);
};

const sizeCheckInt = (size: number) => (value: BigNumber | Error): BigNumber | Error => {
    if (value instanceof Error) { return value; }
    const numSize = value.toString(2).length;
    const adjustedSize = value >= new BigNumber(0) ? numSize + 1 : numSize;
    return adjustedSize <= size ? value : new InvalidSizeError(numSize);
};

export {
    emptyValueToZero,
    inputTypeToBigNumber,
    sizeCheckUint,
    sizeCheckInt,
};
