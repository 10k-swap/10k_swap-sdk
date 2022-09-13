import { PAIR_CONTRACT_CLASS_HASH } from '../src/constants'

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    it('matches computed bytecode hash', () => {
      expect(PAIR_CONTRACT_CLASS_HASH).toEqual('0x231adde42526bad434ca2eb983efdd64472638702f87f97e6e3c084f264e06f')
    })
  })
})
