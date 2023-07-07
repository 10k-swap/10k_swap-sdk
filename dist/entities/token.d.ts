import { StarknetChainId } from '../constants';
/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export declare class Token {
    readonly decimals: number;
    readonly symbol?: string;
    readonly name?: string;
    readonly chainId: StarknetChainId;
    readonly address: string;
    constructor(chainId: StarknetChainId, address: string, decimals: number, symbol?: string, name?: string);
    /**
     * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
     * @param other other token to compare
     */
    equals(other: Token): boolean;
    /**
     * Returns true if the address of this token sorts before the address of the other token
     * @param other other token to compare
     * @throws if the tokens have the same address
     * @throws if the tokens are on different chains
     */
    sortsBefore(other: Token): boolean;
}
/**
 * Compares two currencies for equality
 */
export declare function currencyEquals(currencyA: Token, currencyB: Token): boolean;
