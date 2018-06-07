import { inject } from '@angular/core/testing';
import { ShoppingCart } from "./shopping-cart";

export class Order {
    datePlaced: number;
    items: any[];
    total: number;

    constructor(public userId: String, public shopping: any, shoppingCart: ShoppingCart) {
        this.datePlaced = new Date().getTime();
        this.items = shoppingCart.items.map(i => {
            return {
                product: {
                    title: i.title,
                    imageUrl: i.imageUrl,
                    price: i.price,
                    discount: i.discount
                },
                quantity: i.quantity,
                totalPrice: i.totalPrice
            }
        })
        
    }
}