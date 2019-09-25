import {
  Component,
  OnInit
} from '@angular/core';

import {
  SkyModalInstance
} from '@skyux/modals';

import {
  SkySelectField
} from '@skyux/select-field/modules/select-field/types';

import {
  SkySelectFieldDemoCustomPickerContext
} from './select-field-demo-custom-picker-context';

@Component({
  selector: 'app-select-field-demo-custom-picker',
  templateUrl: './select-field-demo-custom-picker.component.html',
  styleUrls: ['./select-field-demo-custom-picker.component.scss']
})
export class SkySelectFieldDemoCustomPickerComponent implements OnInit {

  public title: string;

  public fruitMap = {
    '1': '🍎',
    '2': '🍌',
    '3': '🍈',
    '4': '🍇',
    '5': '🍋',
    '6': '🍓'
  };

  private fruitValues: SkySelectField[];

  constructor(
    private instance: SkyModalInstance,
    public context: SkySelectFieldDemoCustomPickerContext
  ) {
    if (context.pickerType === 'fruit') {
      this.fruitValues = context.pickerContext.selectedValue &&
        context.pickerContext.selectedValue.slice();
    }
  }

  public ngOnInit(): void {
    this.title = `Select a ${this.context.pickerType}`;
  }

  public fruitIsSelected(fruitId: string): boolean {
    return !!(this.fruitValues &&
      this.fruitValues.find(
        (fruit: SkySelectField) => fruit.id === fruitId
      ));
  }

  public toggleFruit(fruit: SkySelectField): void {
    if (this.fruitValues) {
      const fruitIndex = this.fruitValues.indexOf(fruit);

      if (this.fruitValues.indexOf(fruit) >= 0) {
        this.fruitValues.splice(fruitIndex, 1);
      } else {
        this.fruitValues.push(fruit);
      }
    } else {
      this.fruitValues = [fruit];
    }
  }

  public selectColor(color: SkySelectField): void {
    this.instance.save([color]);
  }

  public saveFruits(): void {
    this.instance.save(this.fruitValues);
  }

}
