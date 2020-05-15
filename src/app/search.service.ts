import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler,HttpHeaders, HttpEvent, HttpInterceptor, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeListItem, Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
    recipe: any;
    title = 'recipeBox';
    apiUrl = 'https://localhost:44320/v1/';
    searchRoute = "search?term=";
    recipeRoute = "recipeById?recipeId=";
    constructor(private http: HttpClient){}

    headerDict = new HttpHeaders({
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT, OPTIONS',
        'Access-Control-Allow-Origin': "*",
        'Accept':'*/*',
        'Content-Type':  'application/xml',

      });
    
      options = {
        headers: this.headerDict,


      };

    public SearchRecipes(term):Observable<RecipeListItem[]> {
      console.log("searchservice searchterm: " + term) 
     
    return  this.http.get<RecipeListItem[]>(this.apiUrl+this.searchRoute+term);
      }

      public GetRecipe(id):Observable<Recipe> {
     
        return  this.http.get<Recipe>(this.apiUrl+this.recipeRoute+id);
          }
  

 
}