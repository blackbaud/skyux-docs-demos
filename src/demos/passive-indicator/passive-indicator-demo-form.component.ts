import {
  Component
} from '@angular/core';

import {
  SkyModalInstance
} from '@skyux/modals';

import {
  SkyPassiveIndicatorDemoContext
} from './passive-indicator-demo-context';

@Component({
  selector: 'sky-demo-passive-indicator-horizontal',
  templateUrl: './passive-indicator-demo-form.component.html'
})
export class SkyPassiveIndicatorDemoFormComponent {
  constructor(
    public instance: SkyModalInstance,
    public context: SkyPassiveIndicatorDemoContext
  ) { }

  public submit(): void {
    this.instance.close(undefined, 'save');
  }
}
