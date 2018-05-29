import { Category } from './../../models/category';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'shared/models/product';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { CategoryService } from 'shared/services/category.service';
import { ProductService } from 'shared/services/product.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('show-details') showDetails = true;
  @Input('category') category: Category;

  @Input('shopping-cart') shoppingCart: ShoppingCart;
  

  category$;
  products$;

  constructor(
    private cartService: ShoppingCartService,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  async ngOnInit() {
    this.category$ = await this.categoryService.getCategory(this.product.category);
    this.products$ = await this.productService.getAll();
  }
}
