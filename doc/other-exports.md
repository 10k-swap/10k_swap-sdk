# JSBI

```typescript
import { JSBI } from '10k_swap-sdk'
// import JSBI from 'jsbi'
```

The default export from [jsbi](https://github.com/GoogleChromeLabs/jsbi).

# BigintIsh

```typescript
import { BigintIsh } from '10k_swap-sdk'
// type BigintIsh = JSBI | bigint | string
```

A union type comprised of all types that can be cast to a JSBI instance.

# ChainId

```typescript
import { ChainId } from '10k_swap-sdk'
// enum ChainId {
//  MAINNET = '0x534e5f4d41494e',
//  TESTNET = '0x534e5f474f45524c49',
// }
```

A enum denominating supported chain IDs.

# TradeType

```typescript
import { TradeType } from '10k_swap-sdk'
// enum TradeType {
//   EXACT_INPUT,
//   EXACT_OUTPUT
// }
```

A enum denominating supported trade types.

# Rounding

```typescript
import { Rounding } from '10k_swap-sdk'
// enum Rounding {
//   ROUND_DOWN,
//   ROUND_HALF_UP,
//   ROUND_UP
// }
```

A enum denominating supported rounding options.

# FACTORY_ADDRESSES

```typescript
import { FACTORY_ADDRESSES } from '10k_swap-sdk'
```

The factory addresses.

# CONTRACT_ADDRESS_PREFIX

```typescript
import { CONTRACT_ADDRESS_PREFIX } from '10k_swap-sdk'
```
Encode short string `STARKNET_CONTRACT_ADDRESS`.

# MINIMUM_LIQUIDITY

```typescript
import { MINIMUM_LIQUIDITY } from '10k_swap-sdk'
```

Minimum liquidity for the initial pool.

# InsufficientReservesError

```typescript
import { InsufficientReservesError } from '10k_swap-sdk'
```

# InsufficientInputAmountError

```typescript
import { InsufficientInputAmountError } from '10k_swap-sdk'
```