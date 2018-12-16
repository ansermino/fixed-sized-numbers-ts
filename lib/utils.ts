import BigNumber from 'bignumber.js'
import { TypeNotSupportedError } from './errors'


const getSize = (num) => {
    if(typeof num === 'number') return getNumberSize(num)
    else if(typeof num === 'string') return getStringNumberSize(num)
    else if(BigNumber.isBigNumber(num)) return getBigNumberSize(num)
    else throw new TypeNotSupportedError()
}

const getNumberSize = (num: number): number => num.toString(2).length
const getBigNumberSize = (num: BigNumber): number => num.toNumber().toString(2).length
const getStringNumberSize = (num: string): number => parseInt(num).toString(2).length

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)

export {
    getSize,
    pipe
}