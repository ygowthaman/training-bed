import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeLandingComponent } from './components/recipe/recipe-landing.component';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { RecipeListComponent } from './components/recipe/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './components/recipe/recipe-details/recipe-details.component';
import { ShoppingListLandingComponent } from './components/shopping-list/shopping-list-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeLandingComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    ShoppingListLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
