import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  AUC_DIALOG_POSITIONS,
  AucTransferModalComponent,
  AucTransferModalData,
  WRONG_NETWORK_APPEARANCE,
  AucWrongNetworkModalComponent,
  AucWrongNetworkModalData,
  AucDialogService
} from '@applicature/components';

import { DialogTestComponent } from './components/dialog-test/dialog-test.component';


@Component({
  selector: 'app-example-dialogs',
  templateUrl: './example-dialogs.component.html',
  styleUrls: [ './example-dialogs.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleDialogsComponent {

  constructor(private _dialogService: AucDialogService) {
  }

  public showCustomModal(): void {
    const ref = this._dialogService.open<DialogTestComponent, { message: string }, number>(
      DialogTestComponent,
      {
        data: {message: 'I am a dynamic component!'},
        width: '400px',
        height: '500px',
        minWidth: '320px',
        minHeight: '320px',
        maxWidth: '600px',
        maxHeight: '700px',
        position: AUC_DIALOG_POSITIONS.TOP_RIGHT,
        dialogClass: 'dialog-class-test',
        panel: {
          panelClass: 'panel-class-test'
        },
        overlay: {
          hasOverlay: true,
          closeByClick: true,
          overlayClass: [ 'test-overlay-class1', 'test-overlay-class2' ],
          transparent: true
        }
      });

    ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });

    ref.afterOpened.subscribe(result => {
      console.log('Dialog opened', result);
    });
  }

  public onOpenTransferModalClick(): void {
    const data: AucTransferModalData = {
      header: 'Transfer',
      symbol: 'USDT',
      allowance: '1000000000000000000',
      max: '10000000000000000000',
      approveButton: 'Approve',
      approvingButton: 'Approving...',
      confirmButton: 'Transfer',
      approve: () => {
        return Promise.resolve();
      },
      confirm: () => {
        return Promise.resolve();
      }
    };

    const ref = this._dialogService.open<AucTransferModalComponent, AucTransferModalData>(AucTransferModalComponent, {
      data,
      dialogClass: 'transfer-dialog',
    });

    ref.afterClosed.subscribe(result => {
      console.log('Transfer Dialog closed: ', result);
    });
  }

  public onOpenWrongNetworkModalClick(): void {
    const data: AucWrongNetworkModalData = {
      header: 'WRONG NETWORK',
      message: 'Looks like you connected to unsupported network. Change network to Mainnet.',
      chainId: '156',
      switchLabel: 'Swith label',
      appearance: WRONG_NETWORK_APPEARANCE.SWITCH
    };

    const ref = this._dialogService.open<AucWrongNetworkModalComponent, AucWrongNetworkModalData>(
      AucWrongNetworkModalComponent,
      {
        data,
        width: '100%',
        maxWidth: "420px",
        dialogClass: 'wrong-network-dialog',
      }
    );

    ref.afterClosed.subscribe(result => {
      console.log('Transfer Dialog closed: ', result);
    });
  }

}
