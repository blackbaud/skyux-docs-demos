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

  constructor(
    private instance: SkyModalInstance,
    public context: SkySelectFieldDemoCustomPickerContext
  ) { }

  public ngOnInit() {
    this.title = `Select a ${this.context.pickerType}`;
  }

  public fruitIsSelected(fruitId: string) {
    return this.context.pickerContext.selectedValue &&
      this.context.pickerContext.selectedValue.find(
        (fruit: SkySelectField) => fruit.id === fruitId
      );
  }

  public toggleFruit(fruit: SkySelectField) {
    let selectedValues: SkySelectField[] = this.context.pickerContext.selectedValue;

    if (selectedValues) {
      const fruitIndex = selectedValues.indexOf(fruit);

      if (selectedValues.indexOf(fruit) >= 0) {
        selectedValues.splice(fruitIndex, 1);
      } else {
        selectedValues.push(fruit);
      }
    } else {
      this.context.pickerContext.selectedValue = [fruit];
    }
  }

  public selectColor(color: SkySelectField) {
    this.instance.save([color]);
  }

  public saveFruits() {
    this.instance.save(this.context.pickerContext.selectedValue);
  }

}
