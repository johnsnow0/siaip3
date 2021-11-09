import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';
import { MeteoServiceService } from './services/meteo-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'siaip3';

users:any;
meteo:any;
  constructor (private userData: UserdataService, private meteoData:MeteoServiceService) {

this.users=this.userData.users();

this.meteoData.prognozes().subscribe((data)=>{this.meteo=data});


}
  
  getUserFormData(item:any) {

}

}
