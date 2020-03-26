import { Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';


export const appRoutes: Routes = [
    { path: 'recipe/:id', component: RecipeComponent}
];


