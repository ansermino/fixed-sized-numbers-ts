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
import MetaInteger from "./MetaInteger";
import UintType from "./UintType";


class Uint extends MetaInteger{

    public static ValidateSize(a: Uint, b: Uint) {
        if (a._size !== b._size) {
            throw new InconsistentSizeError(a._size, b._size);
        }
    }
    // TODO: Enforce minimum (positive) size


    constructor(value?: number | string | BigNumber, size?: number) {
        super()
        // No value provided
        if (!value) {
            this._value = new BigNumber(0);
            // BigNumber
        } else if (value instanceof BigNumber) {
            if (value.isInteger()) {
                this._value = value;
            } else {
                throw new FloatingPointNotSupportedError();
            }
            // String
        } else if (typeof value === "string") {
            let val;
            try {
                // TODO: Ensure this handles all radix (possible without specifying separately?)
                val = parseInt(value);

            } catch (err) {
                throw new TypeNotSupportedError();
            }

            if (val % 1 !== 0) {
                throw new FloatingPointNotSupportedError();
            }
            // Number
        } else if (typeof value === "number") {
            if (value % 1 !== 0) {
                throw new FloatingPointNotSupportedError();
            }
            this._value = new BigNumber(value);
        } else {
            throw new TypeNotSupportedError();
        }
        
        if (size && size <= getSize(this._value)){
            this._size = size
        } else {
            this._size = this._value.toNumber().toString(2).length
        }
    }

    public add(i: Uint): Uint {
        Uint.ValidateSize(this, i);

        let res: BigNumber = this._value.plus(i._value);

        if(this._value.gt(res)){
            throw new OverflowError(this._size, res.toString(2).length)
        }

        return new Uint(res);
    }

    public sub(i: Uint): Uint {
        Uint.ValidateSize(this, i);

        let res: BigNumber = this._value.minus(i._value);

        if (this._value.lt(res)) {
            throw new UnderflowError(this._size, res.toString(2).length);
        }

        return new Uint(res);
    }

    public mul(i: Uint): Uint {
        Uint.ValidateSize(this, i);

        if(i._value.isZero() || this._value.isZero()){
            return new Uint(new BigNumber(0))
        }

        let res: BigNumber = this._value.multipliedBy(i._value);
        let divRes: BigNumber = res.dividedBy(this._value)

        if (!divRes.eq(i._value)) {
            throw new OverflowError(this._size, res.toString(2).length);
        }
        return new Uint(res);
    }

    public div(i: Uint): Uint {
        Uint.ValidateSize(this, i);

        if(i._value.isZero()){
            throw new DivisionByZeroError();
        }

        return new Uint(this._value.dividedBy(i._value));
    }

}

export default Uint;