import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchForm;

  constructor(    
    private router : Router,
    private formBuilder: FormBuilder,

    ) { 
      this.searchForm = this.formBuilder.group({searchTerm: ''});

    }

  ngOnInit() {
  }

  onSubmit(searchTerm) {
    return this.router.navigate(['/search', searchTerm ]);
  }
}
