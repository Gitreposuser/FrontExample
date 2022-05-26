import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent{

  searchText: string = 'search';

  constructor() { }

  onSearch(): void{
    console.log('input changed!');
  }
}