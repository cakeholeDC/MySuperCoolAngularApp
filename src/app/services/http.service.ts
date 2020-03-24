import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  fetchBreweries(state=null) {
  	const params = state ? `?by_state=${state}&per_page=30` : `&per_page=50`
  	return this.http.get(`https://api.openbrewerydb.org/breweries${params}`)
  }
} 
