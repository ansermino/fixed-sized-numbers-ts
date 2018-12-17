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

describe("Uint should not support negative integers", () => {
    it("Uint8 should not construct properly when given a negative value (-1)", () => {
        let uint8;
        try {
            uint8 = Uint8(-1);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Was able to construct Uint8 with negative value (-1)");
    });
    it("Uint16 should not construct properly when given a negative value (-1)", () => {
        let uint16;
        try {
            uint16 = Uint16(-1);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Was able to construct Uint16 with negative value (-1)");
    });
    it("Uint32 should not construct properly when given a negative value (-1)", () => {
        let uint32;
        try {
            uint32 = Uint32(-1);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Was able to construct Uint32 with negative value (-1)");
    });
    it("Uint64 should not construct properly when given a negative value (-1)", () => {
        let uint64;
        try {
            uint64 = Uint64(-1);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Was able to construct Uint64 with negative value (-1)");
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
    it("Uint64 should construct properly when given a value 1,099,511,627,776 (2^40)", () => {
        const uint64 = Uint64(1099511627776);
        expect(uint64._value.toNumber()).to.be.equal(1099511627776);
        expect(uint64._size).to.be.equal(64);
        assert(uint64._uint64);
    });
    it("Uint64 should construct properly when given a value 1.12589990684262E15 (2^50)", () => {
        const uint64 = Uint64(1.12589990684262E15);
        expect(uint64._value.toNumber()).to.be.equal(1.12589990684262E15);
        expect(uint64._size).to.be.equal(64);
        assert(uint64._uint64);
    });
    it("Uint64 should construct properly when given a value 1.152921505E18 (2^60)", () => {
        const uint64 = Uint64(1.152921505E18);
        expect(uint64._value.toNumber()).to.be.equal(1.152921505E18);
        expect(uint64._size).to.be.equal(64);
        assert(uint64._uint64);
    });
    it("Uint64 should construct properly when given a value 4.611686018E18 (2^62)", () => {
        const uint64 = Uint64(1.152921505E18);
        expect(uint64._value.toNumber()).to.be.equal(1.152921505E18);
        expect(uint64._size).to.be.equal(64);
        assert(uint64._uint64);
    });
    it("Uint64 should construct properly when given a value 9.223372037E18 (2^63)", () => {
        const uint64 = Uint64(9.223372037E18);
        expect(uint64._value.toNumber()).to.be.equal(9.223372037E18);
        expect(uint64._size).to.be.equal(64);
        assert(uint64._uint64);
    });
    it("Uint64 should not construct properly when given a value 18446744073709551616 (2^64)", () => {
        let uint64;
        try {
           uint64 = Uint64(18446744073709551616);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint8 was constructed for oversized value");
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
        assert(two._uint8, "did not return expected type Uint8");
        assert(two._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(two._size).to.be.equal(8);
        expect(two._value.toNumber()).to.be.equal(2);
    });
    it("Uint8 should return a Uint8 for all basic methods: Subtract", () => {
        const one = Uint8(1);
        const zero = one.sub(one);
        assert(zero._uint8, "did not return expected type Uint8");
        assert(zero._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(zero._size).to.be.equal(8);
        expect(zero._value.toNumber()).to.be.equal(0);
    });
    it("Uint8 should return a Uint8 for all basic methods: Multiply", () => {
        const two = Uint8(2);
        const four = two.mul(two);
        assert(four._uint8, "did not return expected type Uint8");
        assert(four._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(four._size).to.be.equal(8);
        expect(four._value.toNumber()).to.be.equal(4);
    });
    it("Uint8 should return a Uint8 for all basic methods: Divide", () => {
        const four = Uint8(4);
        const two = Uint8(2);
        const resTwo = four.div(two);
        assert(resTwo._uint8, "did not return expected type Uint8");
        assert(resTwo._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(resTwo._size).to.be.equal(8);
        expect(resTwo._value.toNumber()).to.be.equal(2);
    });
    it("Uint8 should should not allow overflow when adding 255 to 1", () => {
        const one = Uint8(1);
        const limit = Uint8(255);
        let overflow;
        try {
            overflow = limit.add(one);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint8 addition should not overflow");
    });
    it("Uint8 should should not allow underflow when subtracting 1 from 0", () => {
        const one = Uint8(1);
        const zero = Uint8(0);
        let underflow;
        try {
            underflow = zero.sub(one);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint8 subtraction should not underflow");
    });
    it("Uint8 should should not allow overflow when multiplying 128 by 2", () => {
        const limit = Uint8(128);
        const two = Uint8(2);
        let overflow;
        try {
            overflow = limit.mul(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint8 multiplication should not overflow");
    });
    it("Uint8 should should not allow division by 0", () => {
        const zero = Uint8(0);
        const two = Uint8(2);
        let divByZero;
        let zeroDiv;
        try {
            divByZero = two.div(zero);
        } catch (e) {
            assert(true);
        }
        try {
            zeroDiv = zero.div(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint8 multiplication should not overflow");
    });
});

describe("SafeMath tests for uint16", () => {
    it("Uint16 should return a Uint16 for all basic methods: Add", () => {
        const one = Uint16(1);
        const two = one.add(one);
        assert(two._uint16, "did not return expected type Uint16");
        assert(two._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(two._size).to.be.equal(16);
        expect(two._value.toNumber()).to.be.equal(2);
    });
    it("Uint16 should return a Uint16 for all basic methods: Subtract", () => {
        const one = Uint16(1);
        const zero = one.sub(one);
        assert(zero._uint16, "did not return expected type Uint16");
        assert(zero._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(zero._size).to.be.equal(16);
        expect(zero._value.toNumber()).to.be.equal(0);
    });
    it("Uint16 should return a Uint16 for all basic methods: Multiply", () => {
        const two = Uint16(2);
        const four = two.mul(two);
        assert(four._uint16, "did not return expected type Uint16");
        assert(four._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(four._size).to.be.equal(16);
        expect(four._value.toNumber()).to.be.equal(4);
    });
    it("Uint16 should return a Uint16 for all basic methods: Divide", () => {
        const four = Uint16(4);
        const two = Uint16(2);
        const resTwo = four.div(two);
        assert(resTwo._uint16, "did not return expected type Uint16");
        assert(resTwo._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(resTwo._size).to.be.equal(16);
        expect(resTwo._value.toNumber()).to.be.equal(2);
    });
    it("Uint16 should should not allow overflow when adding 65535 to 1", () => {
        const one = Uint16(1);
        const limit = Uint16(65535);
        let overflow;
        try {
            overflow = limit.add(one);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint16 addition should not overflow");
    });
    it("Uint16 should should not allow underflow when subtracting 1 from 0", () => {
        const one = Uint16(1);
        const zero = Uint16(0);
        let underflow;
        try {
            underflow = zero.sub(one);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint16 subtraction should not underflow");
    });
    it("Uint16 should should not allow overflow when multiplying 32,768 by 2", () => {
        const limit = Uint16(32768);
        const two = Uint16(2);
        let overflow;
        try {
            overflow = limit.mul(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint16 multiplication should not overflow");
    });
    it("Uint16 should should not allow division by 0", () => {
        const zero = Uint16(0);
        const two = Uint16(2);
        let divByZero;
        let zeroDiv;
        try {
            divByZero = two.div(zero);
        } catch (e) {
            assert(true);
        }
        try {
            zeroDiv = zero.div(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint16 multiplication should not overflow");
    });
});

describe("SafeMath tests for uint32", () => {
    it("Uint32 should return a Uint32 for all basic methods: Add", () => {
        const one = Uint32(1);
        const two = one.add(one);
        assert(two._uint32, "did not return expected type Uint32");
        assert(two._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(two._size).to.be.equal(32);
        expect(two._value.toNumber()).to.be.equal(2);
    });
    it("Uint32 should return a Uint32 for all basic methods: Subtract", () => {
        const one = Uint32(1);
        const zero = one.sub(one);
        assert(zero._uint32, "did not return expected type Uint32");
        assert(zero._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(zero._size).to.be.equal(32);
        expect(zero._value.toNumber()).to.be.equal(0);
    });
    it("Uint32 should return a Uint32 for all basic methods: Multiply", () => {
        const two = Uint32(2);
        const four = two.mul(two);
        assert(four._uint32, "did not return expected type Uint32");
        assert(four._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(four._size).to.be.equal(32);
        expect(four._value.toNumber()).to.be.equal(4);
    });
    it("Uint32 should return a Uint32 for all basic methods: Divide", () => {
        const four = Uint32(4);
        const two = Uint32(2);
        const resTwo = four.div(two);
        assert(resTwo._uint32, "did not return expected type Uint32");
        assert(resTwo._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(resTwo._size).to.be.equal(32);
        expect(resTwo._value.toNumber()).to.be.equal(2);
    });
    it("Uint32 should should not allow overflow when adding 4,294,967,295 to 1", () => {
        const one = Uint32(1);
        const limit = Uint32(4294967295);
        let overflow;
        try {
            overflow = limit.add(one);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint32 addition should not overflow");
    });
    it("Uint32 should should not allow underflow when subtracting 1 from 0", () => {
        const one = Uint32(1);
        const zero = Uint32(0);
        let underflow;
        try {
            underflow = zero.sub(one);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint32 subtraction should not underflow");
    });
    it("Uint32 should should not allow overflow when multiplying 2,147,483,648 by 2", () => {
        const limit = Uint32(2147483648);
        const two = Uint32(2);
        let overflow;
        try {
            overflow = limit.mul(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint32 multiplication should not overflow");
    });
    it("Uint32 should should not allow division by 0", () => {
        const zero = Uint32(0);
        const two = Uint32(2);
        let divByZero;
        let zeroDiv;
        try {
            divByZero = two.div(zero);
        } catch (e) {
            assert(true);
        }
        try {
            zeroDiv = zero.div(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint32 multiplication should not overflow");
    });
});

describe("SafeMath tests for uint64", () => {
    it("Uint64 should return a Uint64 for all basic methods: Add", () => {
        const one = Uint64(1);
        const two = one.add(one);
        assert(two._uint64, "did not return expected type Uint64");
        assert(two._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(two._size).to.be.equal(64);
        expect(two._value.toNumber()).to.be.equal(2);
    });
    it("Uint64 should return a Uint64 for all basic methods: Subtract", () => {
        const one = Uint64(1);
        const zero = one.sub(one);
        assert(zero._uint64, "did not return expected type Uint64");
        assert(zero._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(zero._size).to.be.equal(64);
        expect(zero._value.toNumber()).to.be.equal(0);
    });
    it("Uint64 should return a Uint64 for all basic methods: Multiply", () => {
        const two = Uint64(2);
        const four = two.mul(two);
        assert(four._uint64, "did not return expected type Uint64");
        assert(four._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(four._size).to.be.equal(64);
        expect(four._value.toNumber()).to.be.equal(4);
    });
    it("Uint64 should return a Uint64 for all basic methods: Divide", () => {
        const four = Uint64(4);
        const two = Uint64(2);
        const resTwo = four.div(two);
        assert(resTwo._uint64, "did not return expected type Uint64");
        assert(resTwo._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(resTwo._size).to.be.equal(64);
        expect(resTwo._value.toNumber()).to.be.equal(2);
    });
    // TODO: There is an issue with javascript only supportign 53 bits of precision
    // it("Uint64 should should not allow overflow when adding 18446744073709551615 to 1", () => {
    //     const one = Uint64(1);
    //     const limit = Uint64(9.223372037E18);
    //     let overflow;
    //     try {
    //         overflow = limit.add(one);
    //     } catch (e) {
    //         assert(true);
    //         return;
    //     }
    //     assert(false, "Uint64 addition should not overflow");
    // });
    it("Uint64 should should not allow underflow when subtracting 1 from 0", () => {
        const one = Uint64(1);
        const zero = Uint64(0);
        let underflow;
        try {
            underflow = zero.sub(one);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint64 subtraction should not underflow");
    });
    it("Uint64 should should not allow overflow when multiplying 9.223372037E18 by 2", () => {
        const limit = Uint64(9.223372037E18);
        const two = Uint64(2);
        let overflow;
        try {
            overflow = limit.mul(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint64 multiplication should not overflow");
    });
    it("Uint64 should should not allow division by 0", () => {
        const zero = Uint64(0);
        const two = Uint64(2);
        let divByZero;
        let zeroDiv;
        try {
            divByZero = two.div(zero);
        } catch (e) {
            assert(true);
        }
        try {
            zeroDiv = zero.div(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint64 multiplication should not overflow");
    });
});

