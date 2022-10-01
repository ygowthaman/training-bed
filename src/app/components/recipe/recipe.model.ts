export class Recipe {
  name: string;
  description: string;
  ingredients: string[];
  steps: string[];

  constructor(name: string, desc: string) {
    this.name = name;
    this.description = desc;
    this.ingredients = [];
    this.steps = [];
  }
}