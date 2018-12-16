import BigNumber from "bignumber.js";
import { assert, expect } from "chai";
import "mocha";
import { Uint16, Uint32, Uint64, Uint8 } from "../lib/Uint";

describe("Basic Uint construction without value", () => {
    it("Uint8 should construct properly when not given a value", () => {
        const uint8 = Uint8();
        expect(uint8._value.toNumber()).to.be.equal(0);
        expect(uint8._size).to.be.equal(8);
        assert(uint8._uint8);
    });
    it("Uint16 should construct properly when not given a value", () => {
        const uint16 = Uint16();
        expect(uint16._value.toNumber()).to.be.equal(0);
        expect(uint16._size).to.be.equal(16);
        assert(uint16._uint16);
    });
    it("Uint32 should construct properly when not given a value", () => {
        const uint32 = Uint32();
        expect(uint32._value.toNumber()).to.be.equal(0);
        expect(uint32._size).to.be.equal(32);
        assert(uint32._uint32);
    });
    it("Uint64 should construct properly when not given a value", () => {
        const uint64 = Uint64();
        expect(uint64._value.toNumber()).to.be.equal(0);
        expect(uint64._size).to.be.equal(64);
        assert(uint64._uint64);
    });
});

describe("Basic Uint construction with value: 0", () => {
    it("Uint8 should construct properly when given a value of 0", () => {
        const uint8 = Uint8(0);
        expect(uint8._value.toNumber()).to.be.equal(0);
        expect(uint8._size).to.be.equal(8);
        assert(uint8._uint8);
    });
    it("Uint16 should construct properly when given a value of 0", () => {
        const uint16 = Uint16(0);
        expect(uint16._value.toNumber()).to.be.equal(0);
        expect(uint16._size).to.be.equal(16);
        assert(uint16._uint16);
    });
    it("Uint32 should construct properly when given a value of 0", () => {
        const uint32 = Uint32(0);
        expect(uint32._value.toNumber()).to.be.equal(0);
        expect(uint32._size).to.be.equal(32);
        assert(uint32._uint32);
    });
    it("Uint64 should construct properly when given a value of 0", () => {
        const uint64 = Uint64(0);
        expect(uint64._value.toNumber()).to.be.equal(0);
        expect(uint64._size).to.be.equal(64);
        assert(uint64._uint64);
    });
});

describe("Basic Uint construction with value: 1 (as String, Number, and BigNumber)", () => {
    it("Uint8 should construct properly when given a Number value of 1 ", () => {
        const uint8 = Uint8(1);
        assert(BigNumber.isBigNumber(uint8._value));
        expect(uint8._value.toNumber()).to.be.equal(1);
        expect(uint8._size).to.be.equal(8);
        assert(uint8._uint8);
    });
    it("Uint8 should construct properly when given a String value of 1", () => {
        const uint8 = Uint8("1");
        assert(BigNumber.isBigNumber(uint8._value));
        expect(uint8._value.toNumber()).to.be.equal(1);
        expect(uint8._size).to.be.equal(8);
        assert(uint8._uint8);
    });
    it("Uint8 should construct properly when given a BigNumber value of 1", () => {
        const uint8 = Uint8(new BigNumber(1));
        assert(BigNumber.isBigNumber(uint8._value));
        expect(uint8._value.toNumber()).to.be.equal(1);
        expect(uint8._size).to.be.equal(8);
        assert(uint8._uint8);
    });
    it("Uint16 should construct properly when given a Number value of 1", () => {
        const uint16 = Uint16(1);
        assert(BigNumber.isBigNumber(uint16._value));
        expect(uint16._value.toNumber()).to.be.equal(1);
        expect(uint16._size).to.be.equal(16);
        assert(uint16._uint16);
    });
    it("Uint16 should construct properly when given a String value of 1", () => {
        const uint16 = Uint16("1");
        assert(BigNumber.isBigNumber(uint16._value));
        expect(uint16._value.toNumber()).to.be.equal(1);
        expect(uint16._size).to.be.equal(16);
        assert(uint16._uint16);
    });
    it("Uint16 should construct properly when given a BigNumber value of 1", () => {
        const uint16 = Uint16(new BigNumber(1));
        assert(BigNumber.isBigNumber(uint16._value));
        expect(uint16._value.toNumber()).to.be.equal(1);
        expect(uint16._size).to.be.equal(16);
        assert(uint16._uint16);
    });
    it("Uint32 should construct properly when given a Number value of 1", () => {
        const uint32 = Uint32(1);
        assert(BigNumber.isBigNumber(uint32._value));
        expect(uint32._value.toNumber()).to.be.equal(1);
        expect(uint32._size).to.be.equal(32);
        assert(uint32._uint32);
    });
    it("Uint32 should construct properly when given a String value of 1", () => {
        const uint32 = Uint32("1");
        assert(BigNumber.isBigNumber(uint32._value));
        expect(uint32._value.toNumber()).to.be.equal(1);
        expect(uint32._size).to.be.equal(32);
        assert(uint32._uint32);
    });
    it("Uint32 should construct properly when given a BigNumber value of 1", () => {
        const uint32 = Uint32(new BigNumber(1));
        assert(BigNumber.isBigNumber(uint32._value));
        expect(uint32._value.toNumber()).to.be.equal(1);
        expect(uint32._size).to.be.equal(32);
        assert(uint32._uint32);
    });
    it("Uint64 should construct properly when given a Number value of 1", () => {
        const uint64 = Uint64(1);
        assert(BigNumber.isBigNumber(uint64._value));
        expect(uint64._value.toNumber()).to.be.equal(1);
        expect(uint64._size).to.be.equal(64);
        assert(uint64._uint64);
    });
    it("Uint64 should construct properly when given a String value of 1", () => {
        const uint64 = Uint64("1");
        assert(BigNumber.isBigNumber(uint64._value));
        expect(uint64._value.toNumber()).to.be.equal(1);
        expect(uint64._size).to.be.equal(64);
        assert(uint64._uint64);
    });
    it("Uint64 should construct properly when given a BigNumber value of 1", () => {
        const uint64 = Uint64(new BigNumber(1));
        assert(BigNumber.isBigNumber(uint64._value));
        expect(uint64._value.toNumber()).to.be.equal(1);
        expect(uint64._size).to.be.equal(64);
        assert(uint64._uint64);
    });
});

