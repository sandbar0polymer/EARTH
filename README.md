# EARTH

EARTH is an NFT project that defines an equal area mesh for planet Earth. The mesh consists of 812 tiles, out of which 12 are pentagons and the rest are hexagons. The tiles are displayed visually on a globe and can be equipped with a custom message by their owner.

## Requirements

- npm

## Commands

### Build and run
```bash
npm install # install dependencies
npm run build # build
npm run start-ganache # start local blockchain
npm run deploy-contract-ganache # deploy contracts
npm run start-webpack # start local web server
```

### Generate metadata
```bash
npm run generate-metadata-json
npm run generate-metadata-images # requires Python, Selenium, Firefox
```

### Deployment
```bash
npm run generate-contract-flat # generate single-file contracts
```

## Disclaimer

The code is not pretty, but it should work.

## Testnet URLs

### Goerli
- [OpenSea](https://testnets.opensea.io/collection/earth-eokepbd3mj)
- [EARTH](https://goerli.etherscan.io/address/0x23154C4647cfa07E90F5e35B7084034D1586d072)

### Rinkeby (deprecated)
- [OpenSea](https://testnets.opensea.io/collection/earth-tiles)
- [LAND](https://rinkeby.etherscan.io/token/0x36154023b3a7d15c60fe99f14c1ed4d0b0de53d4#writeContract)
- [EARTH](https://rinkeby.etherscan.io/address/0x30E8782433b7cE079E8772c7f756E3bEfa6Aebb3#tokentxns)

## TODO

### High priority

- Update metadata.
- Toggle show/hide all text.
- Indicate loading when read blockchain data.
- Improve Performance by using different geometry for drawing tiles.
- Show modal loading when reading chain state.
- If connected to wrong network, prompt wallet to change network via `wallet_switchEthereumChain`.
- Prepare setup for deployment on Mainnet.
    - Set auction duration to 1day.
    - Prepare OpenSea text.
- Add LICENSE?

### Low priority

- Replace `alert` with modal
- Cleanup HTML and CSS
- Re-introduce # before tile number (website and metadata title)?
- Add more attributes? (Climate zone, Highest point, Lowest point, Population)
- Refine LND auction model: Extend bid time on last minute bid?
