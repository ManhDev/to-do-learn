import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private inforUrl = 'https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&limit=10&format=json&search=';

  constructor(private http: HttpClient) { }

  getInfo(searchValue) {
    return this.http.get(this.inforUrl + searchValue).toPromise()
  }
}
