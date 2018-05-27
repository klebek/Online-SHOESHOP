import { Product } from "./product";

export class ShoppingCartItem {

    $key: string;
    title: String;
    imageUrl: String;
    price: number;
    quantity: number;

    constructor(init?: Partial<ShoppingCartItem>) {
        Object.assign(this, init);
    }

    get totalPrice() { return this.price * this.quantity; }
}