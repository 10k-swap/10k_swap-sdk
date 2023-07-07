# 10kswap SDK

This repository contains the 10kswap SDK code, Forked from the [Uniswap SDK](https://github.com/Uniswap/v2-sdk).

The 10kswap SDK exists to help developers build on top of 10kswap. It's designed to run in any environment that can execute JavaScript (think websites, node scripts, etc.).

# Installation

The easiest way to consume the SDK is via [npm](https://github.com/10k-swap/10k_swap-sdk). To install it in your project, simply run `yarn add https://github.com/10k-swap/10k_swap-sdk.git#main` (or `npm install https://github.com/10k-swap/10k_swap-sdk.git#main`).

# Usage

To run code from the SDK in your application, use an `import` or `require` statement, depending on which your environment supports. Note that the guides following this page will use ES6 syntax.

## ES6 (import)

```typescript
import { StarknetChainId } from '10k_swap-sdk'
console.log(`The chainId of mainnet is ${StarknetChainId.MAINNET}.`)
// The chainId of mainnet is 0x534e5f4d41494e.
```

## CommonJS (require)

```typescript
const L0KSWAP = require('10k_swap-sdk')
console.log(`The chainId of mainnet is ${L0KSWAP.StarknetChainId.MAINNET}.`)
// The chainId of mainnet is 0x534e5f4d41494e.
```

# Reference

Comprehensive reference material for the SDK is publicly available on the [10kswap Github](https://github.com/10k-swap).

# DOC

[fetcher](https://github.com/10k-swap/10k_swap-sdk/blob/main/doc/fetcher.md)

[fractions](https://github.com/10k-swap/10k_swap-sdk/blob/main/doc/fractions.md)

[constants](https://github.com/10k-swap/10k_swap-sdk/blob/main/doc/other-exports.md)

[route](https://github.com/10k-swap/10k_swap-sdk/blob/main/doc/route.md)

[token](https://github.com/10k-swap/10k_swap-sdk/blob/main/doc/token.md)

[trade](https://github.com/10k-swap/10k_swap-sdk/blob/main/doc/trade.md)