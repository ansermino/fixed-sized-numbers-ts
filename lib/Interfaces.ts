import BigNumber from "bignumber.js";

interface MetaIntCore {
    _value: BigNumber;
    _size: number;
    validateSize(a: MetaIntCore);
}

interface MetaInteger extends MetaIntCore {
    add(n: MetaIntCore): MetaInteger;
    sub(n: MetaIntCore): MetaInteger;
    mul(n: MetaIntCore): MetaInteger;
    div(n: MetaIntCore): MetaInteger;
}

interface Uint8 extends MetaInteger {
    _uint8: boolean;
}
interface Uint16 extends MetaInteger {
    _uint16: boolean;
}
interface Uint32 extends MetaInteger {
    _uint32: boolean;
}
interface Uint64 extends MetaInteger {
    _uint64: boolean;
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
    MetaIntCore,
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
