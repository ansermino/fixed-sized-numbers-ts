import BigNumber from "bignumber.js";

interface MetaInteger {
    _value: BigNumber;
    _size: number;
    validateSize(a: MetaInteger);
}


interface Uint8 extends MetaInteger {
    _uint8: boolean;
    add(n: Uint8): Uint8;
    sub(n: Uint8): Uint8;
    mul(n: Uint8): Uint8;
    div(n: Uint8): Uint8;
}
interface Uint16 extends MetaInteger {
    _uint16: boolean;
    add(n: Uint16): Uint16;
    sub(n: Uint16): Uint16;
    mul(n: Uint16): Uint16;
    div(n: Uint16): Uint16;
}
interface Uint32 extends MetaInteger {
    _uint32: boolean;
    add(n: Uint32): Uint32;
    sub(n: Uint32): Uint32;
    mul(n: Uint32): Uint32;
    div(n: Uint32): Uint32;
}
interface Uint64 extends MetaInteger {
    _uint64: boolean;
    add(n: Uint64): Uint64;
    sub(n: Uint64): Uint64;
    mul(n: Uint64): Uint64;
    div(n: Uint64): Uint64;
}

interface Uint128 extends MetaInteger {
    _uint128: boolean;
    add(n: Uint128): Uint128;
    sub(n: Uint128): Uint128;
    mul(n: Uint128): Uint128;
    div(n: Uint128): Uint128;
}

interface Uint256 extends MetaInteger {
    _uint256: boolean;
    add(n: Uint256): Uint256;
    sub(n: Uint256): Uint256;
    mul(n: Uint256): Uint256;
    div(n: Uint256): Uint256;
}

type Uint = Uint8 | Uint16 | Uint32 | Uint64 | Uint128 | Uint256;

interface Int8 extends MetaInteger {
    _int8: boolean;
    _isPositive: boolean;
    add(n: Int8): Int8;
    sub(n: Int8): Int8;
    mul(n: Int8): Int8;
    div(n: Int8): Int8;
}
interface Int16 extends MetaInteger {
    _int16: boolean;
    _isPositive: boolean;
    add(n: Int16): Int16;
    sub(n: Int16): Int16;
    mul(n: Int16): Int16;
    div(n: Int16): Int16;
}
interface Int32 extends MetaInteger {
    _int32: boolean;
    _isPositive: boolean;
    add(n: Int32): Int32;
    sub(n: Int32): Int32;
    mul(n: Int32): Int32;
    div(n: Int32): Int32;
}
interface Int64 extends MetaInteger {
    _int64: boolean;
    _isPositive: boolean;
    add(n: Int64): Int64;
    sub(n: Int64): Int64;
    mul(n: Int64): Int64;
    div(n: Int64): Int64;
}

interface Int128 extends MetaInteger {
    _int128: boolean;
    _isPositive: boolean;
    add(n: Int128): Int128;
    sub(n: Int128): Int128;
    mul(n: Int128): Int128;
    div(n: Int128): Int128;
}

interface Int256 extends MetaInteger {
    _int256: boolean;
    _isPositive: boolean;
    add(n: Int256): Int256;
    sub(n: Int256): Int256;
    mul(n: Int256): Int256;
    div(n: Int256): Int256;
}

type Int = Int8 | Int16 | Int32 | Int64 | Int128 | Int256 ;


export {
    MetaInteger,
    Uint8,
    Uint16,
    Uint32,
    Uint64,
    Uint128,
    Uint256,
    Uint,
    Int8,
    Int16,
    Int32,
    Int64,
    Int128,
    Int256,
    Int,
};
