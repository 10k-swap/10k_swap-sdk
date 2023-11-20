import { RpcProvider, Contract, Abi } from 'starknet-v5'
import { TokenAmount } from './entities/fractions/tokenAmount'
import { Pair } from './entities/pair'
import l0kPairAbi from './abis/l0kPairAbi.json'
import invariant from 'tiny-invariant'
import ERC20 from './abis/ERC20.json'
import { StarknetChainId } from './constants'
import { Token } from './entities/token'

let TOKEN_DECIMALS_CACHE: { [StarknetChainId: string]: { [address: string]: number } } = {
  [StarknetChainId.TESTNET]: {
    '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7': 18 // ETH
  }
}

async function getDecimals(StarknetChainId: StarknetChainId, address: string, provider: RpcProvider): Promise<number> {
  if (typeof TOKEN_DECIMALS_CACHE?.[StarknetChainId]?.[address] === 'number') {
    return TOKEN_DECIMALS_CACHE[StarknetChainId][address]
  }

  const contract = new Contract(ERC20 as Abi, address, provider)

  const { decimals } = (await contract.call('decimals')) as { decimals: bigint }

  const _decimals = parseInt(decimals.toString())

  TOKEN_DECIMALS_CACHE = {
    ...TOKEN_DECIMALS_CACHE,
    [StarknetChainId]: {
      ...TOKEN_DECIMALS_CACHE?.[StarknetChainId],
      [address]: _decimals
    }
  }

  return _decimals
}

/**
 * Contains methods for constructing instances of pairs and tokens from on-chain data.
 */
export abstract class Fetcher {
  /**
   * Cannot be constructed.
   */
  private constructor() {}

  /**
   * Fetch information for a given token on the given chain, using the given ethers provider.
   * @param StarknetChainId chain of the token
   * @param address address of the token on the chain
   * @param provider provider used to fetch the token
   * @param symbol optional symbol of the token
   * @param name optional name of the token
   */
  public static async fetchTokenData(
    starknetChainId: StarknetChainId,
    address: string,
    provider = new RpcProvider({ nodeUrl: starknetChainId }),
    symbol?: string,
    name?: string
  ): Promise<Token> {
    const parsedDecimals = await getDecimals(starknetChainId, address, provider)

    return new Token(starknetChainId, address, parsedDecimals, symbol, name)
  }

  /**
   * Fetches information about a pair and constructs a pair from the given two tokens.
   * @param tokenA first token
   * @param tokenB second token
   * @param provider the provider to use to fetch the data
   */
  public static async fetchPairData(tokenA: Token, tokenB: Token, provider = new RpcProvider({ nodeUrl: tokenA.chainId })): Promise<Pair> {
    invariant(tokenA.chainId === tokenB.chainId, 'CHAIN_ID')
    const address = Pair.getAddress(tokenA, tokenB)
    const { reserve0, reserve1 } = (await new Contract(l0kPairAbi as Abi, address, provider).call('getReserves', [])) as {
      reserve0: bigint
      reserve1: bigint
    }
    const balances = tokenA.sortsBefore(tokenB) ? [reserve0, reserve1] : [reserve0, reserve1]

    return new Pair(new TokenAmount(tokenA, balances[0].toString()), new TokenAmount(tokenB, balances[1].toString()))
  }
}
