import BigNumber from "bignumber.js";
import { TypeNotSupportedError } from "./errors";

const getSize = (num) => {
    if (typeof num === "number") { return getNumberSize(num);
    } else if (typeof num === "string") { return getStringNumberSize(num);
    } else if (BigNumber.isBigNumber(num)) { return getBigNumberSize(num);
    } else { throw new TypeNotSupportedError(); }
};

const getNumberSize = (num: number): number => num.toString(2).length;
const getBigNumberSize = (num: BigNumber): number => num.toNumber().toString(2).length;
const getStringNumberSize = (num: string): number => parseInt(num, 10).toString(2).length;

// const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
const pipe = (...fns) => (x) => fns.reduce((v, f) => {
    // console.log(`acc:  ${v}`);
    // console.log(`${f}`);
    return f(v);
}, x);

export {
    getSize,
    pipe,
};
