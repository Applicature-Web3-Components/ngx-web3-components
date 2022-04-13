export const CustomConnectWalletCodeTs = `/** Notes: You can to use AucWalletConnectService for custom connection visualization */

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';

import {
  AUC_CHAIN_ID,
  AucBlockExplorerUrls,
  AucConnectionState,
  AucNativeCurrencies,
  AucWalletConnectService,
  BaseSubscriber
} from '@applicature/components';
import Web3 from 'web3';
import { API } from 'bnc-onboard/dist/src/interfaces';

import {
  AucConnectInfo,
  AucNetworkOption,
  AucProviderMessage,
  AucProviderRpcError
} from '../../../../../../../applicature/components/src/lib/interfaces';


@Component({
  selector: 'doc-custom-connect-wallet',
  templateUrl: './custom-connect-wallet.component.html',
  styleUrls: [ './custom-connect-wallet.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomConnectWalletComponent extends BaseSubscriber implements OnInit {
  public web3: Web3; // Current Web3 instance.
  public onboardConnection: API; // This library uses package bnc-onboard for wallet connect.
  public connectionState: AucConnectionState; // Current wallet connection state.
  public supportedNetworks: AucNetworkOption[]; // Supported networks which you set in app.module.ts

  get isConnected(): boolean {
    return this.walletConnectService.connectionState.connected;
  }

  constructor(private cdr: ChangeDetectorRef, private walletConnectService: AucWalletConnectService) {
    super();
  }

  ngOnInit() {
    /** You can get current web3 instance */
    this.web3 = this.walletConnectService.web3;

    console.log('Current Web3 instance: ', this.web3);

    /** You can set supported networks for your application */
    this.walletConnectService.supportedNetworks = [
      ...this.walletConnectService.supportedNetworks,
      {
        icon: 'assets/svg/network/eth.svg',
        name: 'Kovan',
        chainId: AUC_CHAIN_ID.KOVAN_TESTNET,
        symbol: AucNativeCurrencies[AUC_CHAIN_ID.KOVAN_TESTNET].name,
        blockExplorerUrl: AucBlockExplorerUrls[AUC_CHAIN_ID.KOVAN_TESTNET][0],
        isActive: false
      }
    ];

    /** You can get supported networks for your application */
    this.supportedNetworks = this.walletConnectService.supportedNetworks
    console.log('supportedNetworks: ', this.supportedNetworks);

    /** Emits when account was changed. */
    this.walletConnectService.accountsChanged$
      .pipe(takeUntil(this.notifier))
      .subscribe((accounts: string[]) => {
        console.log('Current accounts: ', accounts);

        this.cdr.markForCheck();
      });

    /** Emits when chain was changed */
    this.walletConnectService.chainChanged$
      .pipe(takeUntil(this.notifier))
      .subscribe((chainId: string) => {
        console.log('Current chainId: ', chainId);

        this.cdr.markForCheck();
      });

    /** Emits when network was changed */
    this.walletConnectService.networkChanged$
      .pipe(takeUntil(this.notifier))
      .subscribe((networkId: number) => {
        console.log('Current network id: ', networkId);

        this.cdr.markForCheck();
      });

    /** Emits when balance was changed */
    this.walletConnectService.balanceChanged$
      .pipe(takeUntil(this.notifier))
      .subscribe((balance: string) => {
        console.log('Current balance: ', balance);

        this.cdr.markForCheck();
      });

    /** Emits when selected network.  */
    this.walletConnectService.selectedNetwork$
      .pipe(takeUntil(this.notifier))
      .subscribe((selectedNetwork: AucNetworkOption) => {
        console.log('Selected Network: ', selectedNetwork);

        this.cdr.markForCheck();
      });

    /** Emits when connect event. Emits from Metamask connect event. <br> */
    this.walletConnectService.connectChanged$
      .pipe(takeUntil(this.notifier))
      .subscribe((res: AucConnectInfo) => {
        console.log('connectChanged$: ', res);

        this.cdr.markForCheck();
      });

    /** Emits from Metamask disconnect event. <br> */
    this.walletConnectService.disconnectChanged$
      .pipe(takeUntil(this.notifier))
      .subscribe((res: AucProviderRpcError) => {
        console.log('disconnectChanged$: ', res);

        this.cdr.markForCheck();
      });

    /** Emits from Metamask message event. <br> */
    this.walletConnectService.messageChanged$
      .pipe(takeUntil(this.notifier))
      .subscribe((res: AucProviderMessage) => {
        console.log('messageChanged$: ', res);

        this.cdr.markForCheck();
      });
  }

  toggleConnect(): void {
    if (this.walletConnectService.connectionState.connected) {
      this.walletConnectService.disconnectWallet()
        .pipe(takeUntil(this.notifier))
        .subscribe(() => {
          this.getConnectionInfo();

          console.log('Custom disconnected Wallet');
        });

      return;
    }

    this.walletConnectService.connectWallet()
      .pipe(takeUntil(this.notifier))
      .subscribe((connectionState: AucConnectionState) => {
        this.getConnectionInfo();

        console.log('Custom connect connectionState: ', connectionState);
      })
  }

  private getConnectionInfo(): void {
    /** You can get current Onboard instance */
    this.onboardConnection = this.walletConnectService.onboard;

    /** You can get current connection state */
    this.connectionState = this.walletConnectService.connectionState;

    console.log('onboardConnection: ', this.onboardConnection);
    console.log('connectionState: ', this.connectionState);
  }

}
`;
