import { Product } from "./product";

export class ShoppingCartItem {

    $key: string;
    title: String;
    imageUrl: String;
    price: number;
    quantity: number;
    discount: number;

    constructor(init?: Partial<ShoppingCartItem>) {
        Object.assign(this, init);
    }

    get totalPrice() {
        let dis = 1 - this.discount / 100; 
        return this.price * dis * this.quantity;
    }
}