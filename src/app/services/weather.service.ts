import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  
  getWeatherData(cityName: string): Observable<WeatherData> {
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Host', environment.XRapidAPIHostHeaderValue)
      .set('X-RapidAPI-Key', environment.XRapidAPIKeyHeaderValue);
  
    // Adjusted the URL to include the city name in the path
    const url = `${environment.weatherApiBaseUrl}/city/${cityName}`;
  
    return this.http.get<WeatherData>(url, {
      headers: headers
    });
  }
}
