import {
  Component,
  OnInit
} from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'sky-datepicker-demo',
  templateUrl: './datepicker-demo.component.html'
})
export class SkyDatepickerDemoComponent implements OnInit {

  public set enableDatepicker(value: boolean) {
    this.disabled = !value;

    if (value) {
      this.reactiveDate.enable();
    } else {
      this.reactiveDate.disable();
    }
  }

  public get enableDatepicker(): boolean {
    return !this.disabled;
  }

  public set enableMaxMinDates(value: boolean) {
    if (value) {
      this.maxDate = new Date('1/1/2029');
      this.minDate = new Date('1/1/2019');
    } else {
      this.maxDate = undefined;
      this.minDate = undefined;
    }
  }

  public get maxDateForDisplay(): string {
    return JSON.stringify(this.maxDate);
  }

  public get minDateForDisplay(): string {
    return JSON.stringify(this.minDate);
  }

  public get reactiveDate(): FormControl {
    return this.reactiveForm.get('selectedDate') as FormControl;
  }

  public disabled = false;

  public dateFormat = 'MM/DD/YYYY';

  public maxDate: Date;

  public minDate: Date;

  public reactiveForm: FormGroup;

  public selectedDate = '4/4/2017';

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      selectedDate: new FormControl('4/4/2017', Validators.required)
    });
  }

  public formatDateForDisplay(date: Date): string {
    return date.toLocaleDateString();
  }

  public resetDates(): void {
    this.selectedDate = undefined;
    this.reactiveDate.setValue(undefined);
  }
}
