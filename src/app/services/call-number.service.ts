import { Injectable } from '@angular/core';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

@Injectable({
  providedIn: 'root'
})
export class CallNumberService {

  constructor(private callNumber: CallNumber) { }
  call(number:any){
    this.callNumber.callNumber(number, true)
    .then((res:any) => console.log(''))
    .catch((err:any) => console.log('Error launching dialer', err));
  
  }
}
