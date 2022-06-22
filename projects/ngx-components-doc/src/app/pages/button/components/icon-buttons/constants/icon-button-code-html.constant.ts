export const IconButtonCodeHtml =
`<div class="doc-grid-container">
  <div class="doc-grid-item">
    <h5 class="doc-grid-item-title">Default color</h5>

    <auc-button [appearance]="BUTTON_APPEARANCE.ICON"
                [leftIcon]="WLC_ICON.STAR"
                (buttonClicked)="onClick($event)"
    >
    </auc-button>
  </div>

  <div class="doc-grid-item">
    <h5 class="doc-grid-item-title">Colored</h5>

    <auc-button appearance="icon"
                leftIcon="wcl-icon-recent"
                color="white"
                (buttonClicked)="onClick($event)"
    >
    </auc-button>
  </div>

  <div class="doc-grid-item">
    <h5 class="doc-grid-item-title">Transparent</h5>

    <auc-button [appearance]="BUTTON_APPEARANCE.ICON"
                [leftIcon]="WLC_ICON.WALLET"
                [transparent]="true"
                (buttonClicked)="onClick($event)"
    >
    </auc-button>
  </div>

  <div class="doc-grid-item">
    <h5 class="doc-grid-item-title">Custom icon</h5>

    <auc-button [appearance]="BUTTON_APPEARANCE.ICON"
                leftIcon="assets/img/icons/eth.svg"
                [transparent]="true"
                (buttonClicked)="onClick($event)"
    >
    </auc-button>
  </div>
</div>
`;
