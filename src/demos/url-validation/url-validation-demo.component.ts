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
  selector: 'sky-url-validation-demo',
  templateUrl: './url-validation-demo.component.html'
})
export class SkyUrlValidationDemoComponent implements OnInit {

  public reactiveForm: FormGroup;
  public urlValidator: string;

  constructor(
    private readonly formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.createReactiveForm();
  }

  private createReactiveForm(): void {
    this.reactiveForm = this.formBuilder.group({
      url: new FormControl('', SkyValidators.url)
    });
  }
}
