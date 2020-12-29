import {Component, Injectable, OnInit} from '@angular/core';
import {FrontServiceService} from '../services/front-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service.component.html',
  styleUrls: ['./customer-service.component.css']
})
export class CustomerServiceComponent implements OnInit {

  public customers
  constructor( public frontservice: FrontServiceService) { }

  ngOnInit(): void {

    this.frontservice.getCustomers()
      .subscribe(data =>{
        this.customers=data;
      },error => {
        console.log(error)
        })
  }

}
