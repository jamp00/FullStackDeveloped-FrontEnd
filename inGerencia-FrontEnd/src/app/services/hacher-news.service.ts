import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { HackerNew } from '../models/HackerNew';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HacherNewsService {

  constructor( public http: HttpClient ) { }

  getHackerNews(){
    return this.http.get<HackerNew[]>('http://localhost:8086/HackerNews/getHackerNews');
  }

  setDeletedHackerNew(id){
    return this.http.put('http://localhost:8086/HackerNews/setDeletedHackNew/' +id, null);
  }


}
