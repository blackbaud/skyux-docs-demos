import {
  Component
} from '@angular/core';

import {
  SkyModalInstance
} from '@skyux/modals';

import {
  SkyWaterfallIndicatorDemoContext
} from './waterfall-indicator-demo-context';

@Component({
  selector: 'sky-demo-waterfall-indicator-horizontal',
  templateUrl: './waterfall-indicator-demo-form.component.html'
})
export class SkyProgressIndicatorDemoFormComponent {
  constructor(
    public instance: SkyModalInstance,
    public context: SkyWaterfallIndicatorDemoContext
  ) { }

  public submit(): void {
    this.instance.close(undefined, 'save');
  }
}
