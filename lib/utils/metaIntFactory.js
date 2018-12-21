"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateSize = (initialSize) => (external) => initialSize === external._size;
const buildMetaInt = (size) => (value) => ({
    _value: value,
    _size: size,
    validateSize: validateSize(size),
});
exports.buildMetaInt = buildMetaInt;
const composeObjects = (x) => (y) => Object.assign(y, x);
exports.composeObjects = composeObjects;
