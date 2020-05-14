import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler,HttpHeaders, HttpErrorResponse, HttpEvent, HttpInterceptor, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { RecipeListItem, Recipe } from './recipe.model';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SaveRecipeService {
    recipe: any;
    title = 'recipeBox';
    apiUrl = 'https://localhost:44320/v1/';
    saveRecipeRoute ="save_recipe/";

    constructor(private http: HttpClient){}

    httpOptions = new HttpHeaders({
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT, OPTIONS',
        'Access-Control-Allow-Origin': "*",
        'Accept':'*/*',
        'Content-Type':  'application/xml',

      });
    
      options = {
        headers: this.httpOptions,


      };

    public SaveRecipes(saveRecipeForm:Recipe) {
     console.log ("hello from recipe service");
     console.log (saveRecipeForm);

    return  this.http.post(this.apiUrl+this.saveRecipeRoute, saveRecipeForm).subscribe( response => {console.log(response);});
      }
      
}