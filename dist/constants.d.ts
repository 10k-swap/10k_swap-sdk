import JSBI from 'jsbi';
import { StarknetChainId } from 'starknet/constants';
export declare type BigintIsh = JSBI | bigint | string;
export { StarknetChainId as ChainId } from 'starknet/constants';
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const FEES_NUMERATOR: JSBI;
export declare const FEES_DENOMINATOR: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
export declare const PAIR_CONTRACT_CLASS_HASH = "0x231adde42526bad434ca2eb983efdd64472638702f87f97e6e3c084f264e06f";
export declare const FACTORY_ADDRESSES: {
    [chainId in StarknetChainId]: string;
};
export declare const CONTRACT_ADDRESS_PREFIX: string;
