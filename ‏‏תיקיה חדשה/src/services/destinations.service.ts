import { Injectable } from '@angular/core';

//const Destinations: string[]=["turkya","israel","rusha","london","usa"];

@Injectable({
  providedIn: 'root'
})

export class DestinationsService {

  constructor() { }
  //מערך יעדי הטיסות
  private Destinations = ["turkya","israel","rusha","london","usa"];

  getDestinationsService(){
    return this.Destinations;
  }
}
