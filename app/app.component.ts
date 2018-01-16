import { Component } from '@angular/core';
//annotation
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <li *ngFor="let currentRecipes of recipes"> {{currentRecipe.title}} </li>
    </ul>
  </div>
  `
})
//class declaration
export class AppComponent {
  currentFocus: string = 'Recipes';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  //'this' is necessary b/c In Angular, when a variable in a component's class declaration references another variable in the class, it must be prefaced with the this keyword.
  tasks: Recipe[] = [
    new Recipe('Grilled Cheese', 'bacon, bread, cheese', 'Fry the bacon, then set the bacon aside - DO NOT WIPE FRYPAN/GRIDDLE.  Add the bread and toast both sides - then add cheese to each toast, then bacon inside before putting together this delicious sammich.'),
    new Recipe('Pancake', 'flour, water, egg', 'Mix flour and egg and water together then fry.')
  ];
}
//below is our Task model
export class Recipe {

  // public done: boolean = false;
  constructor(public title: string, public ingredients: string, public directions: string) { }
}
//because we've exported Task class, Task is now a valid data type for variables.
