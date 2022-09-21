# Token

```typescript
constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string)
```

The Token entity represents an ERC-20 token at a specific address on a specific chain.

# Example

```typescript
import { ChainId, Token } from '10k_swap-sdk'

const token = new Token(ChainId.MAINNET, '0x0000000000000000000000000000000000000000000000000000000000000001', 18, 'HOT', 'Caffeine')
```

# Properties

## chainId

```typescript
chainId: ChainId
```

See [ChainId](https://github.com/10k-swap/10k_swap-sdk/blob/main/doc/other-exports.md#chainid)

## address

```typescript
address: string
```

## decimals

```typescript
decimals: number
```

## symbol

```typescript
symbol?: string
```

## name

```typescript
name?: string
```

# Methods

## equals

```typescript
equals(other: Token): boolean
```

Checks if the current instance is equal to another (has an identical chainId and address).

## sortsBefore

```typescript
sortsBefore(other: Token): boolean
```

Checks if the current instance sorts before another, by address.
