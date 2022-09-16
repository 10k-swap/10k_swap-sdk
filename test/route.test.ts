import { Token, ChainId, Pair, TokenAmount, Route } from '../src'

describe('Route', () => {
  const token0 = new Token(ChainId.MAINNET, '0x0000000000000000000000000000000000000000000000000000000000000001', 18, 't0')
  const token1 = new Token(ChainId.MAINNET, '0x0000000000000000000000000000000000000000000000000000000000000002', 18, 't1')
  const eth = new Token(ChainId.MAINNET, '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7', 18, 'ETH')

  const pair_0_1 = new Pair(new TokenAmount(token0, '100'), new TokenAmount(token1, '200'))
  const pair_0_eth = new Pair(new TokenAmount(token0, '100'), new TokenAmount(eth, '100'))
  const pair_1_eth = new Pair(new TokenAmount(token1, '175'), new TokenAmount(eth, '100'))

  it('constructs a path from the tokens', () => {
    const route = new Route([pair_0_1], token0)
    expect(route.pairs).toEqual([pair_0_1])
    expect(route.path).toEqual([token0, token1])
    expect(route.input).toEqual(token0)
    expect(route.output).toEqual(token1)
    expect(route.chainId).toEqual(ChainId.MAINNET)
  })

  it('can have a token as both input and output', () => {
    const route = new Route([pair_0_eth, pair_0_1, pair_1_eth], eth)
    expect(route.pairs).toEqual([pair_0_eth, pair_0_1, pair_1_eth])
    expect(route.input).toEqual(eth)
    expect(route.output).toEqual(eth)
  })

  it('supports ether input', () => {
    const route = new Route([pair_0_eth], eth)
    expect(route.pairs).toEqual([pair_0_eth])
    expect(route.input).toEqual(eth)
    expect(route.output).toEqual(token0)
  })

  it('supports ether output', () => {
    const route = new Route([pair_0_eth], token0, eth)
    expect(route.pairs).toEqual([pair_0_eth])
    expect(route.input).toEqual(token0)
    expect(route.output).toEqual(eth)
  })
})
