import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipe = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe('Cake', 'Sweet spongy and moist'),
    new Recipe('Pie', 'Salty outside, sweet and gooey inside'),
    new Recipe('Butter Cookie', 'Crispt, sweet, and salty'),
    new Recipe('Muffin', 'Cakish in a cup'),
    new Recipe('Frosting', 'Top of everything, so very sweet')
  ];

  constructor() { }

  ngOnInit(): void {
  }


  gotoRecipe(recipe: Recipe) {
    this.recipe.emit(recipe);
  }

}
