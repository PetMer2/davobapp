export class Driver {
  name: string;
  street: string;
  postal: string;
  city: string;
  country: string;
  phone: string;
  fax: string;
  mobile: string;
  privateMobile: string;
  email: string;
  customer: string;
  status: string;
  comments: string;

  constructor (
  name: string,
  street: string,
  postal: string,
  city: string,
  country: string,
  phone: string,
  fax: string,
  mobile: string,
  privateMobile: string,
  email: string,
  customer: string,
  status: string,
  comments: string
  ){
    this.name = name,
    this.street = street,
    this.postal = postal,
    this.city = city,
    this.country = country,
    this.phone = phone,
    this.fax = fax,
    this.mobile = mobile,
    this.privateMobile = privateMobile,
    this.email = email,
    this.customer = customer,
    this.status = status,
    this.comments = comments
  }
}