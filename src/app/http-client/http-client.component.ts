import { FormControl } from '@angular/forms';
import { SearchService } from './search.service';
import { Component, OnInit } from '@angular/core';
import {debounceTime, filter} from 'rxjs/operators';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {
  searchValue= new FormControl();
  results = [];
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    // this.searchValue.valueChanges.pipe(
    //   filter((valuaInput)=>valuaInput!==''),
    //   debounceTime(500)
    // )
    // .subscribe((value)=>{
    //   this.searchService.getInfo(value).then((info)=>{
    //     this.results = info[1]
    //   })
    // })
    // pipe Là tạo đường dẫn stream: chứa các tiền xử lý
    // các filter, debounceTime là tiền xử lý là lọc và delay 500ms
    // subscribe là khi xong tất cả mọi thứ ở trong pipe(luồng) và đã được tiền xử lý


    let observable = this.searchValue.valueChanges;
    let observer_1 = observable.subscribe(value => {
      console.log("observer_1: ", value);
      
    })
    let observer_2 = observable.subscribe(value => {
      console.log("observer_2: ", value);
      
    })
  }
}
