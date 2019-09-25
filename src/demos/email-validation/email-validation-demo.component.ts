import {
  Component,
  OnInit
} from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';

import {
  SkyValidators
} from '@skyux/validation';

@Component({
  selector: 'sky-email-validation-demo',
  templateUrl: './email-validation-demo.component.html'
})
export class SkyEmailValidationDemoComponent implements OnInit {

  public reactiveForm: FormGroup;
  public templateDrivenModel: string;

  constructor(
    private readonly formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.createReactiveForm();
  }

  private createReactiveForm(): void {
    this.reactiveForm = this.formBuilder.group({
      email: new FormControl('', SkyValidators.email)
    });
  }
}
