import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'dropdown-menus',
  templateUrl: './dropdown-menus.component.html',
  styleUrls: ['./dropdown-menus.component.scss']
})
export class DropdownMenusComponent implements OnInit {

  @Input('appUser') appUser;
  @Input('hamburger') hamburger = false;

  cart$;

  constructor(private auth: AuthService,private cartService: ShoppingCartService) {}
  
  async ngOnInit(){
    this.cart$ = await this.cartService.getCart();
  }

  logout() {
    this.auth.logout();
  }

}
