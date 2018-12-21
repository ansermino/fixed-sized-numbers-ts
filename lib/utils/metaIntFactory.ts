import BigNumber from "bignumber.js";
import { MetaInteger } from "../Interfaces";

const validateSize = (initialSize: number) => (external: MetaInteger): boolean => initialSize === external._size;

const buildMetaInt = (size: number) => (value: BigNumber): MetaInteger => ({
    _value: value,
    _size: size,
    validateSize: validateSize(size),
});

const composeObjects = <T>(x) => (y: MetaInteger): T => Object.assign(y, x) as T;

export {
    buildMetaInt,
    composeObjects,
};
