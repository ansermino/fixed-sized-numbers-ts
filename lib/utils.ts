import BigNumber from 'bignumber.js'
import { TypeNotSupportedError } from './errors'

// TODO: need to make this work for signed numbers as well
const getMaxValue = (size: number): BigNumber => {
    if (size < 4096) {
        // Save some common sizes for faster lookup
        if (size === 2) return new BigNumber(0x3)
        else if (size === 4) return new BigNumber(0xF)
        else if (size === 8) return new BigNumber(0xFF)
        else if (size === 16) return new BigNumber(0xFFFF)
        else if (size === 32) return new BigNumber(0xFFFFFFFF)
        else if (size === 64) return new BigNumber(0xFFFFFFFFFFFFFFFF)
        else if (size === 128) return new BigNumber(0xFFFFFFFFFFFFFFFF)
    }
        // TODO: Ensure this handles values greater than Number.MAX_VALUE
        return new BigNumber((2**size) - 1)
}

const getSize = (num) => {
    if(typeof num === 'number') return getNumberSize(num)
    else if(typeof num === 'string') return getStringNumberSize(num)
    else if(BigNumber.isBigNumber(num)) return getBigNumberSize(num)
    else throw new TypeNotSupportedError()
}

const getNumberSize = (num: number): number => num.toString(2).length
const getBigNumberSize = (num: BigNumber): number => num.toNumber().toString(2).length
const getStringNumberSize = (num: string): number => parseInt(num).toString(2).length

export {
    getMaxValue,
    getSize
}