import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from '../search.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  items;
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
    console.log("search componnent")
 
    this.items = this.searchService.SearchRecipes(searchTerm);


    console.warn('You searched for ', searchTerm);
  }

}

