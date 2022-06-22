export const ConnectWalletAsIconCodeHtml =
`<div class="doc-grid-container">
  <div class="doc-grid-item">
    <h5 class="doc-grid-item-title">Default</h5>

    <auc-connect-wallet [appearance]="WALLET_APPEARANCE.ICON"
                        (connected)="connected($event)"
                        (disconnected)="disconnected()"
    >
    </auc-connect-wallet>
  </div>

  <div class="doc-grid-item">
    <h5 class="doc-grid-item-title">With Balance</h5>

    <auc-connect-wallet [appearance]="WALLET_APPEARANCE.ICON"
                        [showBalance]="true"
                        (connected)="connected($event)"
                        (disconnected)="disconnected()"
    >
    </auc-connect-wallet>
  </div>

  <div class="doc-grid-item">
    <h5 class="doc-grid-item-title">With transactions</h5>

    <auc-connect-wallet [appearance]="WALLET_APPEARANCE.ICON"
                        [showTransactions]="true"
                        (connected)="connected($event)"
                        (disconnected)="disconnected()"
    >
    </auc-connect-wallet>
  </div>

  <div class="doc-grid-item">
    <h5 class="doc-grid-item-title">With Menu Options</h5>

    <auc-connect-wallet [appearance]="WALLET_APPEARANCE.ICON"
                        [accountOptions]="accountOptions"
                        (connected)="connected($event)"
                        (disconnected)="disconnected()"
                        (optionClicked)="optionClicked($event)"
    >
    </auc-connect-wallet>
  </div>

  <div class="doc-grid-item">
    <h5 class="doc-grid-item-title">Customize dropdown</h5>

    <auc-connect-wallet [appearance]="WALLET_APPEARANCE.ICON"
                        [account]="{ name: 'Account Name', image: 'assets/img/ex-avatar.png'}"
                        [accountDropdownConfig]="accountDropdownConfig"
                        (connected)="connected($event)"
                        (disconnected)="disconnected()"
    >
    </auc-connect-wallet>
  </div>
</div>
`;
