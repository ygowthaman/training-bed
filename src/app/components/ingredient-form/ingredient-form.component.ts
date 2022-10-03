import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/models/ingredient';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.scss']
})
export class IngredientFormComponent implements OnInit {

  @Output() ingredientEvent = new EventEmitter<Ingredient>();

  recepFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.recepFormGroup = formBuilder.group({
      ingredientName: ['', Validators.required],
      ingredientQuantity: ['0', Validators.min(1)]
    });
  }

  ngOnInit(): void {
  }

  addIngredient() {
    const newIngredient = new Ingredient(this.recepFormGroup.value.ingredientName, this.recepFormGroup.value.ingredientQuantity);
    this.ingredientEvent.emit(newIngredient);
    this.recepFormGroup.setValue({
      ingredientName: '',
      ingredientQuantity: 0
    });
  }

}
