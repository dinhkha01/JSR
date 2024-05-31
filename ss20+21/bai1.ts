class Contact {
  name: string;
  email: string;
  phoneNumber: string;
  constructor(name: string, email: string, phoneNumber: string) {
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}
class PhoneBook<T> extends Contact {
  danhba: T[] = [];
  constructor(
    name: string,
    email: string,
    phoneNumber: string,
    danhba: T[] = []
  ) {
    super(name, email, phoneNumber);
    this.danhba = danhba;
  }
}
