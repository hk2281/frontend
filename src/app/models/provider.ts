export class Provider {
  id?: number | any;
  name: string;
  country: string;
  contact: string;

  constructor(name: string, country: string, contact: string) {
    this.name = name;
    this.contact = contact;
    this.country = country;
  }
}
