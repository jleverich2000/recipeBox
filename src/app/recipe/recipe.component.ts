import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from '../search.service';
import { Recipe, Direction } from '../recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [SearchService]

})
export class RecipeComponent implements OnInit {
  Recipe$: Recipe;

  constructor(    
    private searchService: SearchService,
    ) { }

  ngOnInit() {
    return this.searchService.GetRecipe(7).subscribe(data =>this.Recipe$ = data);  

  }

}
