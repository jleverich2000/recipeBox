import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from '../search.service';
import { FormBuilder } from '@angular/forms';
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
  // searchForm;
  searchTerm;


  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private searchService: SearchService,
    // private formBuilder: FormBuilder,
  ) {
    // this.searchForm = this.formBuilder.group({searchTerm: ''});
    // this.route.queryParams.subscribe(params => {this.searchTerm= params['searchTerm']});

    
  }

  ngOnInit() {
    this.searchTerm = this.route.snapshot.params['searchTerm'];

    console.log('SearchComponent searchTerm: '+ this.searchTerm);
    this.search(this.searchTerm);
    //return this.searchService.SearchRecipes(this.searchTerm).subscribe(data =>this.RecipeListItems$ = data);
  }
  

  // onSubmit(searchTerm:string) {
  //   return  this.searchService.SearchRecipes(searchTerm).subscribe(data =>this.RecipeListItems$ = data);  
    // this.search(searchTerm);

    //  this.router.navigate(['/search-results',  { query: data =>this.RecipeListItems$ = data } ]);
    //  console.log("should be set:"+ this.RecipeListItems$);

    //  return
  // }

  search(term: string ) {
    return this.searchService.SearchRecipes(term).subscribe(data =>this.RecipeListItems$ = data);  
  }
}
