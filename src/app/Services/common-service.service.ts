import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  apiUrl = 'http://quotes.stormconsultancy.co.uk/random.json';
  constructor(private http: HttpClient) { }
  getQuotes() {
    return this.http.get(this.apiUrl);
  }
}

