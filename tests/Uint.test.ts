import BigNumber from "bignumber.js";
import { assert, expect } from "chai";
import "mocha";
import { Uint128, Uint16, Uint256, Uint32, Uint64, Uint8 } from "../lib/Uint";

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
    it("Uint128 should construct properly when not given a value", () => {
        const uint128 = Uint128();
        expect(uint128._value.toNumber()).to.be.equal(0);
        expect(uint128._size).to.be.equal(128);
        assert(uint128._uint128);
    });
    it("Uint256 should construct properly when not given a value", () => {
        const uint256 = Uint256();
        expect(uint256._value.toNumber()).to.be.equal(0);
        expect(uint256._size).to.be.equal(256);
        assert(uint256._uint256);
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
        const uint64 = Uint64("0");
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
    it("Uint64 should construct properly when given a String value of 1", () => {
        const uint64 = Uint64("1");
        assert(BigNumber.isBigNumber(uint64._value));
        expect(uint64._value.toNumber()).to.be.equal(1);
        expect(uint64._size).to.be.equal(64);
        assert(uint64._uint64);
    });
    it("Uint128 should construct properly when given a String value of 1", () => {
        const uint128 = Uint128("1");
        assert(BigNumber.isBigNumber(uint128._value));
        expect(uint128._value.toNumber()).to.be.equal(1);
        expect(uint128._size).to.be.equal(128);
        assert(uint128._uint128);
    });
    it("Uint256 should construct properly when given a String value of 1", () => {
        const uint256 = Uint256("1");
        assert(BigNumber.isBigNumber(uint256._value));
        expect(uint256._value.toNumber()).to.be.equal(1);
        expect(uint256._size).to.be.equal(256);
        assert(uint256._uint256);
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
            uint64 = Uint64("-1");
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Was able to construct Uint64 with negative value (-1)");
    });
    it("Uint128 should not construct properly when given a negative value (-1)", () => {
        let uint128;
        try {
            uint128 = Uint128("-1");
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Was able to construct Uint64 with negative value (-1)");
    });
    it("Uint256 should not construct properly when given a negative value (-1)", () => {
        let uint256;
        try {
            uint256 = Uint256("-1");
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Was able to construct Uint64 with negative value (-1)");
    });
});

describe("Basic Uint construction with value: 256 (2^8)", () => {
    it("Uint8 should not construct properly for a value that exceeds its bit size", () => {
        let uint8;
        try {
           uint8 = Uint8(256);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint8 was constructed for oversized value");
    });
    it("Uint16 should construct properly when given a value 256", () => {
        const uint16 = Uint16(256);
        expect(uint16._value.toNumber()).to.be.equal(256);
        expect(uint16._size).to.be.equal(16);
        assert(uint16._uint16);
    });
    it("Uint32 should construct properly when given a value 256", () => {
        const uint32 = Uint32(256);
        expect(uint32._value.toNumber()).to.be.equal(256);
        expect(uint32._size).to.be.equal(32);
        assert(uint32._uint32);
    });
    it("Uint64 should construct properly when given a value 256", () => {
        const uint64 = Uint64("256");
        expect(uint64._value.toNumber()).to.be.equal(256);
        expect(uint64._size).to.be.equal(64);
        assert(uint64._uint64);
    });
    it("Uint128 should construct properly when given a value 256", () => {
        const uint128 = Uint128("256");
        expect(uint128._value.toNumber()).to.be.equal(256);
        expect(uint128._size).to.be.equal(128);
        assert(uint128._uint128);
    });
    it("Uint256 should construct properly when given a value 256", () => {
        const uint256 = Uint256("256");
        expect(uint256._value.toNumber()).to.be.equal(256);
        expect(uint256._size).to.be.equal(256);
        assert(uint256._uint256);
    });
});

describe("Basic Uint construction with value: 65,536 (2^16)", () => {
    it("Uint8 should not construct properly for a value that exceeds its bit size", () => {
        let uint8;
        try {
           uint8 = Uint8(65536);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint8 was constructed for oversized value");
    });
    it("Uint16 should not construct properly for a value that exceeds its bit size", () => {
        let uint16;
        try {
           uint16 = Uint16(65536);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint16 was constructed for oversized value");
    });
    it("Uint32 should construct properly when given a value 65,537", () => {
        const uint32 = Uint32(65536);
        expect(uint32._value.toNumber()).to.be.equal(65536);
        expect(uint32._size).to.be.equal(32);
        assert(uint32._uint32);
    });
    it("Uint64 should construct properly when given a value 65,537", () => {
        const uint64 = Uint64("65536");
        expect(uint64._value.toNumber()).to.be.equal(65536);
        expect(uint64._size).to.be.equal(64);
        assert(uint64._uint64);
    });
    it("Uint128 should construct properly when given a value 65,537", () => {
        const uint128 = Uint128("65536");
        expect(uint128._value.toNumber()).to.be.equal(65536);
        expect(uint128._size).to.be.equal(128);
        assert(uint128._uint128);
    });
    it("Uint256 should construct properly when given a value 65,537", () => {
        const uint256 = Uint256("65536");
        expect(uint256._value.toNumber()).to.be.equal(65536);
        expect(uint256._size).to.be.equal(256);
        assert(uint256._uint256);
    });
});

describe("Basic Uint construction with value: 1.844674407E19 (2^32)", () => {
    it("Uint8 should not construct properly for a value that exceeds its bit size", () => {
        let uint8;
        try {
           uint8 = Uint8(4294967296);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint8 was constructed for oversized value");
    });
    it("Uint16 should not construct properly for a value that exceeds its bit size", () => {
        let uint16;
        try {
           uint16 = Uint16(4294967296);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint16 was constructed for oversized value");
    });
    it("Uint32 should not construct properly for a value that exceeds its bit size", () => {
        let uint32;
        try {
           uint32 = Uint32(4294967296);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint32 was constructed for oversized value");
    });
    it("Uint64 should construct properly when given a value 4,294,967,296", () => {
        const uint64 = Uint64("4294967296");
        expect(uint64._value.toNumber()).to.be.equal(4294967296);
        expect(uint64._size).to.be.equal(64);
        assert(uint64._uint64);
    });
});



describe("Checking large Uint constuction (64 bits and higher)", () => {
    it("Uint64 should construct properly when given a value of 18446744073709551615 (2^64 - 1)", () => {
        const uint64 = Uint64("18446744073709551615");
        assert(uint64._value.eq(new BigNumber("18446744073709551615")));
        expect(uint64._size).to.be.equal(64);
        assert(uint64._uint64);
    });
    it("Uint64 should not construct properly when given a value of 18446744073709551616 (2^64)", () => {
        let uint64;
        try {
           uint64 = Uint64("18446744073709551616");
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint64 was constructed for oversized value");
    });
    it("Uint128 should construct properly when given a value of 18446744073709551616 (2^64)", () => {
        const uint128 = Uint128("18446744073709551616");
        assert(uint128._value.eq(new BigNumber("18446744073709551616")));
        expect(uint128._size).to.be.equal(128);
        assert(uint128._uint128);
    });
    it("Uint256 should construct properly when given a value of 18446744073709551616 (2^64)", () => {
        const uint256 = Uint256("18446744073709551616");
        assert(uint256._value.eq(new BigNumber("18446744073709551616")));
        expect(uint256._size).to.be.equal(256);
        assert(uint256._uint256);
    });
    it("Uint128 should construct properly when given a value of 340,282,366,920,938,463,463,374,607,431,768,211,455 (2^128 - 1)", () => {
        const uint128 = Uint128("340282366920938463463374607431768211455");
        assert(uint128._value.eq(new BigNumber("340282366920938463463374607431768211455")));
        expect(uint128._size).to.be.equal(128);
        assert(uint128._uint128);
    });
    it("Uint128 should not construct when given a value of 340,282,366,920,938,463,463,374,607,431,768,211,456 (2^128)", () => {
        let uint128;
        try {
           uint128 = Uint128("340282366920938463463374607431768211456");
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint128 was constructed for oversized value");
    });
    it("Uint256 should construct properly when given a valueof  3.402823669E38 (2^128)", () => {
        const uint256 = Uint256("3.402823669E38");
        assert(uint256._value.eq(new BigNumber("3.402823669E38")));
        expect(uint256._size).to.be.equal(256);
        assert(uint256._uint256);
    });
    it("Uint256 should construct properly when given a value of 115792089237316195423570985008687907853269984665640564039457584007913129639935 (2^256 - 1)", () => {
        const uint256 = Uint256("115792089237316195423570985008687907853269984665640564039457584007913129639935");
        assert(uint256._value.eq(new BigNumber("115792089237316195423570985008687907853269984665640564039457584007913129639935")));
        expect(uint256._size).to.be.equal(256);
        assert(uint256._uint256);
    });
    it("Uint256 should not construct when given a value of 115792089237316195423570985008687907853269984665640564039457584007913129639936 (2^256)", () => {
        let uint256;
        try {
           uint256 = Uint256("115792089237316195423570985008687907853269984665640564039457584007913129639936");
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint256 was constructed for oversized value");
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
        const one = Uint64("1");
        const two = one.add(one);
        assert(two._uint64, "did not return expected type Uint64");
        assert(two._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(two._size).to.be.equal(64);
        expect(two._value.toNumber()).to.be.equal(2);
    });
    it("Uint64 should return a Uint64 for all basic methods: Subtract", () => {
        const one = Uint64("1");
        const zero = one.sub(one);
        assert(zero._uint64, "did not return expected type Uint64");
        assert(zero._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(zero._size).to.be.equal(64);
        expect(zero._value.toNumber()).to.be.equal(0);
    });
    it("Uint64 should return a Uint64 for all basic methods: Multiply", () => {
        const two = Uint64("2");
        const four = two.mul(two);
        assert(four._uint64, "did not return expected type Uint64");
        assert(four._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(four._size).to.be.equal(64);
        expect(four._value.toNumber()).to.be.equal(4);
    });
    it("Uint64 should return a Uint64 for all basic methods: Divide", () => {
        const four = Uint64("4");
        const two = Uint64("2");
        const resTwo = four.div(two);
        assert(resTwo._uint64, "did not return expected type Uint64");
        assert(resTwo._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(resTwo._size).to.be.equal(64);
        expect(resTwo._value.toNumber()).to.be.equal(2);
    });

    it("Uint64 should should not allow overflow when adding 18446744073709551615 to 1", () => {
        const one = Uint64("1");
        const limit = Uint64("18446744073709551615");
        let overflow;
        try {
            overflow = limit.add(one);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Uint64 addition should not overflow");
    });
    it("Uint64 should should not allow underflow when subtracting 1 from 0", () => {
        const one = Uint64("1");
        const zero = Uint64("0");
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
        const limit = Uint64("9.223372037E18");
        const two = Uint64("2");
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
        const zero = Uint64("0");
        const two = Uint64("2");
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

