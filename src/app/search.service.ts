import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler,HttpHeaders, HttpEvent, HttpInterceptor, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SearchService {
    recipe;
    title = 'recipeBox';

    constructor(private http: HttpClient){
  
    }

    headerDict = new HttpHeaders({
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT, OPTIONS',
        'Access-Control-Allow-Origin': "*",
        'Accept':'*/*'
      });
    
      options = {
        headers: this.headerDict,
      };

    public SearchRecipes(word): string {
      console.log("searchservice!!!!")
        let newparams = new HttpParams();
        let params = new HttpParams();
        params = params.append('name', word);

        this.recipe = this.http.get('https://localhost:44320/v1/GetRecipe/', 
        {headers: this.headerDict, params: params}).subscribe((res) => {
          let resJSON = JSON.parse(JSON.stringify(res));
          this.recipe = JSON.parse(JSON.stringify(res));
        })
        console.log(this.recipe)
         return this.recipe
      }
  

 
}