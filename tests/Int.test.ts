import BigNumber from "bignumber.js";
import { assert, expect } from "chai";
import "mocha";
import { Int128, Int16, Int256, Int32, Int64, Int8 } from "../lib/Int";

describe("Basic Int construction without value", () => {
    it("Int8 should construct properly when not given a value", () => {
        const int8 = Int8();
        expect(int8._value.toNumber()).to.be.equal(0);
        expect(int8._size).to.be.equal(8);
        assert(int8._int8);
    });
    it("Int16 should construct properly when not given a value", () => {
        const int16 = Int16();
        expect(int16._value.toNumber()).to.be.equal(0);
        expect(int16._size).to.be.equal(16);
        assert(int16._int16);
    });
    it("Int32 should construct properly when not given a value", () => {
        const int32 = Int32();
        expect(int32._value.toNumber()).to.be.equal(0);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("Int64 should construct properly when not given a value", () => {
        const int64 = Int64();
        expect(int64._value.toNumber()).to.be.equal(0);
        expect(int64._size).to.be.equal(64);
        assert(int64._int64);
    });
    it("Int128 should construct properly when not given a value", () => {
        const int128 = Int128();
        expect(int128._value.toNumber()).to.be.equal(0);
        expect(int128._size).to.be.equal(128);
        assert(int128._int128);
    });
    it("Int256 should construct properly when not given a value", () => {
        const int256 = Int256();
        expect(int256._value.toNumber()).to.be.equal(0);
        expect(int256._size).to.be.equal(256);
        assert(int256._int256);
    });
});



describe("Basic Int construction with value: 0", () => {
    it("Int8 should construct properly when given a value of 0", () => {
        const int8 = Int8(0);
        expect(int8._value.toNumber()).to.be.equal(0);
        expect(int8._size).to.be.equal(8);
        assert(int8._int8);
    });
    it("int16 should construct properly when given a value of 0", () => {
        const int16 = Int16(0);
        expect(int16._value.toNumber()).to.be.equal(0);
        expect(int16._size).to.be.equal(16);
        assert(int16._int16);
    });
    it("int32 should construct properly when given a value of 0", () => {
        const int32 = Int32(0);
        expect(int32._value.toNumber()).to.be.equal(0);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int64 should construct properly when given a value of 0", () => {
        const int64 = Int64("0");
        expect(int64._value.toNumber()).to.be.equal(0);
        expect(int64._size).to.be.equal(64);
        assert(int64._int64);
    });
    it("int128 should construct properly when given a value of 0", () => {
        const int128 = Int128("0");
        expect(int128._value.toNumber()).to.be.equal(0);
        expect(int128._size).to.be.equal(128);
        assert(int128._int128);
    });
    it("int256 should construct properly when given a value of 0", () => {
        const int256 = Int256("0");
        expect(int256._value.toNumber()).to.be.equal(0);
        expect(int256._size).to.be.equal(256);
        assert(int256._int256);
    });
});

describe("Basic int construction with value: 1 (as String, Number, and BigNumber)", () => {
    it("int8 should construct properly when given a Number value of 1 ", () => {
        const int8 = Int8(1);
        assert(BigNumber.isBigNumber(int8._value));
        expect(int8._value.toNumber()).to.be.equal(1);
        expect(int8._size).to.be.equal(8);
        assert(int8._int8);
    });
    it("int8 should construct properly when given a String value of 1", () => {
        const int8 = Int8("1");
        assert(BigNumber.isBigNumber(int8._value));
        expect(int8._value.toNumber()).to.be.equal(1);
        expect(int8._size).to.be.equal(8);
        assert(int8._int8);
    });
    it("int8 should construct properly when given a BigNumber value of 1", () => {
        const int8 = Int8(new BigNumber(1));
        assert(BigNumber.isBigNumber(int8._value));
        expect(int8._value.toNumber()).to.be.equal(1);
        expect(int8._size).to.be.equal(8);
        assert(int8._int8);
    });
    it("int16 should construct properly when given a Number value of 1", () => {
        const int16 = Int16(1);
        assert(BigNumber.isBigNumber(int16._value));
        expect(int16._value.toNumber()).to.be.equal(1);
        expect(int16._size).to.be.equal(16);
        assert(int16._int16);
    });
    it("int16 should construct properly when given a String value of 1", () => {
        const int16 = Int16("1");
        assert(BigNumber.isBigNumber(int16._value));
        expect(int16._value.toNumber()).to.be.equal(1);
        expect(int16._size).to.be.equal(16);
        assert(int16._int16);
    });
    it("int16 should construct properly when given a BigNumber value of 1", () => {
        const int16 = Int16(new BigNumber(1));
        assert(BigNumber.isBigNumber(int16._value));
        expect(int16._value.toNumber()).to.be.equal(1);
        expect(int16._size).to.be.equal(16);
        assert(int16._int16);
    });
    it("int32 should construct properly when given a Number value of 1", () => {
        const int32 = Int32(1);
        assert(BigNumber.isBigNumber(int32._value));
        expect(int32._value.toNumber()).to.be.equal(1);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int32 should construct properly when given a String value of 1", () => {
        const int32 = Int32("1");
        assert(BigNumber.isBigNumber(int32._value));
        expect(int32._value.toNumber()).to.be.equal(1);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int32 should construct properly when given a BigNumber value of 1", () => {
        const int32 = Int32(new BigNumber(1));
        assert(BigNumber.isBigNumber(int32._value));
        expect(int32._value.toNumber()).to.be.equal(1);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int64 should construct properly when given a String value of 1", () => {
        const int64 = Int64("1");
        assert(BigNumber.isBigNumber(int64._value));
        expect(int64._value.toNumber()).to.be.equal(1);
        expect(int64._size).to.be.equal(64);
        assert(int64._int64);
    });
    it("int128 should construct properly when given a String value of 1", () => {
        const int128 = Int128("1");
        assert(BigNumber.isBigNumber(int128._value));
        expect(int128._value.toNumber()).to.be.equal(1);
        expect(int128._size).to.be.equal(128);
        assert(int128._int128);
    });
    it("int256 should construct properly when given a String value of 1", () => {
        const int256 = Int256("1");
        assert(BigNumber.isBigNumber(int256._value));
        expect(int256._value.toNumber()).to.be.equal(1);
        expect(int256._size).to.be.equal(256);
        assert(int256._int256);
    });
});

describe("Basic int construction with value of: -1 (as String, Number, and BigNumber)", () => {
    it("int8 should construct properly when given a Number value of 1 ", () => {
        const int8 = Int8(-1);
        assert(BigNumber.isBigNumber(int8._value));
        expect(int8._value.toNumber()).to.be.equal(-1);
        expect(int8._size).to.be.equal(8);
        assert(int8._int8);
    });
    it("int8 should construct properly when given a String value of 1", () => {
        const int8 = Int8("-1");
        assert(BigNumber.isBigNumber(int8._value));
        expect(int8._value.toNumber()).to.be.equal(-1);
        expect(int8._size).to.be.equal(8);
        assert(int8._int8);
    });
    it("int8 should construct properly when given a BigNumber value of 1", () => {
        const int8 = Int8(new BigNumber(-1));
        assert(BigNumber.isBigNumber(int8._value));
        expect(int8._value.toNumber()).to.be.equal(-1);
        expect(int8._size).to.be.equal(8);
        assert(int8._int8);
    });
    it("int16 should construct properly when given a Number value of 1", () => {
        const int16 = Int16(-1);
        assert(BigNumber.isBigNumber(int16._value));
        expect(int16._value.toNumber()).to.be.equal(-1);
        expect(int16._size).to.be.equal(16);
        assert(int16._int16);
    });
    it("int16 should construct properly when given a String value of 1", () => {
        const int16 = Int16("-1");
        assert(BigNumber.isBigNumber(int16._value));
        expect(int16._value.toNumber()).to.be.equal(-1);
        expect(int16._size).to.be.equal(16);
        assert(int16._int16);
    });
    it("int16 should construct properly when given a BigNumber value of 1", () => {
        const int16 = Int16(new BigNumber(-1));
        assert(BigNumber.isBigNumber(int16._value));
        expect(int16._value.toNumber()).to.be.equal(-1);
        expect(int16._size).to.be.equal(16);
        assert(int16._int16);
    });
    it("int32 should construct properly when given a Number value of 1", () => {
        const int32 = Int32(-1);
        assert(BigNumber.isBigNumber(int32._value));
        expect(int32._value.toNumber()).to.be.equal(-1);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int32 should construct properly when given a String value of 1", () => {
        const int32 = Int32("-1");
        assert(BigNumber.isBigNumber(int32._value));
        expect(int32._value.toNumber()).to.be.equal(-1);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int32 should construct properly when given a BigNumber value of 1", () => {
        const int32 = Int32(new BigNumber(-1));
        assert(BigNumber.isBigNumber(int32._value));
        expect(int32._value.toNumber()).to.be.equal(-1);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int64 should construct properly when given a String value of 1", () => {
        const int64 = Int64("-1");
        assert(BigNumber.isBigNumber(int64._value));
        expect(int64._value.toNumber()).to.be.equal(-1);
        expect(int64._size).to.be.equal(64);
        assert(int64._int64);
    });
    it("int128 should construct properly when given a String value of 1", () => {
        const int128 = Int128("-1");
        assert(BigNumber.isBigNumber(int128._value));
        expect(int128._value.toNumber()).to.be.equal(-1);
        expect(int128._size).to.be.equal(128);
        assert(int128._int128);
    });
    it("int256 should construct properly when given a String value of 1", () => {
        const int256 = Int256("-1");
        assert(BigNumber.isBigNumber(int256._value));
        expect(int256._value.toNumber()).to.be.equal(-1);
        expect(int256._size).to.be.equal(256);
        assert(int256._int256);
    });
});

describe("Basic int construction with value: 128 (2^7)", () => {
    it("int8 should not construct properly for a value that exceeds its bit size", () => {
        let int8;
        try {
           int8 = Int8(128);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int8 was constructed for oversized value");
    });
    it("int16 should construct properly when given a value 128", () => {
        const int16 = Int16(128);
        expect(int16._value.toNumber()).to.be.equal(128);
        expect(int16._size).to.be.equal(16);
        assert(int16._int16);
    });
    it("int32 should construct properly when given a value 128", () => {
        const int32 = Int32(128);
        expect(int32._value.toNumber()).to.be.equal(128);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int64 should construct properly when given a value 128", () => {
        const int64 = Int64("128");
        expect(int64._value.toNumber()).to.be.equal(128);
        expect(int64._size).to.be.equal(64);
        assert(int64._int64);
    });
});

describe("Basic int construction with value: 32,768 (2^15)", () => {
    it("int8 should not construct properly for a value that exceeds its bit size", () => {
        let int8;
        try {
           int8 = Int8(32768);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int8 was constructed for oversized value");
    });
    it("int16 should not construct properly for a value that exceeds its bit size", () => {
        let int16;
        try {
           int16 = Int16(32768);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int16 was constructed for oversized value");
    });
    it("int32 should construct properly when given a value 32,768", () => {
        const int32 = Int32(32768);
        expect(int32._value.toNumber()).to.be.equal(32768);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int64 should construct properly when given a value 32,768", () => {
        const int64 = Int64("32768");
        expect(int64._value.toNumber()).to.be.equal(32768);
        expect(int64._size).to.be.equal(64);
        assert(int64._int64);
    });
});

describe("Basic int construction with value: 2,147,483,648 (2^31)", () => {
    it("int8 should not construct properly for a value that exceeds its bit size", () => {
        let int8;
        try {
           int8 = Int8(2147483648);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int8 was constructed for oversized value");
    });
    it("int16 should not construct properly for a value that exceeds its bit size", () => {
        let int16;
        try {
           int16 = Int16(2147483648);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int16 was constructed for oversized value");
    });
    it("int32 should construct properly when given a value of 2,147,483,648", () => {
        const int32 = Int32(2147483647);
        expect(int32._value.toNumber()).to.be.equal(2147483647);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int32 should not construct properly for a value that exceeds its bit size", () => {
        let int32;
        try {
           int32 = Int32(2147483648);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int32 was constructed for oversized value");
    });
    it("int64 should construct properly when given a value of 2,147,483,648", () => {
        const int64 = Int64("2147483648");
        expect(int64._value.toNumber()).to.be.equal(2147483648);
        expect(int64._size).to.be.equal(64);
        assert(int64._int64);
    });
});

describe("Basic int construction with value: 9,223,372,036,854,775,808 (2^63)", () => {
    it("int8 should not construct properly for a value that exceeds its bit size", () => {
        let int8;
        try {
           int8 = Int8(9223372036854775808);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int8 was constructed for oversized value");
    });
    it("int16 should not construct properly for a value that exceeds its bit size", () => {
        let int16;
        try {
           int16 = Int16(9223372036854775808);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int16 was constructed for oversized value");
    });
    it("int32 should not construct properly for a value that exceeds its bit size", () => {
        let int32;
        try {
           int32 = Int32(9223372036854775808);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int32 was constructed for oversized value");
    });
    it("int64 should construct properly when given a value 9,223,372,036,854,775,807", () => {
        const int64 = Int64("9223372036854775807");
        expect(int64._value.toNumber()).to.be.equal(9223372036854775807);
        expect(int64._size).to.be.equal(64);
        assert(int64._int64);
    });
    it("int64 should not construct properly when given a value exceeds its bit size", () => {
        let int64;
        try {
           int64 = Int64("9223372036854775808");
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int64 was constructed for oversized value");
    });
});

describe("Basic int construction with value: -128 (2^7)", () => {
    it("int8 should not construct properly for a value that exceeds its bit size", () => {
        let int8;
        try {
           int8 = Int8(-128);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int8 was constructed for oversized value");
    });
    it("int16 should construct properly when given a value -128", () => {
        const int16 = Int16(-128);
        expect(int16._value.toNumber()).to.be.equal(-128);
        expect(int16._size).to.be.equal(16);
        assert(int16._int16);
    });
    it("int32 should construct properly when given a value -128", () => {
        const int32 = Int32(-128);
        expect(int32._value.toNumber()).to.be.equal(-128);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int64 should construct properly when given a value -128", () => {
        const int64 = Int64("-128");
        expect(int64._value.toNumber()).to.be.equal(-128);
        expect(int64._size).to.be.equal(64);
        assert(int64._int64);
    });
});

describe("Basic int construction with value: -32,768 (2^15)", () => {
    it("int8 should not construct properly for a value that exceeds its bit size", () => {
        let int8;
        try {
           int8 = Int8(-32768);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int8 was constructed for oversized value");
    });
    it("int16 should not construct properly for a value that exceeds its bit size", () => {
        let int16;
        try {
           int16 = Int16(-32768);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int16 was constructed for oversized value");
    });
    it("int32 should construct properly when given a value -32,768", () => {
        const int32 = Int32(-32768);
        expect(int32._value.toNumber()).to.be.equal(-32768);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int64 should construct properly when given a value -32,768", () => {
        const int64 = Int64("-32768");
        expect(int64._value.toNumber()).to.be.equal(-32768);
        expect(int64._size).to.be.equal(64);
        assert(int64._int64);
    });
});

describe("Basic int construction with value: -2,147,483,648 (2^31)", () => {
    it("int8 should not construct properly for a value that exceeds its bit size", () => {
        let int8;
        try {
           int8 = Int8(-2147483648);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int8 was constructed for oversized value");
    });
    it("int16 should not construct properly for a value that exceeds its bit size", () => {
        let int16;
        try {
           int16 = Int16(-2147483648);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int16 was constructed for oversized value");
    });
    it("int32 should construct properly when given a value -2,147,483,647", () => {
        const int32 = Int32(-2147483647);
        expect(int32._value.toNumber()).to.be.equal(-2147483647);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int32 should not construct properly for a value that exceeds its bit size", () => {
        let int32;
        try {
           int32 = Int32(-2147483648);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int32 was constructed for oversized value");
    });
    it("int64 should construct properly when given a value -2,147,483,648", () => {
        const int64 = Int64("-2147483648");
        expect(int64._value.toNumber()).to.be.equal(-2147483648);
        expect(int64._size).to.be.equal(64);
        assert(int64._int64);
    });
});

describe("Basic int construction with value: -9,223,372,036,854,775,808 (2^63)", () => {
    it("int8 should not construct properly for a value that exceeds its bit size", () => {
        let int8;
        try {
           int8 = Int8(-9223372036854775808);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int8 was constructed for oversized value");
    });
    it("int16 should not construct properly for a value that exceeds its bit size", () => {
        let int16;
        try {
           int16 = Int16(-9223372036854775808);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int16 was constructed for oversized value");
    });
    it("int32 should not construct properly for a value that exceeds its bit size", () => {
        let int32;
        try {
           int32 = Int32(-9223372036854775808);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int32 was constructed for oversized value");
    });
    it("int64 should construct properly when given a value -9,223,372,036,854,775,807", () => {
        const int64 = Int64("-9223372036854775807");
        expect(int64._value.toNumber()).to.be.equal(-9223372036854775807);
        expect(int64._size).to.be.equal(64);
        assert(int64._int64);
    });
    it("int64 should not construct properly for a value that exceeds its bit size", () => {
        let int64;
        try {
           int64 = Int64("-9223372036854775808");
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int64 was constructed for oversized value");
    });
});

describe("Int construction with large values (Int128 and Int256)", () => {
    it("int128 should construct properly when given a value −170,141,183,460,469,231,731,687,303,715,884,105,727", () => {
        const int128 = Int128("-170141183460469231731687303715884105727");
        expect(int128._value.eq(new BigNumber("-170141183460469231731687303715884105727")));
        expect(int128._size).to.be.equal(128);
        assert(int128._int128);
    });
    it("int128 should construct properly when given a value 170,141,183,460,469,231,731,687,303,715,884,105,727", () => {
        const int128 = Int128("170141183460469231731687303715884105727");
        expect(int128._value.eq(new BigNumber("170141183460469231731687303715884105727")));
        expect(int128._size).to.be.equal(128);
        assert(int128._int128);
    });
    it("int128 should not construct properly when given a value -170,141,183,460,469,231,731,687,303,715,884,105,728", () => {
        let int128;
        try {
           int128 = Int128("-170141183460469231731687303715884105728");
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int128 was constructed for oversized value");
    });
    it("int128 should not construct properly when given a value 170,141,183,460,469,231,731,687,303,715,884,105,728", () => {
        let int128;
        try {
           int128 = Int128("170141183460469231731687303715884105728");
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int128 was constructed for oversized value");
    });
    it("int256 should construct properly when given a value -57896044618658097711785492504343953926634992332820282019728792003956564819967", () => {
        const int256 = Int256("-57896044618658097711785492504343953926634992332820282019728792003956564819967");
        expect(int256._value.eq(new BigNumber("-57896044618658097711785492504343953926634992332820282019728792003956564819967")));
        expect(int256._size).to.be.equal(256);
        assert(int256._int256);
    });
    it("int256 should construct properly when given a value 57896044618658097711785492504343953926634992332820282019728792003956564819967", () => {
        const int256 = Int256("57896044618658097711785492504343953926634992332820282019728792003956564819967");
        expect(int256._value.eq(new BigNumber("57896044618658097711785492504343953926634992332820282019728792003956564819967")));
        expect(int256._size).to.be.equal(256);
        assert(int256._int256);
    });
    it("int256 should not construct properly when given a value -57896044618658097711785492504343953926634992332820282019728792003956564819968", () => {
        let int256;
        try {
           int256 = Int256("-57896044618658097711785492504343953926634992332820282019728792003956564819968");
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int256 was constructed for oversized value");
    });
    it("int256 should not construct properly when given a value 57896044618658097711785492504343953926634992332820282019728792003956564819968", () => {
        let int256;
        try {
           int256 = Int256("57896044618658097711785492504343953926634992332820282019728792003956564819968");
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int256 was constructed for oversized value");
    });
});

describe("SafeMath tests for Int8", () => {
    it("Int8 should return a Int8 for all basic methods: Add", () => {
        const one = Int8(1);
        const two = one.add(one);
        assert(two._int8, "did not return expected type Int8");
        assert(two._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(two._size).to.be.equal(8);
        expect(two._value.toNumber()).to.be.equal(2);
    });
    it("Int8 should return a Int8 for all basic methods: Subtract", () => {
        const one = Int8(1);
        const zero = one.sub(one);
        assert(zero._int8, "did not return expected type Int8");
        assert(zero._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(zero._size).to.be.equal(8);
        expect(zero._value.toNumber()).to.be.equal(0);
    });
    it("Int8 should return a Int8 for all basic methods: Multiply", () => {
        const two = Int8(2);
        const four = two.mul(two);
        assert(four._int8, "did not return expected type Int8");
        assert(four._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(four._size).to.be.equal(8);
        expect(four._value.toNumber()).to.be.equal(4);
    });
    it("Int8 should return a Int8 for all basic methods: Divide", () => {
        const four = Int8(4);
        const two = Int8(2);
        const resTwo = four.div(two);
        assert(resTwo._int8, "did not return expected type Int8");
        assert(resTwo._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(resTwo._size).to.be.equal(8);
        expect(resTwo._value.toNumber()).to.be.equal(2);
    });
    it("Int8 should should not allow overflow when adding 127 to 1", () => {
        const one = Int8(1);
        const limit = Int8(127);
        let overflow;
        try {
            overflow = limit.add(one);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int8 addition should not overflow");
    });
    it("Int8 should should not allow underflow when adding -127 to -1", () => {
        const one = Int8(-1);
        const limit = Int8(-127);
        let overflow;
        try {
            overflow = limit.add(one);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int8 addition should not overflow");
    });
    it("Int8 should should not allow overflow when subtracting -127 from 1 and 1 from -127", () => {
        const one = Int8(1);
        const limit = Int8(-127);
        let overflow;
        try {
            overflow = one.sub(limit);
        } catch (e) {
            assert(true);
        }
        try {
            overflow = limit.sub(one);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int8 addition should not overflow");
    });
    it("Int8 should allow subtracting 1 from 0", () => {
        const one = Int8(1);
        const zero = Int8(0);
        const neg1 = zero.sub(one);
        assert(neg1._int8, "did not return expected type Int8");
        assert(neg1._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(neg1._size).to.be.equal(8);
        expect(neg1._value.toNumber()).to.be.equal(-1);
    });
    it("Int8 should should not allow overflow when multiplying 64 by 2", () => {
        const limit = Int8(64);
        const two = Int8(2);
        let overflow;
        try {
            overflow = limit.mul(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int8 multiplication should not overflow");
    });
    it("Int8 should should not allow overflow when multiplying -64 by 2", () => {
        const limit = Int8(-64);
        const two = Int8(2);
        let overflow;
        try {
            overflow = limit.mul(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int8 multiplication should not overflow");
    });
    it("Int8 should should not allow overflow when multiplying 64 by -2", () => {
        const limit = Int8(64);
        const two = Int8(-2);
        let overflow;
        try {
            overflow = limit.mul(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int8 multiplication should not overflow");
    });
    it("Int8 should should not allow division by 0", () => {
        const zero = Int8(0);
        const two = Int8(2);
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
        assert(false, "Int8 multiplication should not overflow");
    });
});

describe("SafeMath tests for Int16", () => {
    it("Int16 should return a Int16 for all basic methods: Add", () => {
        const one = Int16(1);
        const two = one.add(one);
        assert(two._int16, "did not return expected type Int16");
        assert(two._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(two._size).to.be.equal(16);
        expect(two._value.toNumber()).to.be.equal(2);
    });
    it("Int16 should return a Int16 for all basic methods: Subtract", () => {
        const one = Int16(1);
        const zero = one.sub(one);
        assert(zero._int16, "did not return expected type Int16");
        assert(zero._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(zero._size).to.be.equal(16);
        expect(zero._value.toNumber()).to.be.equal(0);
    });
    it("Int16 should return a Int16 for all basic methods: Multiply", () => {
        const two = Int16(2);
        const four = two.mul(two);
        assert(four._int16, "did not return expected type Int16");
        assert(four._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(four._size).to.be.equal(16);
        expect(four._value.toNumber()).to.be.equal(4);
    });
    it("Int16 should return a Int16 for all basic methods: Divide", () => {
        const four = Int16(4);
        const two = Int16(2);
        const resTwo = four.div(two);
        assert(resTwo._int16, "did not return expected type Int16");
        assert(resTwo._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(resTwo._size).to.be.equal(16);
        expect(resTwo._value.toNumber()).to.be.equal(2);
    });
    it("Int16 should should not allow overflow when adding 32,767 to 1", () => {
        const one = Int16(1);
        const limit = Int16(32767);
        let overflow;
        try {
            overflow = limit.add(one);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int16 addition should not overflow");
    });
    it("Int16 should should not allow overflow when adding -32,767 to -1", () => {
        const one = Int16(-1);
        const limit = Int16(-32767);
        let overflow;
        try {
            overflow = limit.add(one);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int16 addition should not overflow");
    });
    it("Int16 should allow underflow when subtracting 1 from 0", () => {
        const one = Int16(1);
        const zero = Int16(0);
        const neg1 = zero.sub(one);
        assert(neg1._int16, "did not return expected type Int16");
        assert(neg1._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(neg1._size).to.be.equal(16);
        expect(neg1._value.toNumber()).to.be.equal(-1);
    });
    it("Int16 should should not allow overflow when multiplying 16,384 by 2", () => {
        const limit = Int16(16384);
        const two = Int16(2);
        let overflow;
        try {
            overflow = limit.mul(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int16 multiplication should not overflow");
    });
    it("Int16 should should not allow division by 0", () => {
        const zero = Int16(0);
        const two = Int16(2);
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
        assert(false, "Int16 multiplication should not overflow");
    });
});

describe("SafeMath tests for Int32", () => {
    it("Int32 should return a Int32 for all basic methods: Add", () => {
        const one = Int32(1);
        const two = one.add(one);
        assert(two._int32, "did not return expected type Int32");
        assert(two._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(two._size).to.be.equal(32);
        expect(two._value.toNumber()).to.be.equal(2);
    });
    it("Int32 should return a Int32 for all basic methods: Subtract", () => {
        const one = Int32(1);
        const zero = one.sub(one);
        assert(zero._int32, "did not return expected type Int32");
        assert(zero._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(zero._size).to.be.equal(32);
        expect(zero._value.toNumber()).to.be.equal(0);
    });
    it("Int32 should return a Int32 for all basic methods: Multiply", () => {
        const two = Int32(2);
        const four = two.mul(two);
        assert(four._int32, "did not return expected type Int32");
        assert(four._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(four._size).to.be.equal(32);
        expect(four._value.toNumber()).to.be.equal(4);
    });
    it("Int32 should return a Int32 for all basic methods: Divide", () => {
        const four = Int32(4);
        const two = Int32(2);
        const resTwo = four.div(two);
        assert(resTwo._int32, "did not return expected type Int32");
        assert(resTwo._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(resTwo._size).to.be.equal(32);
        expect(resTwo._value.toNumber()).to.be.equal(2);
    });
    it("Int32 should should not allow overflow when adding 2,147,483,647 to 1", () => {
        const one = Int32(1);
        const limit = Int32(2147483647);
        let overflow;
        try {
            overflow = limit.add(one);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int32 addition should not overflow");
    });
    it("Int32 should allow underflow when subtracting 1 from 0", () => {
        const one = Int32(1);
        const zero = Int32(0);
        const neg1 = zero.sub(one);
        assert(neg1._int32, "did not return expected type Int32");
        assert(neg1._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(neg1._size).to.be.equal(32);
        expect(neg1._value.toNumber()).to.be.equal(-1);
    });
    it("Int32 should should not allow overflow when multiplying 1,073,741,824 by 2", () => {
        const limit = Int32(1073741824);
        const two = Int32(2);
        let overflow;
        try {
            overflow = limit.mul(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int32 multiplication should not overflow");
    });
    it("Int32 should should not allow division by 0", () => {
        const zero = Int32(0);
        const two = Int32(2);
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
        assert(false, "Int32 multiplication should not overflow");
    });
});

describe("SafeMath tests for Int64", () => {
    it("Int64 should return a Int64 for all basic methods: Add", () => {
        const one = Int64("1");
        const two = one.add(one);
        assert(two._int64, "did not return expected type Int64");
        assert(two._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(two._size).to.be.equal(64);
        expect(two._value.toNumber()).to.be.equal(2);
    });
    it("Int64 should return a Int64 for all basic methods: Subtract", () => {
        const one = Int64("1");
        const zero = one.sub(one);
        assert(zero._int64, "did not return expected type Int64");
        assert(zero._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(zero._size).to.be.equal(64);
        expect(zero._value.toNumber()).to.be.equal(0);
    });
    it("Int64 should return a Int64 for all basic methods: Multiply", () => {
        const two = Int64("2");
        const four = two.mul(two);
        assert(four._int64, "did not return expected type Int64");
        assert(four._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(four._size).to.be.equal(64);
        expect(four._value.toNumber()).to.be.equal(4);
    });
    it("Int64 should return a Int64 for all basic methods: Divide", () => {
        const four = Int64("4");
        const two = Int64("2");
        const resTwo = four.div(two);
        assert(resTwo._int64, "did not return expected type Int64");
        assert(resTwo._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(resTwo._size).to.be.equal(64);
        expect(resTwo._value.toNumber()).to.be.equal(2);
    });

    it("Int64 should should not allow overflow when adding 9,223,372,036,854,775,807 to 1", () => {
        const one = Int64("1");
        const limit = Int64("9223372036854775807");
        let overflow;
        try {
            overflow = limit.add(one);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int64 addition should not overflow");
    });
    it("Int64 should should not allow underflow when subtracting 1 from -9,223,372,036,854,775,807", () => {
        const limit = Int64("-9223372036854775807");
        const one = Int64("1");
        let underflow;
        try {
            underflow = one.sub(limit);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int64 subtraction should not underflow");
    });
    it("Int64 should should not allow overflow when multiplying 4.711686e+18 by 2", () => {
        const limit = Int64("4.711686e+18");
        const two = Int64("2");
        let overflow;
        try {
            overflow = limit.mul(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int64 multiplication should not overflow");
    });
    it("Int64 should should not allow overflow when multiplying -4.711686e+18 by 2", () => {
        const limit = Int64("-4.711686e+18");
        const two = Int64("2");
        let overflow;
        try {
            overflow = limit.mul(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int64 multiplication should not overflow");
    });
    it("Int64 should should not allow division by 0", () => {
        const zero = Int64("0");
        const two = Int64("2");
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
        assert(false, "Int64 multiplication should not overflow");
    });
});

