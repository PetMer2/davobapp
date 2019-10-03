export class Customer {
  name: string;
  coc: Date;
  cdd: Date;
  street: string;
  postal: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  website: string;
  vatNo: string;
  cocNo: string;
  debtorNo: string;
  invoiceAddress: string;
  invoicePostal: string;
  invoiceCity: string;
  invoiceCountry: string;
  invoiceEmail: string;
  comments: string;
  status: string;

  constructor (name, coc, cdd, street, postal, country, phone, email, website, vatNo, cocNo,
              debtorNo, invoiceAddress, invoicePostal, invoiceCity, invoiceCountry, invoiceEmail,
              comments, status){
                this.name = name,
                this.coc = coc,
                this.cdd = cdd,
                this.street= street,
                this.postal = postal, 
                this.country = country,
                this.phone = phone,
                this.email = email,
                this.website = website,
                this.vatNo = vatNo,
                this.cocNo = cocNo,
                this.debtorNo = debtorNo,
                this.invoiceAddress = invoiceAddress,
                this.invoicePostal = invoicePostal,
                this.invoiceCity = invoiceCity,
                this.invoiceCountry = invoiceCountry,
                this.invoiceEmail = invoiceEmail,
                this.comments = comments,
                this.status = status
              }
}