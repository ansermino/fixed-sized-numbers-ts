import UnsignedNumber from '../lib/Uint';
import { expect, assert } from 'chai';
import 'mocha';
import BigNumber from 'bignumber.js'
import {InconsistentSizeError, InvalidSizeError, OverflowError} from "../lib/errors";

describe('Unsigned Number', () => {
    it('should create a instance with a default value of zero', () => {
        let num = new UnsignedNumber(1)

        expect(num._value.c).to.have.lengthOf(1)
        expect(num._value.c[0]).to.equal(0)
    });

    it('should create an instance with a value of 100 and size 10', () => {
        let num = new UnsignedNumber(100)

        expect(num._size).to.equal(10)

        expect(num._value.c).to.have.lengthOf(1)
        expect(num._value.c[0]).to.equal(100)
    })

    it('should fail to create an instance with a value greater than its size', () => {
        expect(() => new UnsignedNumber(1, 999999999999999))
            .to.throw(new OverflowError(1, 50).message)
    })

    it('should fail to perform operations two numbers of the different sizes', () => {
        let a = new UnsignedNumber(32, 1)
        let b = new UnsignedNumber(64, 1)
        expect(() => a.Add(b)).to.throw(new InconsistentSizeError(32, 64).message)
        expect(() => a.Sub(b)).to.throw(new InconsistentSizeError(32, 64).message)
        // TODO: Add new operations
        // expect(() => a.Add(b)).to.throw(new InconsistentSizeError(32, 64).message)
        // expect(() => a.Add(b)).to.throw(new InconsistentSizeError(32, 64).message)

    })

    it('should evaluate two equal numbers as equal', () => {
        let a = new UnsignedNumber(32, 100)
        let b = new UnsignedNumber(32, 100)
        assert.isTrue(a.Eq(b), 'Equality returned false')
    })

    it('should evaluate two non-equal numbers as non-equal', () => {
        let a = new UnsignedNumber(32, 101)
        let b = new UnsignedNumber(32, 100)
        assert.isFalse(a.Eq(b), 'Equality returned true')
    })

    it('should overflow and throw error when sum is greater than size', () => {
        let a = new UnsignedNumber(32, 4294967196)
        let b = new UnsignedNumber(32 ,4294967196)

        // TODO: Update actual size
        expect(() => a.Add(b)).to.throw(new OverflowError(a.size, 33).message)
    })

    it('should correctly add two numbers', () => {
        let a = new UnsignedNumber(64, 10000000000)
        let b = new UnsignedNumber(64, 10000000000)
        let res = a.Add(b)

        expect(res.Eq(new UnsignedNumber(64, 20000000000)))
    })



});