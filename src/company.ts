import faker from 'faker';
import { Mappable } from './CustomMap';

//This 'implement' help TS helps us to detect errors
export class Company implements Mappable {
  companyName: string; 
  catchPhrase: string; 
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      //We actually need to parse the faker data because the latitude/longitude functions in Faker return a string
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `
    <div>
      <h4>Company Name: ${this.companyName} | ${this.catchPhrase}</h4>
    </div>
    `
  }
};

