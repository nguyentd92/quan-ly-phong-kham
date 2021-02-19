export class AuthCookieModel {
  private email: string;
  private firstName: string;
  private middleName: string;
  private lastName: string;
  private prefixName: string;
  private token: string;
  private expiresAt: Date;


  constructor(
    email: string,
    firstName: string,
    middleName: string,
    lastName: string,
    prefixName: string,
    token: string,
    expiresAt: Date) {
    this.email = email;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.prefixName = prefixName;
    this.token = token;
    this.expiresAt = expiresAt;
  }
}
