# Fixed Size Numbers

A functional implementation of fixed size integers in javascript with typing in TypeScript.

>Note: this library is just a typed wrapper on [BigNumber.js](https://github.com/MikeMcl/bignumber.js/)

**Currently no Floating Points or Decimal values are supported!!!**

## API

Create a new signed or unsigned integer by passing a value in string, number, or BigNumber format to the constructor function

Access the value and the size with their respective attributes (_value, and _size)

>Note: _value is always a BigNumber

Or preform safe math using the methods provided

```
import { Uint8, Int8 } from 'fixed-sized-numbers-ts'
let safe72 = Uint8(72)
let safeNegative54 = Int(-54)

console.log(safe72)
/*
{
    _value: 72,
    _size: 8,
    validateSize: [Function],
    add: [Function],
    sub: [Function],
    mul: [Function],
    div: [Function],
    _uint8: true
}
/*

console.log(safeNegative54)
/*
{
    _value: -54,
    _size: 8,
    validateSize: [Function],
    add: [Function],
    sub: [Function],
    mul: [Function],
    div: [Function],
    _int8: true,
    _isPositive: false
}
/*
```

>Note: Uint64 and Int64 need to be constructed using strings because of imprecission in Javascript after 53 bits, this is enforced in the typing

```
import { Uint64 } from 'fixed-sized-numbers-ts'
let bigSafeNumber = Uint64("18446744073709551616")

console.log(bigSafeNumber)
/*
{
    _value: "18446744073709551616",
    _size: 8,
    validateSize: [Function],
    add: [Function],
    sub: [Function],
    mul: [Function],
    div: [Function],
    _uint8: true
}
/*
```

For safe math the first value in the equation will be the one who's method is being called, the second number will be the number passed to it.

>Note: Types must match; if you are calling the method from a Uint8 on a Uint8 it will work, but if you are calling it on a Uint16 it will not, this is enforced at the type level. Another way to think about this is that the math methods return a value with the same type that it belongs to i.e. all Uint8 methods return Uint8 objects.

```
import { Uint8, Uint16, Int8 } from 'fixed-sized-numbers-ts'
let one = Uint8(1)
let two = Uint8(2)
let three = Uint8(3)
let threeHunnid = Uint16(300)
let negOne = Uint8(-1)

one.add(one) // will yield a Uint8 with _value of 2
two.sub(one) // will yield a Uint8 with _value of 1
two.mul(three) // will yield a Uint8 with _value of 6
two.div(one) // will yield a Uint8 with _value of 2

// All of these will yield a type error
negOne.add(one) // No Int8 -> Uint8
one.add(negOne) // No Uint8 -> Int8
threeHunnid.add(one) // No Uint16 -> Uint8
threeHunnid.add(negOne) no Uint16 -> Int8
```