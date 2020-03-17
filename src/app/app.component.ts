import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchComponent]
})
export class AppComponent {
  title = 'Recipe-Box';
  recipe;

  constructor(
    private searchComponent: SearchComponent
  ) { }

  ngOnInit() {
    
}
}
