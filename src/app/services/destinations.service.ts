import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class DestinationsService {

  //מערך יעדי טיסות
  private destinations:string[]= ["America","Israel","Pariz","Turkey","Russia","London"];

  constructor() { }

  getDestinations(){
    return this.destinations;
  }
// הוספת יעד חדש
  addNewDestination(destination:string){
    this.destinations.push(destination);
  }
}
