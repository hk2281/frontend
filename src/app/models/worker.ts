export class Worker {
    id?: number|any;
    firstName: string;
    lastName: string;
    positionRole: string;
    contact: string;
    shop: number;

    constructor(firstName: string, lastName: string, positionRole: string,contact: string,shopId: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.positionRole= positionRole;
        this.contact = contact;
        this.shop = shopId;
    }
}
