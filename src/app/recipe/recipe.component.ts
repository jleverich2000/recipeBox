import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from '../search.service';
import { Recipe, Direction } from '../recipe.model';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [SearchService]

})
export class RecipeComponent implements OnInit {
  Recipe$: Recipe;
  recipeId
  constructor( 
    private _Activatedroute:ActivatedRoute,   
    private searchService: SearchService,
    ) { }

  ngOnInit() {

    this._Activatedroute.paramMap.subscribe(params => { 
      this.recipeId = params.get('id'); 
  });
    return this.searchService.GetRecipe(this.recipeId).subscribe(data =>this.Recipe$ = data);  

  }

}
