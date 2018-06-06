import { Order } from 'shared/models/order';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from 'shared/services/order.service';
import { Subscription } from 'rxjs';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnDestroy {

  orders: Order[];
  subscription: Subscription;
  tableResource: DataTableResource<Order>;
  items: Order[] = [];
  itemCount: number;
  
  constructor(private orderService: OrderService) {
    this.subscription = this.orderService.getOrders()
    .subscribe(orders => {
      this.orders = orders;
      this.initializeTable(orders);
    });
  }

  private initializeTable(o: Order[]) {
    this.tableResource = new DataTableResource(o);
    this.tableResource.query({ offset: 0 })
      .then(items => this.items = items);
    this.tableResource.count()
      .then(count => this.itemCount = count);
  }

  reloadItems(params) {

    if(!this.tableResource) return;
    this.tableResource.query(params)
      .then(items => this.items = items);
  }

  filter(query: string) {
    let filteredOrders = (query) ?
      this.orders.filter(o => o.shopping.name.toLowerCase().includes(query.toLowerCase())) : 
      this.orders;
      this.initializeTable(filteredOrders);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
 