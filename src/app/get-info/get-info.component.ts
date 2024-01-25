import { Component } from '@angular/core';
import { GetsetserviceService } from '../getsetservice.service';

@Component({
  selector: 'app-get-info',
  templateUrl: './get-info.component.html',
  styleUrls: ['./get-info.component.css']
})
export class GetInfoComponent {
  submittedData: any;
  constructor(private getService: GetsetserviceService) {}
  ngOnInit(){
    this.getService.formData$.subscribe(data => {
      this.submittedData = data;
    });
  }
}
