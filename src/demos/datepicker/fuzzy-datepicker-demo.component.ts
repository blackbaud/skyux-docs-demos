import {
  Component,
  OnInit
} from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import {
  SkyFuzzyDate
} from '@skyux/datetime/modules/datepicker/fuzzy-date';

@Component({
  selector: 'sky-fuzzy-datepicker-demo',
  templateUrl: './fuzzy-datepicker-demo.component.html'
})
export class SkyFuzzyDatepickerDemoComponent implements OnInit {

  public set allowFutureDates(value: boolean) {
    this.futureDisabled = !value;
  }

  public get allowFutureDates(): boolean {
    return !this.futureDisabled;
  }

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
      this.maxDate = { day: 1, month: 1, year: 2029 };
      this.minDate = { day: 1, month: 1, year: 2019 };
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

  public get reactiveDate(): AbstractControl {
    return this.reactiveForm.get('selectedDate');
  }

  public get reactiveFormSelectedDateForDisplay(): string {
    return JSON.stringify(this.reactiveDate.value);
  }

  public get selectedDateForDisplay(): string {
    return JSON.stringify(this.selectedDate);
  }

  public disabled = false;

  public dateFormat = 'MM/DD/YYYY';

  public futureDisabled: boolean;

  public maxDate: any;

  public minDate: any;

  public reactiveForm: FormGroup;

  public selectedDate: SkyFuzzyDate = {
    month: 4,
    day: 4,
    year: 2017
  };

  public yearRequired: boolean;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      selectedDate: new FormControl({ month: 4, day: 4, year: 2017 }, Validators.required)
    });
  }

  public formatFuzzyDateForDisplay(date: SkyFuzzyDate): string {
    const returnValue = date.day + '/' + date.month + '/' + date.year;
    return returnValue;
  }

  public onResetDatesClick(): void {
    this.selectedDate = undefined;
    this.reactiveDate.setValue(undefined);
  }
}
