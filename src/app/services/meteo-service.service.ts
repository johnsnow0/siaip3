import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoServiceService {

url="https://api.meteo.lt/v1/places/vilnius/forecasts/long-term"

  constructor(private http:HttpClient) { }

prognozes() {
  
  console.log(this.url)
  return this.http.get(this.url);
  
}

}
