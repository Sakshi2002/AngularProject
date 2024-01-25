import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetsetserviceService {
   private formData= new BehaviorSubject<any>(null);
   formData$ = this.formData.asObservable();
   
   setFormdata(data: any)
   {
    this.formData.next(data);
   }
}
