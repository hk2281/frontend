export class Shop {
  id?: number | any;
  shopName: string;
  shopAddress: string;

  constructor(shopName: string, shopAddress: string) {
    this.shopAddress = shopAddress;
    this.shopName = shopName;
  }
}
