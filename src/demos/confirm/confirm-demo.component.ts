import {
  Component
} from '@angular/core';

import {
  SkyConfirmButtonAction,
  SkyConfirmInstance,
  SkyConfirmService,
  SkyConfirmType
} from '@skyux/modals';

@Component({
  selector: 'sky-confirm-demo',
  templateUrl: './confirm-demo.component.html'
})
export class SkyConfirmDemoComponent {

  public selectedAction: SkyConfirmButtonAction;

  public selectedText: string;

  constructor(
    private confirmService: SkyConfirmService
  ) { }

  public openOKConfirm() {
    const dialog: SkyConfirmInstance = this.confirmService.open({
      message: 'Do you wish to continue?',
      type: SkyConfirmType.OK
    });

    dialog.closed.subscribe((result: any) => {
      this.selectedText = undefined;
      this.selectedAction = result.action;
    });
  }

  public openYesCancelConfirm() {
    const dialog: SkyConfirmInstance = this.confirmService.open({
      message: 'Do you wish to continue?',
      type: SkyConfirmType.YesCancel
    });

    dialog.closed.subscribe((result: any) => {
      this.selectedText = undefined;
      this.selectedAction = result.action;
    });
  }

  public openYesCancelConfirmWithBody() {
    const dialog: SkyConfirmInstance = this.confirmService.open({
      message: 'Do you wish to continue?',
      body: 'This could be dangerous!',
      type: SkyConfirmType.YesCancel
    });

    dialog.closed.subscribe((result: any) => {
      this.selectedText = undefined;
      this.selectedAction = result.action;
    });
  }

  public openYesNoCancelConfirm() {
    const dialog: SkyConfirmInstance = this.confirmService.open({
      message: 'Do you wish to continue?',
      type: SkyConfirmType.YesNoCancel
    });

    dialog.closed.subscribe((result: any) => {
      this.selectedText = undefined;
      this.selectedAction = result.action;
    });
  }

  public openCustomConfirm() {
    const buttons = [
      { text: '1', action: 'foo', styleType: 'primary' },
      { text: '2', action: 'bar' },
      { text: '3', action: 'baz', autofocus: true }
    ];

    const dialog: SkyConfirmInstance = this.confirmService.open({
      message: 'What option are you going to select?',
      type: SkyConfirmType.Custom,
      buttons
    });

    dialog.closed.subscribe((result: any) => {
      this.selectedAction = result.action;

      buttons.some((button: any) => {
        if (button.action === result.action) {
          this.selectedText = button.text;
          return true;
        }
      });
    });
  }
}
