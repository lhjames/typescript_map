//We also need to do $npm install @types/faker (to install the type definition file)
import faker from 'faker'; 

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    //We can find the existence of this function by looking a the doc or the type definition file
    this.name = faker.name.firstName();
    this.location = {
      //We actually need to parse the faker data because the latitude/longitude functions in Faker return a string
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `User Name: ${this.name}`
  }
}