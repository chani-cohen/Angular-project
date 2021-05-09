import { Injectable } from '@angular/core';
import {DestinationsService} from './destinations.service'

@Injectable({
  providedIn: 'root'
})


export class OrdersService {

  constructor(private Destinations:DestinationsService ) { }

  private Orders = [{
    id: 1,
    nameCustomr:"odaya",
    numTikets:5,
    destination: this.Destinations.getDestinationsService[0]
  },{ 
    id: 2,
    nameCustomr:"chani",
    numTikets:10,
    destination: this.Destinations.getDestinationsService[1]
  }, {
    id: 3,
    nameCustomr:"shani",
    numTikets:5,
    destination: this.Destinations.getDestinationsService[2]
  }, {
    id: 3,
    nameCustomr:"tzipy",
    numTikets:2,
    destination: this.Destinations.getDestinationsService[3]
  }, {
    id: 3,
    nameCustomr:"miri",
    numTikets:1,
    destination: this.Destinations.getDestinationsService[1]
  }]

  getOrdersService(){
    return this.Orders;
  }
}
