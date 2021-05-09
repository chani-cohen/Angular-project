import { Component, OnInit } from '@angular/core';
import {DestinationsService} from '../../services/destinations.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-show-destinations',
  templateUrl: './show-destinations.component.html',
  styleUrls: ['./show-destinations.component.css']
})
export class ShowDestinationsComponent implements OnInit {


 
  // משתני עזר למירת הערכים הנצרכים לצורך הוספת הזמנה חדשה
  consumerName:string = '';
  numTikets:number = 1;
  consumerId:string = '';
  currentDestination:string = '';

  // הגדרת מערך שיכיל את היעדים הקיימים
  destinations: string[]=[];
  //private כשנשתמש בסרביסים נגדיר בבנאי מופע מסוג הסרביס שיוגדר בהרשאה  
  constructor(private destinationService: DestinationsService, private orders:OrdersService) {
    this.destinations= destinationService.getDestinations();
  }

  
  ngOnInit(): void {
  }
// פונקציית הוספת הזמנה
  addNewOrder() {
    if (this.consumerName&&this.numTikets&&this.consumerId) {
      this.orders.addOrder({
        name: this.consumerName,
        numTikets: this.numTikets,
        id:this.consumerId,
        destination: this.currentDestination
      });
    }    
    this.consumerId = '';
    this.consumerName = '';
    this.numTikets = 1;
  }

}
