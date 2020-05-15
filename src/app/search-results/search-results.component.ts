import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from '../search.service';
import { FormBuilder } from '@angular/forms';
import { RecipeListItem } from '../recipe.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  RecipeListItems$: RecipeListItem[];
  searchResults: string[];

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    ) {
     
     }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.RecipeListItems$ = params['query'];
  });
    console.log("RecipeListItems: "+ this.RecipeListItems$);
  }




}
