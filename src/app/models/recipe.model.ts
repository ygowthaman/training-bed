import { Ingredient } from "./ingredient";

export class Recipe {
  name: string;
  description: string;
  ingredients: Ingredient[];
  steps: string[];

  constructor(name: string, desc: string) {
    this.name = name;
    this.description = desc;
    this.ingredients = [];
    this.steps = [];
  }
}