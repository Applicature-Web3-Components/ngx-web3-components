export const BasicAvatarCodeTs =
  `/** Don't forget import { AucAvatarModule } from '@applicature/ngx-web3-synergy'; to your module */

import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'doc-basic-avatar',
  templateUrl: './basic-avatar.component.html',
  styleUrls: ['./basic-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicAvatarComponent {

}
`;
