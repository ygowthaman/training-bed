import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe: Recipe = new Recipe('', '');
  ingredientName = new FormControl('');
  ingredientQuantity = new FormControl('0');

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient() {

  }
}
