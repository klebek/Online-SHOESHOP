import { OrderService } from 'shared/services/order.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { Subscription } from 'rxjs';

@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {

  id;
  order = [];
  items = [];
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private orderService: OrderService) {
    this.id = this.route.snapshot.params['id'];
  }


  async ngOnInit() {
    this.subscription = await this.orderService.getOrder(this.id).subscribe(order => {
      this.order = order;
    });
    this.subscription = await this.orderService.getOrderItems(this.id).subscribe(items => {
      this.items = items;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
