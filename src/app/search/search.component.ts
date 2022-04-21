import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  searchText: string = 'search';

  constructor() { }

  ngOnInit(): void{
  }

  onSearch(): void{
    console.log('input changed!');
  }
}
