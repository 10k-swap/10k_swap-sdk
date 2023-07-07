import { Provider } from 'starknet';
import { Pair } from './entities/pair';
import { StarknetChainId } from './constants';
import { Token } from './entities/token';
/**
 * Contains methods for constructing instances of pairs and tokens from on-chain data.
 */
export declare abstract class Fetcher {
    /**
     * Cannot be constructed.
     */
    private constructor();
    /**
     * Fetch information for a given token on the given chain, using the given ethers provider.
     * @param StarknetChainId chain of the token
     * @param address address of the token on the chain
     * @param provider provider used to fetch the token
     * @param symbol optional symbol of the token
     * @param name optional name of the token
     */
    static fetchTokenData(StarknetChainId: StarknetChainId, address: string, provider?: Provider, symbol?: string, name?: string): Promise<Token>;
    /**
     * Fetches information about a pair and constructs a pair from the given two tokens.
     * @param tokenA first token
     * @param tokenB second token
     * @param provider the provider to use to fetch the data
     */
    static fetchPairData(tokenA: Token, tokenB: Token, provider?: Provider): Promise<Pair>;
}
