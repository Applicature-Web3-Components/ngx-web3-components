/** Dont forget import { AucPipesModule } from '@applicature/components'; to your module */

import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'doc-basic-short-address',
  templateUrl: './basic-short-address.component.html',
  styleUrls: [ './basic-short-address.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicShortAddressComponent {
  public address = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
}
