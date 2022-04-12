import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER_LINKS } from './enums';

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTER_LINKS.CONNECT_WALLET,
    pathMatch: 'full'
  },
  {
    path: ROUTER_LINKS.CONNECT_WALLET,
    loadChildren: () => import('./pages/connect-wallet/connect-wallet.module').then(m => m.ConnectWalletModule)
  },
  {
    path: ROUTER_LINKS.BUTTON,
    loadChildren: () => import('./pages/button/button.module').then(m => m.ButtonModule)
  },
  {
    path: ROUTER_LINKS.ACCOUNT_BALANCE,
    loadChildren: () => import('./pages/account-balance/account-balance.module').then(m => m.AccountBalanceModule)
  },
  {
    path: '**',
    redirectTo: ROUTER_LINKS.CONNECT_WALLET,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
