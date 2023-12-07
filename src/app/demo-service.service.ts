import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  
  URL= 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole'
  constructor(private httpClient:HttpClient) { }
  getData(){
    return this.httpClient.get(this.URL);
  }
}
