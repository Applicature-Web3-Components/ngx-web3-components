export const BasicAccountButtonCodeHtml = `<div class="doc-grid-container">
  <div class="doc-grid-item">
    <h5 class="doc-grid-item-title">Default</h5>

    <auc-account-button></auc-account-button>
  </div>

  <div class="doc-grid-item">
    <h5 class="doc-grid-item-title">Customized</h5>

    <auc-account-button [account]="{ name: 'Account Name', image: 'assets/img/ex-avatar.png'}"
                        [options]="accountOptions"
                        [accountDropdownConfig]="accountDropdownConfig"
                        [size]="50"
                        (optionClick)="onOptionClick($event)"
    >
    </auc-account-button>
  </div>
</div>
`;
