"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const chai_1 = require("chai");
require("mocha");
const Uint_1 = require("../lib/Uint");
describe("Basic Uint construction without value", () => {
    it("Uint8 should construct properly when not given a value", () => {
        const uint8 = Uint_1.Uint8();
        chai_1.expect(uint8._value.toNumber()).to.be.equal(0);
        chai_1.expect(uint8._size).to.be.equal(8);
        chai_1.assert(uint8._uint8);
    });
    it("Uint16 should construct properly when not given a value", () => {
        const uint16 = Uint_1.Uint16();
        chai_1.expect(uint16._value.toNumber()).to.be.equal(0);
        chai_1.expect(uint16._size).to.be.equal(16);
        chai_1.assert(uint16._uint16);
    });
    it("Uint32 should construct properly when not given a value", () => {
        const uint32 = Uint_1.Uint32();
        chai_1.expect(uint32._value.toNumber()).to.be.equal(0);
        chai_1.expect(uint32._size).to.be.equal(32);
        chai_1.assert(uint32._uint32);
    });
    it("Uint64 should construct properly when not given a value", () => {
        const uint64 = Uint_1.Uint64();
        chai_1.expect(uint64._value.toNumber()).to.be.equal(0);
        chai_1.expect(uint64._size).to.be.equal(64);
        chai_1.assert(uint64._uint64);
    });
});
describe("Basic Uint construction with value: 0", () => {
    it("Uint8 should construct properly when given a value of 0", () => {
        const uint8 = Uint_1.Uint8(0);
        chai_1.expect(uint8._value.toNumber()).to.be.equal(0);
        chai_1.expect(uint8._size).to.be.equal(8);
        chai_1.assert(uint8._uint8);
    });
    it("Uint16 should construct properly when given a value of 0", () => {
        const uint16 = Uint_1.Uint16(0);
        chai_1.expect(uint16._value.toNumber()).to.be.equal(0);
        chai_1.expect(uint16._size).to.be.equal(16);
        chai_1.assert(uint16._uint16);
    });
    it("Uint32 should construct properly when given a value of 0", () => {
        const uint32 = Uint_1.Uint32(0);
        chai_1.expect(uint32._value.toNumber()).to.be.equal(0);
        chai_1.expect(uint32._size).to.be.equal(32);
        chai_1.assert(uint32._uint32);
    });
    it("Uint64 should construct properly when given a value of 0", () => {
        const uint64 = Uint_1.Uint64(0);
        chai_1.expect(uint64._value.toNumber()).to.be.equal(0);
        chai_1.expect(uint64._size).to.be.equal(64);
        chai_1.assert(uint64._uint64);
    });
});
describe("Basic Uint construction with value: 1 (as String, Number, and BigNumber)", () => {
    it("Uint8 should construct properly when given a Number value of 1 ", () => {
        const uint8 = Uint_1.Uint8(1);
        chai_1.assert(bignumber_js_1.default.isBigNumber(uint8._value));
        chai_1.expect(uint8._value.toNumber()).to.be.equal(1);
        chai_1.expect(uint8._size).to.be.equal(8);
        chai_1.assert(uint8._uint8);
    });
    it("Uint8 should construct properly when given a String value of 1", () => {
        const uint8 = Uint_1.Uint8("1");
        chai_1.assert(bignumber_js_1.default.isBigNumber(uint8._value));
        chai_1.expect(uint8._value.toNumber()).to.be.equal(1);
        chai_1.expect(uint8._size).to.be.equal(8);
        chai_1.assert(uint8._uint8);
    });
    it("Uint8 should construct properly when given a BigNumber value of 1", () => {
        const uint8 = Uint_1.Uint8(new bignumber_js_1.default(1));
        chai_1.assert(bignumber_js_1.default.isBigNumber(uint8._value));
        chai_1.expect(uint8._value.toNumber()).to.be.equal(1);
        chai_1.expect(uint8._size).to.be.equal(8);
        chai_1.assert(uint8._uint8);
    });
    it("Uint16 should construct properly when given a Number value of 1", () => {
        const uint16 = Uint_1.Uint16(1);
        chai_1.assert(bignumber_js_1.default.isBigNumber(uint16._value));
        chai_1.expect(uint16._value.toNumber()).to.be.equal(1);
        chai_1.expect(uint16._size).to.be.equal(16);
        chai_1.assert(uint16._uint16);
    });
    it("Uint16 should construct properly when given a String value of 1", () => {
        const uint16 = Uint_1.Uint16("1");
        chai_1.assert(bignumber_js_1.default.isBigNumber(uint16._value));
        chai_1.expect(uint16._value.toNumber()).to.be.equal(1);
        chai_1.expect(uint16._size).to.be.equal(16);
        chai_1.assert(uint16._uint16);
    });
    it("Uint16 should construct properly when given a BigNumber value of 1", () => {
        const uint16 = Uint_1.Uint16(new bignumber_js_1.default(1));
        chai_1.assert(bignumber_js_1.default.isBigNumber(uint16._value));
        chai_1.expect(uint16._value.toNumber()).to.be.equal(1);
        chai_1.expect(uint16._size).to.be.equal(16);
        chai_1.assert(uint16._uint16);
    });
    it("Uint32 should construct properly when given a Number value of 1", () => {
        const uint32 = Uint_1.Uint32(1);
        chai_1.assert(bignumber_js_1.default.isBigNumber(uint32._value));
        chai_1.expect(uint32._value.toNumber()).to.be.equal(1);
        chai_1.expect(uint32._size).to.be.equal(32);
        chai_1.assert(uint32._uint32);
    });
    it("Uint32 should construct properly when given a String value of 1", () => {
        const uint32 = Uint_1.Uint32("1");
        chai_1.assert(bignumber_js_1.default.isBigNumber(uint32._value));
        chai_1.expect(uint32._value.toNumber()).to.be.equal(1);
        chai_1.expect(uint32._size).to.be.equal(32);
        chai_1.assert(uint32._uint32);
    });
    it("Uint32 should construct properly when given a BigNumber value of 1", () => {
        const uint32 = Uint_1.Uint32(new bignumber_js_1.default(1));
        chai_1.assert(bignumber_js_1.default.isBigNumber(uint32._value));
        chai_1.expect(uint32._value.toNumber()).to.be.equal(1);
        chai_1.expect(uint32._size).to.be.equal(32);
        chai_1.assert(uint32._uint32);
    });
    it("Uint64 should construct properly when given a Number value of 1", () => {
        const uint64 = Uint_1.Uint64(1);
        chai_1.assert(bignumber_js_1.default.isBigNumber(uint64._value));
        chai_1.expect(uint64._value.toNumber()).to.be.equal(1);
        chai_1.expect(uint64._size).to.be.equal(64);
        chai_1.assert(uint64._uint64);
    });
    it("Uint64 should construct properly when given a String value of 1", () => {
        const uint64 = Uint_1.Uint64("1");
        chai_1.assert(bignumber_js_1.default.isBigNumber(uint64._value));
        chai_1.expect(uint64._value.toNumber()).to.be.equal(1);
        chai_1.expect(uint64._size).to.be.equal(64);
        chai_1.assert(uint64._uint64);
    });
    it("Uint64 should construct properly when given a BigNumber value of 1", () => {
        const uint64 = Uint_1.Uint64(new bignumber_js_1.default(1));
        chai_1.assert(bignumber_js_1.default.isBigNumber(uint64._value));
        chai_1.expect(uint64._value.toNumber()).to.be.equal(1);
        chai_1.expect(uint64._size).to.be.equal(64);
        chai_1.assert(uint64._uint64);
    });
});
describe("Basic Uint construction with value: 257 (2^8 + 1)", () => {
    it("Uint8 should not construct properly for a value that exceeds a bit", () => {
        let uint8;
        try {
            uint8 = Uint_1.Uint8(257);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Uint8 was constructed for oversized value");
    });
    it("Uint16 should construct properly when given a value 257", () => {
        const uint16 = Uint_1.Uint16(257);
        chai_1.expect(uint16._value.toNumber()).to.be.equal(257);
        chai_1.expect(uint16._size).to.be.equal(16);
        chai_1.assert(uint16._uint16);
    });
    it("Uint32 should construct properly when given a value 257", () => {
        const uint32 = Uint_1.Uint32(257);
        chai_1.expect(uint32._value.toNumber()).to.be.equal(257);
        chai_1.expect(uint32._size).to.be.equal(32);
        chai_1.assert(uint32._uint32);
    });
    it("Uint64 should construct properly when given a value 257", () => {
        const uint64 = Uint_1.Uint64(257);
        chai_1.expect(uint64._value.toNumber()).to.be.equal(257);
        chai_1.expect(uint64._size).to.be.equal(64);
        chai_1.assert(uint64._uint64);
    });
});
describe("Basic Uint construction with value: 65,537 (2^16 + 1)", () => {
    it("Uint8 should not construct properly for a value that exceeds a bit", () => {
        let uint8;
        try {
            uint8 = Uint_1.Uint8(65537);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Uint8 was constructed for oversized value");
    });
    it("Uint16 should not construct properly for a value that exceeds a bit", () => {
        let uint16;
        try {
            uint16 = Uint_1.Uint16(65537);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Uint16 was constructed for oversized value");
    });
    it("Uint32 should construct properly when given a value 65,537", () => {
        const uint32 = Uint_1.Uint32(65537);
        chai_1.expect(uint32._value.toNumber()).to.be.equal(65537);
        chai_1.expect(uint32._size).to.be.equal(32);
        chai_1.assert(uint32._uint32);
    });
    it("Uint64 should construct properly when given a value 65,537", () => {
        const uint64 = Uint_1.Uint64(65537);
        chai_1.expect(uint64._value.toNumber()).to.be.equal(65537);
        chai_1.expect(uint64._size).to.be.equal(64);
        chai_1.assert(uint64._uint64);
    });
});
describe("Basic Uint construction with value: 1.844674407E19 (2^32 + 1)", () => {
    it("Uint8 should not construct properly for a value that exceeds a bit", () => {
        let uint8;
        try {
            uint8 = Uint_1.Uint8(4294967297);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Uint8 was constructed for oversized value");
    });
    it("Uint16 should not construct properly for a value that exceeds a bit", () => {
        let uint16;
        try {
            uint16 = Uint_1.Uint16(4294967297);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Uint16 was constructed for oversized value");
    });
    it("Uint32 should not construct properly for a value that exceeds a bit", () => {
        let uint32;
        try {
            uint32 = Uint_1.Uint32(4294967297);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Uint32 was constructed for oversized value");
    });
    it("Uint64 should construct properly when given a value 4,294,967,297", () => {
        const uint64 = Uint_1.Uint64(4294967297);
        chai_1.expect(uint64._value.toNumber()).to.be.equal(4294967297);
        chai_1.expect(uint64._size).to.be.equal(64);
        chai_1.assert(uint64._uint64);
    });
});
describe("Basic Uint construction with value: 3.689348815E19 (2^65)", () => {
    it("Uint8 should not construct properly for a value that exceeds a bit", () => {
        let uint8;
        try {
            uint8 = Uint_1.Uint8(3.689348815E19);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Uint8 was constructed for oversized value");
    });
    it("Uint16 should not construct properly for a value that exceeds a bit", () => {
        let uint16;
        try {
            uint16 = Uint_1.Uint16(3.689348815E19);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Uint16 was constructed for oversized value");
    });
    it("Uint32 should not construct properly for a value that exceeds a bit", () => {
        let uint32;
        try {
            uint32 = Uint_1.Uint32(3.689348815E19);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Uint32 was constructed for oversized value");
    });
    it("Uint64 should not construct properly for a value that exceeds a bit", () => {
        let uint64;
        try {
            uint64 = Uint_1.Uint64(3.689348815E19);
        }
        catch (e) {
            chai_1.assert(true);
            return;
        }
        chai_1.assert(false, "Uint64 was constructed for oversized value");
    });
});
describe("SafeMath tests for uint8", () => {
    it("Uint8 should return a Uint8 for all basic methods: Add", () => {
        const one = Uint_1.Uint8(1);
        const two = one.add(one);
        console.log(two);
        // assert(two._uint8, "did not return expected type Uint8");
        chai_1.assert(two._value instanceof bignumber_js_1.default, "did have a value of expected type BigNumber");
        chai_1.expect(two._size).to.be.equal(8);
        chai_1.expect(two._value.toNumber()).to.be.equal(2);
    });
});
