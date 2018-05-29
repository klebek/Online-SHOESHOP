import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { Product } from 'shared/models/product';
import { CategoryService } from 'shared/services/category.service';
import { Category } from 'shared/models/category';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  id;
  product;
  category;
  cart$: Observable<ShoppingCart>;
  

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: ShoppingCartService,
    private categoryService: CategoryService
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
    this.product = await this.productService.get(this.id);
    this.category = await this.categoryService.getCategory(this.product.category);
  }

}
