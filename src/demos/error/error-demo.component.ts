import {
  Component
} from '@angular/core';

import {
  ErrorModalConfig,
  SkyErrorModalService
} from '@skyux/errors';

@Component({
  selector: 'sky-error-demo',
  templateUrl: './error-demo.component.html',
  styleUrls: ['./error-demo.component.scss'],
  providers: [SkyErrorModalService]
})
export class SkyErrorDemoComponent {
  constructor(
    private errorService: SkyErrorModalService
  ) { }

  public customAction() {
    alert('action clicked!');
  }

  public openErrorModal() {
    const config: ErrorModalConfig = {
      errorTitle: 'Something went wrong.',
      errorDescription: 'Close the modal, and come back later.',
      errorCloseText: 'Close'
    };

    this.errorService.open(config);
  }
}
