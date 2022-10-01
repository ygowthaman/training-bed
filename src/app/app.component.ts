import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'training-bed';
  showRecipe: boolean = true;

  goto(path: string) {
    if (path === 'recipe') {
      this.showRecipe = true;
    } else {
      this.showRecipe = false;
    }
  }
}
