import BigNumber from "bignumber.js";
import * as Err from "./errors";
import {getMaxValue} from "./utils";
import MetaInteger from "./MetaInteger";
import UintType from "./UintType";



class Uint extends MetaInteger{

    public static ValidateSize(a: Uint, b: Uint) {
        if (a._size !== b._size) {
            throw new Err.InconsistentSizeError(a._size, b._size);
        }
    }
    // TODO: Enforce minimum (positive) size


    constructor(value?: number | string | BigNumber) {
        super()
        // No value provided
        if (!value) {
            this._value = new BigNumber(0);
            // BigNumber
        } else if (value instanceof BigNumber) {
            if (value.isInteger()) {
                this._value = value;
            } else {
                throw new Err.FloatingPointNotSupportedError();
            }
            // String
        } else if (typeof value === "string") {
            let val;
            try {
                // TODO: Ensure this handles all radix (possible without specifying separately?)
                val = parseInt(value);

            } catch (err) {
                throw new Err.TypeNotSupportedError();
            }

            if (val % 1 !== 0) {
                throw new Err.FloatingPointNotSupportedError();
            }
            // Number
        } else if (typeof value === "number") {
            if (value % 1 !== 0) {
                throw new Err.FloatingPointNotSupportedError();
            }
            this._value = new BigNumber(value);
        } else {
            throw new Err.TypeNotSupportedError();
        }

    }

    public add(i: this): this {
        Uint.ValidateSize(this, i);

        let res: BigNumber = this._value.plus(i._value);

        if(this._value.gt(res)){
            throw new Err.OverflowError(this._size, res.toString(2).length)
        }

        return new Uint(res);
    }

    public sub(i: T): T {
        T.ValidateSize(this, i);

        let res: BigNumber = this._value.minus(i._value);

        if (this._value.lt(res)) {
            throw new Err.UnderflowError(this._size, res.toString(2).length);
        }

        return new T(res);
    }

    public mul<T>(i: T): T {
        T.ValidateSize(this, i);

        if(i._value.isZero() || this._value.isZero()){
            return new T(new BigNumber(0))
        }

        let res: BigNumber = this._value.multipliedBy(i._value);
        let divRes: BigNumber = res.dividedBy(this._value)

        if (!divRes.eq(i._value)) {
            throw new Err.OverflowError(this._size, res.toString(2).length);
        }
        return new T(res);
    }

    public div<T>(i: T): T {
        T.ValidateSize(this, i);

        if(i._value.isZero()){
            throw new Err.DivisionByZeroError();
        }

        return new T(this._value.dividedBy(i._value));
    }

}

export default Uint;
