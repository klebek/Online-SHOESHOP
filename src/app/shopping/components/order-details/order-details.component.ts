import { OrderService } from 'shared/services/order.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  id;
  order$;

  constructor(private route: ActivatedRoute, private orderService: OrderService) {
    this.id = this.route.snapshot.params['id'];
  }


  async ngOnInit() {
    this.order$ = await this.orderService.getOrder(this.id);
  }
  
}
