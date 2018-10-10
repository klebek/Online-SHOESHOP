import { ShoppingCart } from 'shared/models/shopping-cart';
import { Observable } from 'rxjs/internal/Observable';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { AppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
  providers: [NgbDropdownConfig]
})
export class BsNavbarComponent implements OnInit {

  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  public navbarColor = false;

  constructor(
    private auth: AuthService,
    private cartService: ShoppingCartService,
    config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
    console.log(this.navbarColor);
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = await this.cartService.getCart();
  }
         
}
