import { Component, OnInit } from '@angular/core';
import {DestinationsService} from '../../services/destinations.service';

@Component({
  selector: 'app-create-destination',
  templateUrl: './create-destination.component.html',
  styleUrls: ['./create-destination.component.css']
})
export class CreateDestinationComponent implements OnInit {

// משתנה עזר לשמירת היעד החדש שיתווסף
  newDestination:string='';
  // הגדרת אובייקט שישמור את רשימת היעדים
  destinations:any;
  //private כשנשתמש בסרביסים נגדיר בבנאי מופע מסוג הסרביס שיוגדר בהרשאה 
  constructor(private destinationsService:DestinationsService) {
      this.destinations = this.destinationsService.getDestinations();
   }

  // פונקציית הוספת יעד חדש
  addNewDestination(){
      this.destinationsService.addNewDestination(this.newDestination);
  }
  ngOnInit(): void {

  }

}
