import { StarknetChainId, Token } from '../src'

describe('Token', () => {
  const ADDRESS_ONE = '0x0000000000000000000000000000000000000000000000000000000000000001'
  const ADDRESS_TWO = '0x0000000000000000000000000000000000000000000000000000000000000002'

  describe('#equals', () => {
    it('fails if address differs', () => {
      expect(new Token(StarknetChainId.MAINNET, ADDRESS_ONE, 18).equals(new Token(StarknetChainId.MAINNET, ADDRESS_TWO, 18))).toBe(false)
    })

    it('true if only decimals differs', () => {
      expect(new Token(StarknetChainId.MAINNET, ADDRESS_ONE, 9).equals(new Token(StarknetChainId.MAINNET, ADDRESS_ONE, 18))).toBe(true)
    })

    it('true if address is the same', () => {
      expect(new Token(StarknetChainId.MAINNET, ADDRESS_ONE, 18).equals(new Token(StarknetChainId.MAINNET, ADDRESS_ONE, 18))).toBe(true)
    })

    it('true on reference equality', () => {
      const token = new Token(StarknetChainId.MAINNET, ADDRESS_ONE, 18)
      expect(token.equals(token)).toBe(true)
    })

    it('true even if name/symbol/decimals differ', () => {
      const tokenA = new Token(StarknetChainId.MAINNET, ADDRESS_ONE, 9, 'abc', 'def')
      const tokenB = new Token(StarknetChainId.MAINNET, ADDRESS_ONE, 18, 'ghi', 'jkl')
      expect(tokenA.equals(tokenB)).toBe(true)
    })

    it('sort before', () => {
      const tokenA = new Token(StarknetChainId.MAINNET, ADDRESS_ONE, 18, 'abc', 'def')
      const tokenB = new Token(StarknetChainId.MAINNET, ADDRESS_TWO, 18, 'ghi', 'jkl')
      expect(tokenA.sortsBefore(tokenB)).toBe(true)
    })
  })
})
