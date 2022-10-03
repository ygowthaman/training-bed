import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../models/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  selectedRecipeEvent = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Cake', 'Sweet spongy and moist'),
    new Recipe('Pie', 'Salty outside, sweet and gooey inside'),
    new Recipe('Butter Cookie', 'Crispt, sweet, and salty'),
    new Recipe('Muffin', 'Cakish in a cup'),
    new Recipe('Frosting', 'Top of everything, so very sweet')
  ]

  getRecipes() {
    return this.recipes;
  }
  
}