describe("Basic Uint construction with value: 257 (2^8 + 1)", () => {
    it("Uint8 should not construct properly for a value that exceeds a bit", () => {
        let uint8;
        try {
           uint8 = Uint8(257);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint8 was constructed for oversized value");
    });
    it("Uint16 should construct properly when given a value 257", () => {
        const uint16 = Uint16(257);
        expect(uint16._value.toNumber()).to.be.equal(257);
        expect(uint16._size).to.be.equal(16);
        assert(uint16._uint16);
    });
    it("Uint32 should construct properly when given a value 257", () => {
        const uint32 = Uint32(257);
        expect(uint32._value.toNumber()).to.be.equal(257);
        expect(uint32._size).to.be.equal(32);
        assert(uint32._uint32);
    });
    it("Uint64 should construct properly when given a value 257", () => {
        const uint64 = Uint64(257);
        expect(uint64._value.toNumber()).to.be.equal(257);
        expect(uint64._size).to.be.equal(64);
        assert(uint64._uint64);
    });
});

describe("Basic Uint construction with value: 65,537 (2^16 + 1)", () => {
    it("Uint8 should not construct properly for a value that exceeds a bit", () => {
        let uint8;
        try {
           uint8 = Uint8(65537);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint8 was constructed for oversized value");
    });
    it("Uint16 should not construct properly for a value that exceeds a bit", () => {
        let uint16;
        try {
           uint16 = Uint16(65537);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint16 was constructed for oversized value");
    });
    it("Uint32 should construct properly when given a value 65,537", () => {
        const uint32 = Uint32(65537);
        expect(uint32._value.toNumber()).to.be.equal(65537);
        expect(uint32._size).to.be.equal(32);
        assert(uint32._uint32);
    });
    it("Uint64 should construct properly when given a value 65,537", () => {
        const uint64 = Uint64(65537);
        expect(uint64._value.toNumber()).to.be.equal(65537);
        expect(uint64._size).to.be.equal(64);
        assert(uint64._uint64);
    });
});

describe("Basic Uint construction with value: 1.844674407E19 (2^32 + 1)", () => {
    it("Uint8 should not construct properly for a value that exceeds a bit", () => {
        let uint8;
        try {
           uint8 = Uint8(4294967297);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint8 was constructed for oversized value");
    });
    it("Uint16 should not construct properly for a value that exceeds a bit", () => {
        let uint16;
        try {
           uint16 = Uint16(4294967297);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint16 was constructed for oversized value");
    });
    it("Uint32 should not construct properly for a value that exceeds a bit", () => {
        let uint32;
        try {
           uint32 = Uint32(4294967297);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint32 was constructed for oversized value");
    });
    it("Uint64 should construct properly when given a value 4,294,967,297", () => {
        const uint64 = Uint64(4294967297);
        expect(uint64._value.toNumber()).to.be.equal(4294967297);
        expect(uint64._size).to.be.equal(64);
        assert(uint64._uint64);
    });
});

describe("Basic Uint construction with value: 3.689348815E19 (2^65)", () => {
    it("Uint8 should not construct properly for a value that exceeds a bit", () => {
        let uint8;
        try {
           uint8 = Uint8(3.689348815E19);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint8 was constructed for oversized value");
    });
    it("Uint16 should not construct properly for a value that exceeds a bit", () => {
        let uint16;
        try {
           uint16 = Uint16(3.689348815E19);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint16 was constructed for oversized value");
    });
    it("Uint32 should not construct properly for a value that exceeds a bit", () => {
        let uint32;
        try {
           uint32 = Uint32(3.689348815E19);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint32 was constructed for oversized value");
    });
    it("Uint64 should not construct properly for a value that exceeds a bit", () => {
        let uint64;
        try {
           uint64 = Uint64(3.689348815E19);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint64 was constructed for oversized value");
    });
});

describe("SafeMath tests for uint8", () => {
    it("Uint8 should return a Uint8 for all basic methods: Add", () => {
        const one = Uint8(1);
        const two = one.add(one);
        console.log(two)
        // assert(two._uint8, "did not return expected type Uint8");
        assert(two._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(two._size).to.be.equal(8);
        expect(two._value.toNumber()).to.be.equal(2);
    });
});


