import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe: Recipe = new Recipe('', '');

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
    this.recipe.ingredients.push(new Ingredient(this.recepFormGroup.value.ingredientName, this.recepFormGroup.value.ingredientQuantity))
    this.recepFormGroup.setValue({
      ingredientName: '',
      ingredientQuantity: 0
    });
  }
}
