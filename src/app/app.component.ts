import { WeatherData } from './models/weather.model';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private weatherService: WeatherService){
    
  }

  cityName : string = "Wellington";
  weatherData? : WeatherData;
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';


  }
  
  private getWeatherData(cityName: String) {
    this.weatherService.getWeatherData(this.cityName)
    .subscribe({
      next:(respone) => {
        this.weatherData = respone
        console.log(respone)
      }
    })
  }

  title = 'weatherApp';
}
