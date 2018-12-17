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

type Uint = Uint8 | Uint16 | Uint32 | Uint64;

interface Int8 extends MetaInteger {
    _int8: boolean;
}
interface Int16 extends MetaInteger {
    _int16: boolean;
}
interface Int32 extends MetaInteger {
    _int32: boolean;
}
interface Int64 extends MetaInteger {
    _int64: boolean;
}

type Integer = Int8 | Int16 | Int32 | Int64;


export {
    MetaInteger,
    Uint8,
    Uint16,
    Uint32,
    Uint64,
    Uint,
    Int8,
    Int16,
    Int32,
    Int64,
    Integer,
};
