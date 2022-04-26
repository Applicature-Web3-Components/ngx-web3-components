# Applicature Universal Components
This library can help you to develop Blockchain projects easily.  
For now, this library supports only Angular 13 version.

## Instaling library
    npm i @applicature/styles @applicature/components

## How to make it works

### styles.scss
     @import "~node_modules/@applicature/styles/src/lib/scss/as-styles";

or

Add `node_modules/@applicature/styles/src/lib/scss/as-styles` to **angular.json** file, path **projects.YOUR_PROJECT_NAME.architect.build.options.styles**:

<pre><code>
{
  ...,
  "projects": {
    ...,
    "YOUR_PROJECT_NAME": {
        ...,
      "architect": {
        "build": {
          ...,
          "options": {
            ...,
            "styles": [
              ...,
              "node_modules/@applicature/styles/src/lib/scss/as-styles.scss"
            ],
          }
        }
      }
    }
  }
}
</code></pre>

### polyfills.ts

<pre><code>
import { AucEthereum } from '@applicature/components';
import { Buffer } from 'buffer';
import process from 'process';
import Web3 from 'web3';

declare global {
  interface Window {
    ethereum: AucEthereum;
    global: any;
    web3: Web3;
  }
}

window.process = process;
window.global = window;
window.global.Buffer = global.Buffer || Buffer;
</code></pre>
  - Install <strong>process</strong> if it needs `npm i process`
    - add next option to **tsconfig.json**:

      <pre><code>
      {
        ...,
        "compilerOptions": {
          "allowSyntheticDefaultImports": true,
          ...
        }
      }
      </code></pre>
  
### Fixing Build errors

> BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default. This is no longer the case
for Angular 13+. Verify if you need this module and configure a polyfill for it.

Solution:
   - `npm i -D crypto-browserify stream-browserify assert stream-http https-browserify os-browserify`
   - **tsconfig.app.json**

      <pre><code>
      {
        ...,
        compilerOptions: {
          ...,
          "paths": {
            "crypto": [
              "./node_modules/crypto-browserify"
            ],
            "stream": [
              "./node_modules/stream-browserify"
            ],
            "assert": [
              "./node_modules/assert"
            ],
            "http": [
              "./node_modules/stream-http"
            ],
            "https": [
              "./node_modules/https-browserify"
            ],
            "os": [
              "./node_modules/os-browserify"
            ]
          }
        }
      }
      </code></pre>

## How to use
 - **app.module.ts**

<pre><code>
const wallets: Array<WalletModule | WalletInitOptions> = [
  {
    walletName: 'metamask',
    preferred: true
  },
  {
    walletName: 'walletConnect',
    infuraKey: '${YOUR_INFURA_KEY}',
    preferred: false
  }
];

const networks = {
  eth: 1,
  kovanTestnet: AUC_CHAIN_ID_NUM.KOVAN_TESTNET,
  // ...
};

const supportedNetworks: AucNetworkOption[] = [
  {
    icon: 'assets/svg/network/eth.svg',
    name: 'Ethereum',
    chainId: AUC_CHAIN_ID.RINKEBY_TESTNET,
    symbol: AucNativeCurrencies[AUC_CHAIN_ID.RINKEBY_TESTNET].name,
    blockExplorerUrl: AucBlockExplorerUrls[AUC_CHAIN_ID.RINKEBY_TESTNET][0],
    isActive: false
  },
  {
    icon: 'assets/svg/network/bsc.svg',
    name: 'BSC',
    chainId: '0x61',
    symbol: 'BNB',
    blockExplorerUrl: 'https://testnet.bscscan.com',
    blockExplorerApiUrl: 'https://api-testnet.bscscan.com/api',
    isActive: false,
    chainParams: { // Custom Chain params
      chainId: '0x61',
      chainName: 'Binance Smart Chain Testnet',
      nativeCurrency: {
        name: 'BNB',
        symbol: 'bnb',
        decimals: 18
      },
      rpcUrls: [ 'https://data-seed-prebsc-1-s1.binance.org:8545' ],
      blockExplorerUrls: [ 'https://testnet.bscscan.com' ]
    }
  },
  {
    icon: 'assets/svg/network/avax.svg',
    name: 'Avalanche',
    chainId: AUC_CHAIN_ID.AVALANCH_TESTNET,
    isActive: false,
    symbol: AucNativeCurrencies[AUC_CHAIN_ID.AVALANCH_TESTNET].name,
    blockExplorerUrl: AucBlockExplorerUrls[AUC_CHAIN_ID.AVALANCH_TESTNET][0],
    blockExplorerApiUrl: AucBlockExplorerApiUrl[AUC_CHAIN_ID.AVALANCH_TESTNET],
    chainParams: { // modified existing Chain params
      ...(aucGetChainParams(AUC_CHAIN_ID.AVALANCH_TESTNET)),
      chainName: 'Avalanche TestNet'
    }
  }
];

export function initWalletServiceFactory(
  walletConnectService: AucWalletConnectService
): () => Observable<void> {
  return () => walletConnectService.initialize({
    networkId: networks.eth,
    walletSelect: { wallets }
  }, supportedNetworks);
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AucConnectModule.forRoot()
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initWalletServiceFactory,
      deps: [ AucWalletConnectService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
</code>
</pre>

## WARNINGS
You might need to add `allowedCommonJsDependencies` to `angular.json` file:
<pre><code>
{
  ...,
  "projects": {
    ...,
    "YOUR_PROJECT_NAME": {
        ...,
      "architect": {
        "build": {
          ...,
          "options": {
            ...,
            "allowedCommonJsDependencies": [
              "@metamask/jazzicon",
              "web3",
              "tweetnacl",
              "ethereumjs-util",
              "ethereumjs-common",
              "rtcpeerconnection-shim",
              "gridplus-sdk",
              "buffer",
              "sturdy-websocket",
              "walletlink",
              "@walletconnect/web3-provider",
              "trezor-connect",
              "@ensdomains/ensjs",
              "eth-sig-util",
              "ethereumjs-tx",
              "eth-lattice-keyring",
              "@ethereumjs/tx",
              "@ethereumjs/common",
              "@shapeshiftoss/hdwallet-keepkey-webusb",
              "@shapeshiftoss/hdwallet-core",
              "@gnosis.pm/safe-apps-sdk",
              "@gnosis.pm/safe-apps-provider",
              "eth-provider",
              "@cvbb/eth-keyring",
              "authereum",
              "web3-provider-engine/subproviders/subscription",
              "web3-provider-engine/subproviders/nonce-tracker",
              "web3-provider-engine/subproviders/hooked-wallet",
              "web3-provider-engine/subproviders/fixture",
              "web3-provider-engine/subproviders/filters",
              "web3-provider-engine/subproviders/cache",
              "web3-provider-engine",
              "@walletconnect/qrcode-modal",
              "query-string",
              "@walletconnect/environment",
              "@walletconnect/socket-transport",
              "@walletconnect/window-metadata",
              "pump",
              "eth-rpc-errors",
              "@metamask/obs-store",
              "@ledgerhq/devices/lib/hid-framing",
              "@ensdomains/address-encoder",
              "@babel/runtime/helpers/slicedToArray"
            ]
          }
        }
      }
    }
  }
}
</code></pre>