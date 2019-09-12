import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeHttpService {

  constructor(private http: HttpClient) { }

  fetchJsonData() : Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  fetchJsonDataDelete(userId: number) : Observable<any> {
    return this.http.delete("https://jsonplaceholder.typicode.com/posts"+"/" + userId);
  }
}
