import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search.service';
import { SaveRecipeService } from './save-recipe.service';
import { RecipeComponent } from './recipe/recipe.component';
import { appRoutes } from './routes';
import { SaveRecipeComponent } from './save-recipe/save-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RecipeComponent,
    SaveRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],

  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
