export class Dealer {

  name: string;
  street: string;
  postal: string;
  city: string;
  country: string;
  phone: string;
  fax: string;
  mobile: string;
  website: string;
  email: string;
  latitude: string;
  longitude: string;
  status: string;
  comments: string;

  constructor(name, street, postal, city, country, phone, fax, mobile,
              website, email, latitude, longitude, status, comments){
    this.name = name;
    this.street = street;
    this.postal = postal;
    this.city = city;
    this.country = country;
    this.phone = phone;
    this.fax = fax;
    this.mobile = mobile;
    this.website = website;
    this.email = email;
    this.latitude = latitude;
    this.longitude = longitude;
    this.status = status;
    this.comments = comments;
  }


}