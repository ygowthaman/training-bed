import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe = new Recipe('', '');

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipeService.selectedRecipeEvent.subscribe((recipe) => {
      this.recipe = recipe;
    });
  }

  pushIngredient($event: Ingredient) {
    this.recipe.ingredients.push($event);
  }
}
