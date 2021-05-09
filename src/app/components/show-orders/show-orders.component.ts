import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';


@Component({
  selector: 'app-show-orders',
  templateUrl: './show-orders.component.html',
  styleUrls: ['./show-orders.component.css']
})
export class ShowOrdersComponent implements OnInit {

  // משתנה עזר שיכיל את ההזמנות 
  orders:any;
  //private כשנשתמש בסרביסים נגדיר בבנאי מופע מסוג הסרביס שיוגדר בהרשאה 
  constructor(private ordersService: OrdersService) { 
    this.orders = this.ordersService.getOrders();
  }

  ngOnInit(): void {
  }


}
