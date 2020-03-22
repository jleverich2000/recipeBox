import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from '../search.service';
import { FormBuilder } from '@angular/forms';
import { RecipeListItem } from '../recipe.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  RecipeListItems$: RecipeListItem[];
  searchForm;

  constructor(
    private searchService: SearchService,
    private formBuilder: FormBuilder,
  ) {
    this.searchForm = this.formBuilder.group({
      searchTerm: ''
    
    });
  }

  ngOnInit() {

  }
  

  onSubmit(searchTerm) {

    return this.searchService.SearchRecipes(searchTerm).subscribe(data =>this.RecipeListItems$ = data);  
  }

}
