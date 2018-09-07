import { CategoryService } from 'shared/services/category.service';
import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'shared/services/product.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  
  categories$;
  products$;
  @Input('category') category;
  @Input('product') product;

  constructor(categoryService: CategoryService, productService: ProductService) {
    this.categories$ = categoryService.getAll();
    this.products$ = productService.getAll(); 
   }

  ngOnInit() {
  }

}
