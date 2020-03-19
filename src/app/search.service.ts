import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler,HttpHeaders, HttpEvent, HttpInterceptor, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeListItem } from './recipe.model';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
    recipe: any;
    title = 'recipeBox';
    apiUrl = 'https://localhost:44320/v1/search?term=foo';
    constructor(private _http: HttpClient){
  
    }

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

    public SearchRecipes(word) {
      // console.log("searchservice!!!!")
      console.log("******************");
    return this._http.get<RecipeListItem[]>(this.apiUrl);
      }
  

 
}