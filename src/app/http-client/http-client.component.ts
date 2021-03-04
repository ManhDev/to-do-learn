import { SearchService } from './search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {
  searchValue: string = '';
  results = [];
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  doSearch() {
    this.searchService.getInfo(this.searchValue).then(info => {
     this.results = info[1]
      
    })
  }

}
