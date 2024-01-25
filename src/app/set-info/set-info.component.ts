import { Component } from '@angular/core';
import { GetsetserviceService } from '../getsetservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-set-info',
  templateUrl: './set-info.component.html',
  styleUrls: ['./set-info.component.css']
})
export class SetInfoComponent {
  formData :any={};
  constructor(private setService: GetsetserviceService){}
  submitForm()
  {
    Swal.fire(
      {
        title:"Data Received",
        icon:'success'
      }
    )
    this.setService.setFormdata(this.formData); 
    console.log(`name is $(this.formData)`)   
  }
}
