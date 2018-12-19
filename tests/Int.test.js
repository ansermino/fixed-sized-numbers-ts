"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const chai_1 = require("chai");
require("mocha");
const Int_1 = require("../lib/Int");
describe("Basic Int construction without value", () => {
    it("Int8 should construct properly when not given a value", () => {
        const int8 = Int_1.Int8();
        chai_1.expect(int8._value.toNumber()).to.be.equal(0);
        chai_1.expect(int8._size).to.be.equal(8);
        chai_1.assert(int8._int8);
    });
    it("Int16 should construct properly when not given a value", () => {
        const int16 = Int_1.Int16();
        chai_1.expect(int16._value.toNumber()).to.be.equal(0);
        chai_1.expect(int16._size).to.be.equal(16);
        chai_1.assert(int16._int16);
    });
    it("Int32 should construct properly when not given a value", () => {
        const int32 = Int_1.Int32();
        chai_1.expect(int32._value.toNumber()).to.be.equal(0);
        chai_1.expect(int32._size).to.be.equal(32);
        chai_1.assert(int32._int32);
    });
    it("Int64 should construct properly when not given a value", () => {
        const int64 = Int_1.Int64();
        chai_1.expect(int64._value.toNumber()).to.be.equal(0);
        chai_1.expect(int64._size).to.be.equal(64);
        chai_1.assert(int64._int64);
    });
});
describe("Basic Int construction with value: 0", () => {
    it("Int8 should construct properly when given a value of 0", () => {
        const int8 = Int_1.Int8(0);
        chai_1.expect(int8._value.toNumber()).to.be.equal(0);
        chai_1.expect(int8._size).to.be.equal(8);
        chai_1.assert(int8._int8);
    });
    it("int16 should construct properly when given a value of 0", () => {
        const int16 = Int_1.Int16(0);
        chai_1.expect(int16._value.toNumber()).to.be.equal(0);
        chai_1.expect(int16._size).to.be.equal(16);
        chai_1.assert(int16._int16);
    });
    it("int32 should construct properly when given a value of 0", () => {
        const int32 = Int_1.Int32(0);
        chai_1.expect(int32._value.toNumber()).to.be.equal(0);
        chai_1.expect(int32._size).to.be.equal(32);
        chai_1.assert(int32._int32);
    });
    it("int64 should construct properly when given a value of 0", () => {
        const int64 = Int_1.Int64("0");
        chai_1.expect(int64._value.toNumber()).to.be.equal(0);
        chai_1.expect(int64._size).to.be.equal(64);
        chai_1.assert(int64._int64);
    });
});
describe("Basic int construction with value: 1 (as String, Number, and BigNumber)", () => {
    it("int8 should construct properly when given a Number value of 1 ", () => {
        const int8 = Int_1.Int8(1);
        chai_1.assert(bignumber_js_1.default.isBigNumber(int8._value));
        chai_1.expect(int8._value.toNumber()).to.be.equal(1);
        chai_1.expect(int8._size).to.be.equal(8);
        chai_1.assert(int8._int8);
    });
    it("int8 should construct properly when given a String value of 1", () => {
        const int8 = Int_1.Int8("1");
        chai_1.assert(bignumber_js_1.default.isBigNumber(int8._value));
        chai_1.expect(int8._value.toNumber()).to.be.equal(1);
        chai_1.expect(int8._size).to.be.equal(8);
        chai_1.assert(int8._int8);
    });
    it("int8 should construct properly when given a BigNumber value of 1", () => {
        const int8 = Int_1.Int8(new bignumber_js_1.default(1));
        chai_1.assert(bignumber_js_1.default.isBigNumber(int8._value));
        chai_1.expect(int8._value.toNumber()).to.be.equal(1);
        chai_1.expect(int8._size).to.be.equal(8);
        chai_1.assert(int8._int8);
    });
    it("int16 should construct properly when given a Number value of 1", () => {
        const int16 = Int_1.Int16(1);
        chai_1.assert(bignumber_js_1.default.isBigNumber(int16._value));
        chai_1.expect(int16._value.toNumber()).to.be.equal(1);
        chai_1.expect(int16._size).to.be.equal(16);
        chai_1.assert(int16._int16);
    });
    it("int16 should construct properly when given a String value of 1", () => {
        const int16 = Int_1.Int16("1");
        chai_1.assert(bignumber_js_1.default.isBigNumber(int16._value));
        chai_1.expect(int16._value.toNumber()).to.be.equal(1);
        chai_1.expect(int16._size).to.be.equal(16);
        chai_1.assert(int16._int16);
    });
    it("int16 should construct properly when given a BigNumber value of 1", () => {
        const int16 = Int_1.Int16(new bignumber_js_1.default(1));
        chai_1.assert(bignumber_js_1.default.isBigNumber(int16._value));
        chai_1.expect(int16._value.toNumber()).to.be.equal(1);
        chai_1.expect(int16._size).to.be.equal(16);
        chai_1.assert(int16._int16);
    });
    it("int32 should construct properly when given a Number value of 1", () => {
        const int32 = Int_1.Int32(1);
        chai_1.assert(bignumber_js_1.default.isBigNumber(int32._value));
        chai_1.expect(int32._value.toNumber()).to.be.equal(1);
        chai_1.expect(int32._size).to.be.equal(32);
        chai_1.assert(int32._int32);
    });
    it("int32 should construct properly when given a String value of 1", () => {
        const int32 = Int_1.Int32("1");
        chai_1.assert(bignumber_js_1.default.isBigNumber(int32._value));
        chai_1.expect(int32._value.toNumber()).to.be.equal(1);
        chai_1.expect(int32._size).to.be.equal(32);
        chai_1.assert(int32._int32);
    });
    it("int32 should construct properly when given a BigNumber value of 1", () => {
        const int32 = Int_1.Int32(new bignumber_js_1.default(1));
        chai_1.assert(bignumber_js_1.default.isBigNumber(int32._value));
        chai_1.expect(int32._value.toNumber()).to.be.equal(1);
        chai_1.expect(int32._size).to.be.equal(32);
        chai_1.assert(int32._int32);
    });
    // TODO: Might implement these tests later when we have a better precision solution for Int64
    // it("int64 should construct properly when given a Number value of 1", () => {
    //     const int64 = Int64(1);
    //     assert(BigNumber.isBigNumber(int64._value));
    //     expect(int64._value.toNumber()).to.be.equal(1);
    //     expect(int64._size).to.be.equal(64);
    //     assert(int64._int64);
    // });
    it("int64 should construct properly when given a String value of 1", () => {
        const int64 = Int_1.Int64("1");
        chai_1.assert(bignumber_js_1.default.isBigNumber(int64._value));
        chai_1.expect(int64._value.toNumber()).to.be.equal(1);
        chai_1.expect(int64._size).to.be.equal(64);
        chai_1.assert(int64._int64);
    });
    // it("int64 should construct properly when given a BigNumber value of 1", () => {
    //     const int64 = Int64(new BigNumber(1));
    //     assert(BigNumber.isBigNumber(int64._value));
    //     expect(int64._value.toNumber()).to.be.equal(1);
    //     expect(int64._size).to.be.equal(64);
    //     assert(int64._int64);
    // });
});
describe("Basic int construction with value of: -1 (as String, Number, and BigNumber)", () => {
    it("int8 should construct properly when given a Number value of 1 ", () => {
        const int8 = Int_1.Int8(-1);
        chai_1.assert(bignumber_js_1.default.isBigNumber(int8._value));
        chai_1.expect(int8._value.toNumber()).to.be.equal(-1);
        chai_1.expect(int8._size).to.be.equal(8);
        chai_1.assert(int8._int8);
    });
    it("int8 should construct properly when given a String value of 1", () => {
        const int8 = Int_1.Int8("-1");
        chai_1.assert(bignumber_js_1.default.isBigNumber(int8._value));
        chai_1.expect(int8._value.toNumber()).to.be.equal(-1);
        chai_1.expect(int8._size).to.be.equal(8);
        chai_1.assert(int8._int8);
    });
    it("int8 should construct properly when given a BigNumber value of 1", () => {
        const int8 = Int_1.Int8(new bignumber_js_1.default(-1));
        chai_1.assert(bignumber_js_1.default.isBigNumber(int8._value));
        chai_1.expect(int8._value.toNumber()).to.be.equal(-1);
        chai_1.expect(int8._size).to.be.equal(8);
        chai_1.assert(int8._int8);
    });
    it("int16 should construct properly when given a Number value of 1", () => {
        const int16 = Int_1.Int16(-1);
        chai_1.assert(bignumber_js_1.default.isBigNumber(int16._value));
        chai_1.expect(int16._value.toNumber()).to.be.equal(-1);
        chai_1.expect(int16._size).to.be.equal(16);
        chai_1.assert(int16._int16);
    });
    it("int16 should construct properly when given a String value of 1", () => {
        const int16 = Int_1.Int16("-1");
        chai_1.assert(bignumber_js_1.default.isBigNumber(int16._value));
        chai_1.expect(int16._value.toNumber()).to.be.equal(-1);
        chai_1.expect(int16._size).to.be.equal(16);
        chai_1.assert(int16._int16);
    });
    it("int16 should construct properly when given a BigNumber value of 1", () => {
        const int16 = Int_1.Int16(new bignumber_js_1.default(-1));
        chai_1.assert(bignumber_js_1.default.isBigNumber(int16._value));
        chai_1.expect(int16._value.toNumber()).to.be.equal(-1);
        chai_1.expect(int16._size).to.be.equal(16);
        chai_1.assert(int16._int16);
    });
    it("int32 should construct properly when given a Number value of 1", () => {
        const int32 = Int_1.Int32(-1);
        chai_1.assert(bignumber_js_1.default.isBigNumber(int32._value));
        chai_1.expect(int32._value.toNumber()).to.be.equal(-1);
        chai_1.expect(int32._size).to.be.equal(32);
        chai_1.assert(int32._int32);
    });
    it("int32 should construct properly when given a String value of 1", () => {
        const int32 = Int_1.Int32("-1");
        chai_1.assert(bignumber_js_1.default.isBigNumber(int32._value));
        chai_1.expect(int32._value.toNumber()).to.be.equal(-1);
        chai_1.expect(int32._size).to.be.equal(32);
        chai_1.assert(int32._int32);
    });
    it("int32 should construct properly when given a BigNumber value of 1", () => {
        const int32 = Int_1.Int32(new bignumber_js_1.default(-1));
        chai_1.assert(bignumber_js_1.default.isBigNumber(int32._value));
        chai_1.expect(int32._value.toNumber()).to.be.equal(-1);
        chai_1.expect(int32._size).to.be.equal(32);
        chai_1.assert(int32._int32);
    });
    // TODO: Might implement these tests later when we have a better precision solution for int64
    // it("int64 should construct properly when given a Number value of 1", () => {
    //     const int64 = Int64(1);
    //     assert(BigNumber.isBigNumber(int64._value));
    //     expect(int64._value.toNumber()).to.be.equal(1);
    //     expect(int64._size).to.be.equal(64);
    //     assert(int64._int64);
    // });
    it("int64 should construct properly when given a String value of 1", () => {
        const int64 = Int_1.Int64("-1");
        chai_1.assert(bignumber_js_1.default.isBigNumber(int64._value));
        chai_1.expect(int64._value.toNumber()).to.be.equal(-1);
        chai_1.expect(int64._size).to.be.equal(64);
        chai_1.assert(int64._int64);
    });
    // it("int64 should construct properly when given a BigNumber value of 1", () => {
    //     const int64 = Int64(new BigNumber(1));
    //     assert(BigNumber.isBigNumber(int64._value));
    //     expect(int64._value.toNumber()).to.be.equal(1);
    //     expect(int64._size).to.be.equal(64);
    //     assert(int64._int64);
    // });
});
describe("Basic int construction with value: 128 (2^7)", () => {
    it("int8 should not construct properly for a value that exceeds a bit", () => {
        let int8;
        try {
            int8 = Int_1.Int8(128);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "int8 was constructed for oversized value");
    });
    it("int16 should construct properly when given a value 128", () => {
        const int16 = Int_1.Int16(128);
        chai_1.expect(int16._value.toNumber()).to.be.equal(128);
        chai_1.expect(int16._size).to.be.equal(16);
        chai_1.assert(int16._int16);
    });
    it("int32 should construct properly when given a value 128", () => {
        const int32 = Int_1.Int32(128);
        chai_1.expect(int32._value.toNumber()).to.be.equal(128);
        chai_1.expect(int32._size).to.be.equal(32);
        chai_1.assert(int32._int32);
    });
    it("int64 should construct properly when given a value 128", () => {
        const int64 = Int_1.Int64("128");
        chai_1.expect(int64._value.toNumber()).to.be.equal(128);
        chai_1.expect(int64._size).to.be.equal(64);
        chai_1.assert(int64._int64);
    });
});
describe("Basic int construction with value: 32,768 (2^15)", () => {
    it("int8 should not construct properly for a value that exceeds its bits", () => {
        let int8;
        try {
            int8 = Int_1.Int8(32768);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "int8 was constructed for oversized value");
    });
    it("int16 should not construct properly for a value that exceeds its bits", () => {
        let int16;
        try {
            int16 = Int_1.Int16(32768);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "int16 was constructed for oversized value");
    });
    it("int32 should construct properly when given a value 32,768", () => {
        const int32 = Int_1.Int32(32768);
        chai_1.expect(int32._value.toNumber()).to.be.equal(32768);
        chai_1.expect(int32._size).to.be.equal(32);
        chai_1.assert(int32._int32);
    });
    it("int64 should construct properly when given a value 32,768", () => {
        const int64 = Int_1.Int64("32768");
        chai_1.expect(int64._value.toNumber()).to.be.equal(32768);
        chai_1.expect(int64._size).to.be.equal(64);
        chai_1.assert(int64._int64);
    });
});
describe("Basic int construction with value: 2,147,483,648 (2^31)", () => {
    it("int8 should not construct properly for a value that exceeds a bit", () => {
        let int8;
        try {
            int8 = Int_1.Int8(2147483648);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "int8 was constructed for oversized value");
    });
    it("int16 should not construct properly for a value that exceeds a bit", () => {
        let int16;
        try {
            int16 = Int_1.Int16(2147483648);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "int16 was constructed for oversized value");
    });
    it("int32 should construct properly when given a value 2147483647", () => {
        const int32 = Int_1.Int32(2147483647);
        chai_1.expect(int32._value.toNumber()).to.be.equal(2147483647);
        chai_1.expect(int32._size).to.be.equal(32);
        chai_1.assert(int32._int32);
    });
    it("int32 should not construct properly for a value that exceeds a bit", () => {
        let int32;
        try {
            int32 = Int_1.Int32(2147483648);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "int32 was constructed for oversized value");
    });
    it("int64 should construct properly when given a value 2147483648", () => {
        const int64 = Int_1.Int64("2147483648");
        chai_1.expect(int64._value.toNumber()).to.be.equal(2147483648);
        chai_1.expect(int64._size).to.be.equal(64);
        chai_1.assert(int64._int64);
    });
});
describe("Basic int construction with value: 9,223,372,036,854,775,808 (2^63)", () => {
    it("int8 should not construct properly for a value that exceeds a bit", () => {
        let int8;
        try {
            int8 = Int_1.Int8(9223372036854775808);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "int8 was constructed for oversized value");
    });
    it("int16 should construct properly when given a value 9,223,372,036,854,775,808", () => {
        let int16;
        try {
            int16 = Int_1.Int16(9223372036854775808);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "int16 was constructed for oversized value");
    });
    it("int32 should construct properly when given a value 9,223,372,036,854,775,808", () => {
        let int32;
        try {
            int32 = Int_1.Int32(9223372036854775808);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "int32 was constructed for oversized value");
    });
    it("int64 should construct properly when given a value 9,223,372,036,854,775,807", () => {
        const int64 = Int_1.Int64("9223372036854775807");
        chai_1.expect(int64._value.toNumber()).to.be.equal(9223372036854775807);
        chai_1.expect(int64._size).to.be.equal(64);
        chai_1.assert(int64._int64);
    });
    it("int64 should construct properly when given a value 9,223,372,036,854,775,808", () => {
        let int64;
        try {
            int64 = Int_1.Int64("9223372036854775808");
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "int64 was constructed for oversized value");
    });
});
describe("Basic int construction with value: -128 (2^7)", () => {
    it("int8 should not construct properly for a value that exceeds a bit", () => {
        let int8;
        try {
            int8 = Int_1.Int8(-128);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "int8 was constructed for oversized value");
    });
    it("int16 should construct properly when given a value -128", () => {
        const int16 = Int_1.Int16(-128);
        chai_1.expect(int16._value.toNumber()).to.be.equal(-128);
        chai_1.expect(int16._size).to.be.equal(16);
        chai_1.assert(int16._int16);
    });
    it("int32 should construct properly when given a value -128", () => {
        const int32 = Int_1.Int32(-128);
        chai_1.expect(int32._value.toNumber()).to.be.equal(-128);
        chai_1.expect(int32._size).to.be.equal(32);
        chai_1.assert(int32._int32);
    });
    it("int64 should construct properly when given a value -128", () => {
        const int64 = Int_1.Int64("-128");
        chai_1.expect(int64._value.toNumber()).to.be.equal(-128);
        chai_1.expect(int64._size).to.be.equal(64);
        chai_1.assert(int64._int64);
    });
});
describe("Basic int construction with value: -32,768 (2^15)", () => {
    it("int8 should not construct properly for a value that exceeds its bits", () => {
        let int8;
        try {
            int8 = Int_1.Int8(-32768);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "int8 was constructed for oversized value");
    });
    it("int16 should not construct properly for a value that exceeds its bits", () => {
        let int16;
        try {
            int16 = Int_1.Int16(-32768);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "int16 was constructed for oversized value");
    });
    it("int32 should construct properly when given a value -32,768", () => {
        const int32 = Int_1.Int32(-32768);
        chai_1.expect(int32._value.toNumber()).to.be.equal(-32768);
        chai_1.expect(int32._size).to.be.equal(32);
        chai_1.assert(int32._int32);
    });
    it("int64 should construct properly when given a value -32,768", () => {
        const int64 = Int_1.Int64("-32768");
        chai_1.expect(int64._value.toNumber()).to.be.equal(-32768);
        chai_1.expect(int64._size).to.be.equal(64);
        chai_1.assert(int64._int64);
    });
});
describe("Basic int construction with value: -2,147,483,648 (2^31)", () => {
    it("int8 should not construct properly for a value that exceeds a bit", () => {
        let int8;
        try {
            int8 = Int_1.Int8(-2147483648);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "int8 was constructed for oversized value");
    });
    it("int16 should not construct properly for a value that exceeds a bit", () => {
        let int16;
        try {
            int16 = Int_1.Int16(-2147483648);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "int16 was constructed for oversized value");
    });
    it("int32 should construct properly when given a value -2,147,483,647", () => {
        const int32 = Int_1.Int32(-2147483647);
        chai_1.expect(int32._value.toNumber()).to.be.equal(-2147483647);
        chai_1.expect(int32._size).to.be.equal(32);
        chai_1.assert(int32._int32);
    });
    it("int32 should not construct properly for a value that exceeds a bit", () => {
        let int32;
        try {
            int32 = Int_1.Int32(-2147483648);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "int32 was constructed for oversized value");
    });
    it("int64 should construct properly when given a value -2,147,483,648", () => {
        const int64 = Int_1.Int64("-2147483648");
        chai_1.expect(int64._value.toNumber()).to.be.equal(-2147483648);
        chai_1.expect(int64._size).to.be.equal(64);
        chai_1.assert(int64._int64);
    });
});
describe("Basic int construction with value: -9,223,372,036,854,775,808 (2^63)", () => {
    it("int8 should not construct properly for a value that exceeds a bit", () => {
        let int8;
        try {
            int8 = Int_1.Int8(-9223372036854775808);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "int8 was constructed for oversized value");
    });
    it("int16 should construct properly when given a value -9,223,372,036,854,775,808", () => {
        let int16;
        try {
            int16 = Int_1.Int16(-9223372036854775808);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "int16 was constructed for oversized value");
    });
    it("int32 should construct properly when given a value -9,223,372,036,854,775,808", () => {
        let int32;
        try {
            int32 = Int_1.Int32(-9223372036854775808);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "int32 was constructed for oversized value");
    });
    it("int64 should construct properly when given a value -9,223,372,036,854,775,807", () => {
        const int64 = Int_1.Int64("-9223372036854775807");
        chai_1.expect(int64._value.toNumber()).to.be.equal(-9223372036854775807);
        chai_1.expect(int64._size).to.be.equal(64);
        chai_1.assert(int64._int64);
    });
    it("int64 should construct properly when given a value -9,223,372,036,854,775,808", () => {
        let int64;
        try {
            int64 = Int_1.Int64("-9223372036854775808");
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "int64 was constructed for oversized value");
    });
});
describe("SafeMath tests for Int8", () => {
    it("Int8 should return a Int8 for all basic methods: Add", () => {
        const one = Int_1.Int8(1);
        const two = one.add(one);
        chai_1.assert(two._int8, "did not return expected type Int8");
        chai_1.assert(two._value instanceof bignumber_js_1.default, "did have a value of expected type BigNumber");
        chai_1.expect(two._size).to.be.equal(8);
        chai_1.expect(two._value.toNumber()).to.be.equal(2);
    });
    it("Int8 should return a Int8 for all basic methods: Subtract", () => {
        const one = Int_1.Int8(1);
        const zero = one.sub(one);
        chai_1.assert(zero._int8, "did not return expected type Int8");
        chai_1.assert(zero._value instanceof bignumber_js_1.default, "did have a value of expected type BigNumber");
        chai_1.expect(zero._size).to.be.equal(8);
        chai_1.expect(zero._value.toNumber()).to.be.equal(0);
    });
    it("Int8 should return a Int8 for all basic methods: Multiply", () => {
        const two = Int_1.Int8(2);
        const four = two.mul(two);
        chai_1.assert(four._int8, "did not return expected type Int8");
        chai_1.assert(four._value instanceof bignumber_js_1.default, "did have a value of expected type BigNumber");
        chai_1.expect(four._size).to.be.equal(8);
        chai_1.expect(four._value.toNumber()).to.be.equal(4);
    });
    it("Int8 should return a Int8 for all basic methods: Divide", () => {
        const four = Int_1.Int8(4);
        const two = Int_1.Int8(2);
        const resTwo = four.div(two);
        chai_1.assert(resTwo._int8, "did not return expected type Int8");
        chai_1.assert(resTwo._value instanceof bignumber_js_1.default, "did have a value of expected type BigNumber");
        chai_1.expect(resTwo._size).to.be.equal(8);
        chai_1.expect(resTwo._value.toNumber()).to.be.equal(2);
    });
    it("Int8 should should not allow overflow when adding 127 to 1", () => {
        const one = Int_1.Int8(1);
        const limit = Int_1.Int8(127);
        let overflow;
        try {
            overflow = limit.add(one);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Int8 addition should not overflow");
    });
    it("Int8 should should not allow underflow when adding -127 to -1", () => {
        const one = Int_1.Int8(-1);
        const limit = Int_1.Int8(-127);
        let overflow;
        try {
            overflow = limit.add(one);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Int8 addition should not overflow");
    });
    it("Int8 should should not allow overflow when subtracting -127 from 1 and 1 from -127", () => {
        const one = Int_1.Int8(1);
        const limit = Int_1.Int8(-127);
        let overflow;
        try {
            overflow = one.sub(limit);
        }
        catch (e) {
            chai_1.assert(true);
        }
        try {
            overflow = limit.sub(one);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Int8 addition should not overflow");
    });
    it("Int8 should allow subtracting 1 from 0", () => {
        const one = Int_1.Int8(1);
        const zero = Int_1.Int8(0);
        const neg1 = zero.sub(one);
        chai_1.assert(neg1._int8, "did not return expected type Int8");
        chai_1.assert(neg1._value instanceof bignumber_js_1.default, "did have a value of expected type BigNumber");
        chai_1.expect(neg1._size).to.be.equal(8);
        chai_1.expect(neg1._value.toNumber()).to.be.equal(-1);
    });
    it("Int8 should should not allow overflow when multiplying 64 by 2", () => {
        const limit = Int_1.Int8(64);
        const two = Int_1.Int8(2);
        let overflow;
        try {
            overflow = limit.mul(two);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Int8 multiplication should not overflow");
    });
    it("Int8 should should not allow overflow when multiplying -64 by 2", () => {
        const limit = Int_1.Int8(-64);
        const two = Int_1.Int8(2);
        let overflow;
        try {
            overflow = limit.mul(two);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Int8 multiplication should not overflow");
    });
    it("Int8 should should not allow overflow when multiplying 64 by -2", () => {
        const limit = Int_1.Int8(64);
        const two = Int_1.Int8(-2);
        let overflow;
        try {
            overflow = limit.mul(two);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Int8 multiplication should not overflow");
    });
    it("Int8 should should not allow division by 0", () => {
        const zero = Int_1.Int8(0);
        const two = Int_1.Int8(2);
        let divByZero;
        let zeroDiv;
        try {
            divByZero = two.div(zero);
        }
        catch (e) {
            chai_1.assert(true);
        }
        try {
            zeroDiv = zero.div(two);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Int8 multiplication should not overflow");
    });
});
// FIXME: Remove after fixed
describe("SafeMath tests for Int16", () => {
    it("Int16 should return a Int16 for all basic methods: Add", () => {
        const one = Int_1.Int16(1);
        const two = one.add(one);
        chai_1.assert(two._int16, "did not return expected type Int16");
        chai_1.assert(two._value instanceof bignumber_js_1.default, "did have a value of expected type BigNumber");
        chai_1.expect(two._size).to.be.equal(16);
        chai_1.expect(two._value.toNumber()).to.be.equal(2);
    });
    it("Int16 should return a Int16 for all basic methods: Subtract", () => {
        const one = Int_1.Int16(1);
        const zero = one.sub(one);
        chai_1.assert(zero._int16, "did not return expected type Int16");
        chai_1.assert(zero._value instanceof bignumber_js_1.default, "did have a value of expected type BigNumber");
        chai_1.expect(zero._size).to.be.equal(16);
        chai_1.expect(zero._value.toNumber()).to.be.equal(0);
    });
    it("Int16 should return a Int16 for all basic methods: Multiply", () => {
        const two = Int_1.Int16(2);
        const four = two.mul(two);
        chai_1.assert(four._int16, "did not return expected type Int16");
        chai_1.assert(four._value instanceof bignumber_js_1.default, "did have a value of expected type BigNumber");
        chai_1.expect(four._size).to.be.equal(16);
        chai_1.expect(four._value.toNumber()).to.be.equal(4);
    });
    it("Int16 should return a Int16 for all basic methods: Divide", () => {
        const four = Int_1.Int16(4);
        const two = Int_1.Int16(2);
        const resTwo = four.div(two);
        chai_1.assert(resTwo._int16, "did not return expected type Int16");
        chai_1.assert(resTwo._value instanceof bignumber_js_1.default, "did have a value of expected type BigNumber");
        chai_1.expect(resTwo._size).to.be.equal(16);
        chai_1.expect(resTwo._value.toNumber()).to.be.equal(2);
    });
    it("Int16 should should not allow overflow when adding 32,767 to 1", () => {
        const one = Int_1.Int16(1);
        const limit = Int_1.Int16(32767);
        let overflow;
        try {
            overflow = limit.add(one);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Int16 addition should not overflow");
    });
    it("Int16 should should not allow overflow when adding -32,767 to -1", () => {
        const one = Int_1.Int16(-1);
        const limit = Int_1.Int16(-32767);
        let overflow;
        try {
            overflow = limit.add(one);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Int16 addition should not overflow");
    });
    it("Int16 should allow underflow when subtracting 1 from 0", () => {
        const one = Int_1.Int16(1);
        const zero = Int_1.Int16(0);
        const neg1 = zero.sub(one);
        chai_1.assert(neg1._int16, "did not return expected type Int16");
        chai_1.assert(neg1._value instanceof bignumber_js_1.default, "did have a value of expected type BigNumber");
        chai_1.expect(neg1._size).to.be.equal(16);
        chai_1.expect(neg1._value.toNumber()).to.be.equal(-1);
    });
    it("Int16 should should not allow overflow when multiplying 16,384 by 2", () => {
        const limit = Int_1.Int16(16384);
        const two = Int_1.Int16(2);
        let overflow;
        try {
            overflow = limit.mul(two);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Int16 multiplication should not overflow");
    });
    it("Int16 should should not allow division by 0", () => {
        const zero = Int_1.Int16(0);
        const two = Int_1.Int16(2);
        let divByZero;
        let zeroDiv;
        try {
            divByZero = two.div(zero);
        }
        catch (e) {
            chai_1.assert(true);
        }
        try {
            zeroDiv = zero.div(two);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Int16 multiplication should not overflow");
    });
});
describe("SafeMath tests for Int32", () => {
    it("Int32 should return a Int32 for all basic methods: Add", () => {
        const one = Int_1.Int32(1);
        const two = one.add(one);
        chai_1.assert(two._int32, "did not return expected type Int32");
        chai_1.assert(two._value instanceof bignumber_js_1.default, "did have a value of expected type BigNumber");
        chai_1.expect(two._size).to.be.equal(32);
        chai_1.expect(two._value.toNumber()).to.be.equal(2);
    });
    it("Int32 should return a Int32 for all basic methods: Subtract", () => {
        const one = Int_1.Int32(1);
        const zero = one.sub(one);
        chai_1.assert(zero._int32, "did not return expected type Int32");
        chai_1.assert(zero._value instanceof bignumber_js_1.default, "did have a value of expected type BigNumber");
        chai_1.expect(zero._size).to.be.equal(32);
        chai_1.expect(zero._value.toNumber()).to.be.equal(0);
    });
    it("Int32 should return a Int32 for all basic methods: Multiply", () => {
        const two = Int_1.Int32(2);
        const four = two.mul(two);
        chai_1.assert(four._int32, "did not return expected type Int32");
        chai_1.assert(four._value instanceof bignumber_js_1.default, "did have a value of expected type BigNumber");
        chai_1.expect(four._size).to.be.equal(32);
        chai_1.expect(four._value.toNumber()).to.be.equal(4);
    });
    it("Int32 should return a Int32 for all basic methods: Divide", () => {
        const four = Int_1.Int32(4);
        const two = Int_1.Int32(2);
        const resTwo = four.div(two);
        chai_1.assert(resTwo._int32, "did not return expected type Int32");
        chai_1.assert(resTwo._value instanceof bignumber_js_1.default, "did have a value of expected type BigNumber");
        chai_1.expect(resTwo._size).to.be.equal(32);
        chai_1.expect(resTwo._value.toNumber()).to.be.equal(2);
    });
    it("Int32 should should not allow overflow when adding 2,147,483,647 to 1", () => {
        const one = Int_1.Int32(1);
        const limit = Int_1.Int32(2147483647);
        let overflow;
        try {
            overflow = limit.add(one);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Int32 addition should not overflow");
    });
    it("Int32 should allow underflow when subtracting 1 from 0", () => {
        const one = Int_1.Int32(1);
        const zero = Int_1.Int32(0);
        const neg1 = zero.sub(one);
        chai_1.assert(neg1._int32, "did not return expected type Int32");
        chai_1.assert(neg1._value instanceof bignumber_js_1.default, "did have a value of expected type BigNumber");
        chai_1.expect(neg1._size).to.be.equal(32);
        chai_1.expect(neg1._value.toNumber()).to.be.equal(-1);
    });
    it("Int32 should should not allow overflow when multiplying 1,073,741,824 by 2", () => {
        const limit = Int_1.Int32(1073741824);
        const two = Int_1.Int32(2);
        let overflow;
        try {
            overflow = limit.mul(two);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Int32 multiplication should not overflow");
    });
    it("Int32 should should not allow division by 0", () => {
        const zero = Int_1.Int32(0);
        const two = Int_1.Int32(2);
        let divByZero;
        let zeroDiv;
        try {
            divByZero = two.div(zero);
        }
        catch (e) {
            chai_1.assert(true);
        }
        try {
            zeroDiv = zero.div(two);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Int32 multiplication should not overflow");
    });
});
describe("SafeMath tests for Int64", () => {
    it("Int64 should return a Int64 for all basic methods: Add", () => {
        const one = Int_1.Int64("1");
        const two = one.add(one);
        chai_1.assert(two._int64, "did not return expected type Int64");
        chai_1.assert(two._value instanceof bignumber_js_1.default, "did have a value of expected type BigNumber");
        chai_1.expect(two._size).to.be.equal(64);
        chai_1.expect(two._value.toNumber()).to.be.equal(2);
    });
    it("Int64 should return a Int64 for all basic methods: Subtract", () => {
        const one = Int_1.Int64("1");
        const zero = one.sub(one);
        chai_1.assert(zero._int64, "did not return expected type Int64");
        chai_1.assert(zero._value instanceof bignumber_js_1.default, "did have a value of expected type BigNumber");
        chai_1.expect(zero._size).to.be.equal(64);
        chai_1.expect(zero._value.toNumber()).to.be.equal(0);
    });
    it("Int64 should return a Int64 for all basic methods: Multiply", () => {
        const two = Int_1.Int64("2");
        const four = two.mul(two);
        chai_1.assert(four._int64, "did not return expected type Int64");
        chai_1.assert(four._value instanceof bignumber_js_1.default, "did have a value of expected type BigNumber");
        chai_1.expect(four._size).to.be.equal(64);
        chai_1.expect(four._value.toNumber()).to.be.equal(4);
    });
    it("Int64 should return a Int64 for all basic methods: Divide", () => {
        const four = Int_1.Int64("4");
        const two = Int_1.Int64("2");
        const resTwo = four.div(two);
        chai_1.assert(resTwo._int64, "did not return expected type Int64");
        chai_1.assert(resTwo._value instanceof bignumber_js_1.default, "did have a value of expected type BigNumber");
        chai_1.expect(resTwo._size).to.be.equal(64);
        chai_1.expect(resTwo._value.toNumber()).to.be.equal(2);
    });
    it("Int64 should should not allow overflow when adding 9,223,372,036,854,775,807 to 1", () => {
        const one = Int_1.Int64("1");
        const limit = Int_1.Int64("9223372036854775807");
        let overflow;
        try {
            overflow = limit.add(one);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Int64 addition should not overflow");
    });
    it("Int64 should should not allow underflow when subtracting 1 from -9,223,372,036,854,775,807", () => {
        const limit = Int_1.Int64("-9223372036854775807");
        const one = Int_1.Int64("1");
        let underflow;
        try {
            underflow = one.sub(limit);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Int64 subtraction should not underflow");
    });
    it("Int64 should should not allow overflow when multiplying 4.711686e+18 by 2", () => {
        const limit = Int_1.Int64("4.711686e+18");
        const two = Int_1.Int64("2");
        let overflow;
        try {
            overflow = limit.mul(two);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Int64 multiplication should not overflow");
    });
    it("Int64 should should not allow overflow when multiplying -4.711686e+18 by 2", () => {
        const limit = Int_1.Int64("-4.711686e+18");
        const two = Int_1.Int64("2");
        let overflow;
        try {
            overflow = limit.mul(two);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Int64 multiplication should not overflow");
    });
    it("Int64 should should not allow division by 0", () => {
        const zero = Int_1.Int64("0");
        const two = Int_1.Int64("2");
        let divByZero;
        let zeroDiv;
        try {
            divByZero = two.div(zero);
        }
        catch (e) {
            chai_1.assert(true);
        }
        try {
            zeroDiv = zero.div(two);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Int64 multiplication should not overflow");
    });
});
