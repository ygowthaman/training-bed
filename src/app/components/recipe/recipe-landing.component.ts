import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
    selector: 'app-recipe-landing',
    templateUrl: './recipe-landing.component.html',
    styleUrls: ['./recipe-landing.component.scss']
})
export class RecipeLandingComponent {

    recipe: Recipe = new Recipe('', '');

    setRecipe($event: Recipe) {
        this.recipe = $event
    }

}