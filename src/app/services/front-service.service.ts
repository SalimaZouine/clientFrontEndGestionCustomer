import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrontServiceService {

  public  host:string="http://localhost:8081"
  constructor(private http:HttpClient) { }


  public getCustomers(){
    return this.http.get(this.host+"/customers")
  }
}
