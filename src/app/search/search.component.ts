import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from '../search.service';
import { RecipeListItem } from '../recipe.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  RecipeListItems$: RecipeListItem[];
  searchTerm;

  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private searchService: SearchService,
  ) {
  }

  ngOnInit() {
    this.searchTerm = this.route.snapshot.params['searchTerm'];

    this.search(this.searchTerm);
  }

  search(term: string ) {
    return this.searchService.SearchRecipes(term).subscribe(data =>this.RecipeListItems$ = data);  
  }
}
