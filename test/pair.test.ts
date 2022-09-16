import { ChainId, Token, Pair, TokenAmount, Price } from '../src'

describe('Pair', () => {
  const USDC = new Token(ChainId.TESTNET, '0x005a643907b9a4bc6a55e9069c4fd5fd1f5c79a22470690f75556c4736e34426', 6, 'USDC', 'USD Coin')
  const DAI = new Token(ChainId.TESTNET, '0x03e85bfbb8e2a42b7bead9e88e9a1b19dbccf661471061807292120462396ec9', 18, 'DAI', 'DAI Stablecoin')
  const ETH = new Token(ChainId.MAINNET, '0x29e407b9a95f8990eccd2baeb9645ddd165ee547ae6aebb1c9c0220c77ef065', 18, 'ETH')

  describe('constructor', () => {
    it('cannot be used for tokens on different chains', () => {
      expect(() => new Pair(new TokenAmount(USDC, '100'), new TokenAmount(ETH, '100'))).toThrow('CHAIN_IDS')
    })
  })

  describe('#getAddress', () => {
    it('returns the correct address', () => {
      expect(Pair.getAddress(USDC, DAI)).toEqual('0x13259169d7a00bba112b8d40d1bb4fd777e1cb0028d882c8a349b2167aca20f')
    })
  })

  describe('#token0', () => {
    it('always is the token that sorts before', () => {
      expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '100')).token1).toEqual(DAI)
      expect(new Pair(new TokenAmount(DAI, '100'), new TokenAmount(USDC, '100')).token1).toEqual(DAI)
    })
  })
  describe('#token1', () => {
    it('always is the token that sorts after', () => {
      expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '100')).token0).toEqual(USDC)
      expect(new Pair(new TokenAmount(DAI, '100'), new TokenAmount(USDC, '100')).token0).toEqual(USDC)
    })
  })
  describe('#reserve0', () => {
    it('always comes from the token that sorts before', () => {
      expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '101')).reserve1).toEqual(new TokenAmount(DAI, '101'))
      expect(new Pair(new TokenAmount(DAI, '101'), new TokenAmount(USDC, '100')).reserve1).toEqual(new TokenAmount(DAI, '101'))
    })
  })
  describe('#reserve1', () => {
    it('always comes from the token that sorts after', () => {
      expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '101')).reserve0).toEqual(new TokenAmount(USDC, '100'))
      expect(new Pair(new TokenAmount(DAI, '101'), new TokenAmount(USDC, '100')).reserve0).toEqual(new TokenAmount(USDC, '100'))
    })
  })

  describe('#token0Price', () => {
    it('returns price of token0 in terms of token1', () => {
      expect(new Pair(new TokenAmount(USDC, '101'), new TokenAmount(DAI, '100')).token1Price).toEqual(new Price(DAI, USDC, '100', '101'))
      expect(new Pair(new TokenAmount(DAI, '100'), new TokenAmount(USDC, '101')).token1Price).toEqual(new Price(DAI, USDC, '100', '101'))
    })
  })

  describe('#token1Price', () => {
    it('returns price of token1 in terms of token0', () => {
      expect(new Pair(new TokenAmount(USDC, '101'), new TokenAmount(DAI, '100')).token0Price).toEqual(new Price(USDC, DAI, '101', '100'))
      expect(new Pair(new TokenAmount(DAI, '100'), new TokenAmount(USDC, '101')).token0Price).toEqual(new Price(USDC, DAI, '101', '100'))
    })
  })

  describe('#priceOf', () => {
    const pair = new Pair(new TokenAmount(USDC, '101'), new TokenAmount(DAI, '100'))
    it('returns price of token in terms of other token', () => {
      expect(pair.priceOf(DAI)).toEqual(pair.token1Price)
      expect(pair.priceOf(USDC)).toEqual(pair.token0Price)
    })

    it('throws if invalid token', () => {
      expect(() => pair.priceOf(ETH)).toThrow('TOKEN')
    })
  })

  describe('#reserveOf', () => {
    it('returns reserves of the given token', () => {
      expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '101')).reserveOf(USDC)).toEqual(new TokenAmount(USDC, '100'))
      expect(new Pair(new TokenAmount(DAI, '101'), new TokenAmount(USDC, '100')).reserveOf(USDC)).toEqual(new TokenAmount(USDC, '100'))
    })

    it('throws if not in the pair', () => {
      expect(() => new Pair(new TokenAmount(DAI, '101'), new TokenAmount(USDC, '100')).reserveOf(ETH)).toThrow('TOKEN')
    })
  })

  describe('#chainId', () => {
    it('returns the token0 chainId', () => {
      expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '100')).chainId).toEqual(ChainId.TESTNET)
      expect(new Pair(new TokenAmount(DAI, '100'), new TokenAmount(USDC, '100')).chainId).toEqual(ChainId.TESTNET)
    })
  })
  describe('#involvesToken', () => {
    expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '100')).involvesToken(USDC)).toEqual(true)
    expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '100')).involvesToken(DAI)).toEqual(true)
    expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '100')).involvesToken(ETH)).toEqual(false)
  })
})
