import { Category } from './../../models/category';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'shared/models/product';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { CategoryService } from 'shared/services/category.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{

  @Input('category') category: Category;
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  category$;
  
  constructor(private cartService: ShoppingCartService, private categoryService: CategoryService) { 
    
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  async ngOnInit() {
    this.category$ = await this.categoryService.getCategory(this.product.category);
  }
}
