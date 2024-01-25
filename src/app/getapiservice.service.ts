import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetapiserviceService {

  private apiUrl='https://jsonplaceholder.typicode.com/users'
  
  constructor(private http: HttpClient) { }
  getApiData(){
    return this.http.get<any[]>(this.apiUrl);
  }
}
