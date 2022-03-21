import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AucProgressBarModule } from '../progress-bar';
import { AucRippleModule } from '../ripple';
import { AucSpinnerModule } from '../spinner';
import { AucButtonModule } from '../button';
import { InputModule } from '../../input/input.module';
import { PipesModule } from '../../pipes';
import { AucAccountModalComponent } from './account-modal';
import { AucTransactionsHistoryModalComponent } from './transactions-history-modal';
import { AucTransferModalComponent } from './transfer-modal';
import { AucWrongNetworkModalComponent } from './wrong-network-modal';
import { AucIconModule } from '../icon';

const components = [
  AucAccountModalComponent,
  AucTransactionsHistoryModalComponent,
  AucTransferModalComponent,
  AucWrongNetworkModalComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PipesModule,
    AucButtonModule,
    InputModule,
    AucRippleModule,
    AucSpinnerModule,
    AucProgressBarModule,
    ClipboardModule,
    AucIconModule
  ]
})
export class ModalsModule {
}
