
# @chainx-v2/api

This library provides a clean wrapper around all the methods exposed by a Polkadot/Subtrate network client and defines all the types exposed by a node. For complete documentation around the classes, interfaces and their use, visit the [documentation portal](https://polkadot.js.org/api/).

If you are an existing user, please be sure to track the [CHANGELOG](CHANGELOG.md) and [UPGRADING](UPGRADING.md) guides when changing versions.


## overview

The API is split up into a number of internal packages -

- [@chainx-v2/api](packages/api/) The API library, providing both Promise and RxJS Observable-based interfaces. This is the main user-facing entry point.
- [@chainx-v2/api-derive](packages/api-derive/) Derived results that are injected into the API, allowing for combinations of various query results (only used internally and exposed on the Api instances via `api.derive.*`)
- [@chainx-v2/api-metadata](packages/api-metadata/) Base extrinsic, storage and constant injectors for injection
- [@chainx-v2/rpc-core](packages/rpc-core/) Wrapper around all [JSON-RPC methods](https://polkadot.js.org/api/substrate/rpc.html) exposed by a Polkadot network client
- [@chainx-v2/rpc-provider](packages/rpc-provider/) Providers for connecting to nodes, including WebSockets and Http

Type definitions for interfaces as exposed by Polkadot & Substrate clients -

- [@polkadot/jsonrpc](packages/jsonrpc/) Definitions for JSONRPC endpoints
- [@chainx-v2/types](packages/types/) Codecs for all Polkadot and Substrate primitives

