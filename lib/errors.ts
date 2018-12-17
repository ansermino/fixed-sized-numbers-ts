class TypeNotSupportedError extends Error {
    constructor() {
        super("Handling this type is not supported.");
    }
}
class InvalidSizeError extends Error {
    constructor(val: number) {
        super(`Invalid size: ${val}`);
    }
}
class NegativeUnsignedError extends Error {
    constructor(val: number) {
        super(`Cannot construct negative unsigned integers, value attempted: ${val}`);
    }
}
class OverflowError extends Error {
    constructor(capacity: number, required: number) {
        super(`Overflow error: capacity ${capacity}, required: ${required}`);
    }

}
class UnderflowError extends Error {
    constructor(capacity: number, required: number) {
        super(`Underflow error: capacity ${capacity}, required: ${required}`);
    }

}
class InconsistentSizeError extends Error {
    constructor(a: number, b: number) {
        super(`Cannot perform operations on different sized numbers. Got ${a} and ${b}`);
    }
}
class FloatingPointNotSupportedError extends Error {
    constructor() {
        super("This library currently only supports integers.");
    }
}
class DivisionByZeroError extends Error {
    constructor() {
        super("Division by zero.");
    }
}

export {
    TypeNotSupportedError,
    InvalidSizeError,
    OverflowError,
    UnderflowError,
    InconsistentSizeError,
    FloatingPointNotSupportedError,
    DivisionByZeroError,
    NegativeUnsignedError,
};
