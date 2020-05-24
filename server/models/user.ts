export default class User {
  email: string;
  lastName: string;
  firstName: string;
  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
