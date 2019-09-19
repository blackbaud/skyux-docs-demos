import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';

import {
  BehaviorSubject
} from 'rxjs/BehaviorSubject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/take';

import {
  SkyModalCloseArgs,
  SkyModalService
} from '@skyux/modals';

import {
  SkySelectFieldPickerContext
} from '@skyux/select-field';

import {
  SkySelectField,
  SkySelectFieldCustomPicker
} from '@skyux/select-field/modules/select-field/types';

import {
  SkySelectFieldDemoCustomPickerComponent
} from './select-field-demo-custom-picker.component';

import {
  SkySelectFieldDemoCustomPickerContext
} from './select-field-demo-custom-picker-context';

@Component({
  selector: 'sky-select-field-demo',
  templateUrl: 'select-field-demo.component.html',
  styleUrls: ['./select-field-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkySelectFieldDemoComponent implements OnInit {
  public reactiveForm: FormGroup;

  public colors = [
    { id: '1', label: 'Red' },
    { id: '2', label: 'Green' },
    { id: '3', label: 'Violet' }
  ];

  public fruits = [
    { id: '1', category: 'Pome', label: 'Apple', description: 'Anne eats apples' },
    { id: '2', category: 'Berry', label: 'Banana', description: 'Ben eats bananas' },
    { id: '3', category: 'Pome', label: 'Pear', description: 'Patty eats pears' },
    { id: '4', category: 'Berry', label: 'Grape', description: 'George eats grapes' },
    { id: '5', category: 'Citrus', label: 'Lemon', description: 'Larry eats lemons' },
    { id: '6', category: 'Aggregate fruit', label: 'Strawberry', description: 'Sally eats strawberries' }
  ];

  public fruitStream = new BehaviorSubject<any>([]);
  public colorStream = new BehaviorSubject<any>([]);

  public templateDrivenModel: any = {
    favoriteColor: this.colors[0],
    favoriteFruits: [this.fruits[0]]
  };

  public customFavoriteColorPicker: SkySelectFieldCustomPicker = {
    open: (pickerContext, setValue) => {
      this.showCustomPicker('color', pickerContext, setValue);
    }
  };

  public customFavoriteFruitPicker: SkySelectFieldCustomPicker = {
    open: (pickerContext, setValue) => {
      this.showCustomPicker('fruit', pickerContext, setValue);
    }
  };

  constructor(
    private formBuilder: FormBuilder,
    private modal: SkyModalService
  ) { }

  public ngOnInit(): void {
    this.createForm();
    this.populateData();
  }

  public submitReactiveForm(): void {
    alert('Form submitted with: \n' + JSON.stringify(this.reactiveForm.value));
  }

  public submitTemplateForm(formData: any): void {
    alert('Form submitted with: \n' + JSON.stringify(formData));
  }

  private createForm(): void {
    this.reactiveForm = this.formBuilder.group({
      favoriteColor: new FormControl(this.colors[0]),
      favoriteFruits: new FormControl([this.fruits[0]])
    });
  }

  private populateData() {
    this.fruitStream.next(this.fruits);
    this.colorStream.next(this.colors);
  }

  private showCustomPicker(
    pickerType: 'color' | 'fruit',
    pickerContext: SkySelectFieldPickerContext,
    setValue: (value: SkySelectField[]) => void
  ) {
    const picker = this.modal.open(
      SkySelectFieldDemoCustomPickerComponent,
      [
        {
          provide: SkySelectFieldDemoCustomPickerContext,
          useValue: {
            pickerContext,
            pickerType
          }
        }
      ]
    );

    picker.closed.subscribe((args: SkyModalCloseArgs) => {
      if (args.reason === 'save') {
        setValue(args.data);
      }
    });
  }
}
