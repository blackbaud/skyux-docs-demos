import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

import {
  SkyModalService,
  SkyModalCloseArgs
} from '@skyux/modals';

import {
  SkyProgressIndicatorChange,
  SkyProgressIndicatorMessageType
} from '@skyux/progress-indicator';

import {
  Subject
} from 'rxjs/Subject';

import 'rxjs/add/operator/take';

import {
  SkyWaterfallIndicatorDemoContext
} from './waterfall-indicator-demo-context';

import {
  SkyProgressIndicatorDemoFormComponent
} from './waterfall-indicator-demo-form.component';

@Component({
  selector: 'sky-waterfall-indicator-demo',
  templateUrl: './waterfall-indicator-demo.component.html',
  styleUrls: ['./waterfall-indicator-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkyWaterfallIndicatorDemoComponent {

  public activeIndex = 0;
  public progressMessageStream = new Subject<SkyProgressIndicatorMessageType>();

  constructor(
    private modal: SkyModalService,
    private changeDetector: ChangeDetectorRef
  ) { }

  public configureConnection(isProgress: boolean): void {
    this.openModalForm(
      {
        title: 'Configure connection',
        buttonText: 'Submit connection settings'
      },
      isProgress
    );
  }

  public setServer(isProgress: boolean): void {
    this.openModalForm(
      {
        title: 'Select remote server',
        buttonText: 'Submit server choice'
      },
      isProgress
    );
  }

  public testConnection(isProgress: boolean): void {
    this.openModalForm(
      {
        title: 'Connection confirmed.',
        buttonText: 'OK'
      },
      isProgress
    );
  }

  public alertMessage(message: string): void {
    alert(message);
  }

  public updateIndex(changes: SkyProgressIndicatorChange): void {
    this.activeIndex = changes.activeIndex;
    this.changeDetector.detectChanges();
  }

  public resetClicked(): void {
    this.progressMessageStream.next(SkyProgressIndicatorMessageType.Reset);
  }

  private progress(): void {
    this.progressMessageStream.next(SkyProgressIndicatorMessageType.Progress);
  }

  private openModalForm(context: SkyWaterfallIndicatorDemoContext, isProgress: boolean): void {
    let modalForm = this.modal.open(SkyProgressIndicatorDemoFormComponent, [{
      provide: SkyWaterfallIndicatorDemoContext,
      useValue: context
    }]);
    modalForm.closed.take(1).subscribe((args: SkyModalCloseArgs) => {
      if (args.reason === 'save' && isProgress) {
        this.progress();
      }
    });
  }
}
