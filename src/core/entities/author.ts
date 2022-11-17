export class Author {
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    pseudonym: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.pseudonym = pseudonym;
  }
  firstName: string;
  lastName: string;
  email: string;
  pseudonym: string;
}
