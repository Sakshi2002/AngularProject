import { Component } from '@angular/core';
import { GetapiserviceService } from '../getapiservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  apiData:any[]=[];
  getApiData:any;
  
  constructor(private callApiService :GetapiserviceService)
  {}
    ngOnInit()
    {
      this.fetchApiData();
    }
    fetchApiData(){}
    onClick()
    {
  
      this.callApiService.getApiData().subscribe(
        (data:any[])=>{
          this.apiData=data;
        },
        (error:any[])=>{
          console.error('API Error',error);
        }
      )
}
}
