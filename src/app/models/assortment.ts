export class Assortment {
    id?: number | any;
    item: string;
    price: number;
    provider: number;
    category: number;

    constructor( item: string, price: number, provider: number, category: number){
        this.item = item;
        this.price = price;
        this.provider = provider;
        this.category= category;
    }
}
