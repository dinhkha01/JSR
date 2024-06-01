"use strict";
class Contact {
    constructor(name, email, phoneNumber) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}
class PhoneBook extends Contact {
    constructor(name, email, phoneNumber, danhba = []) {
        super(name, email, phoneNumber);
        this.danhba = [];
        this.danhba = danhba;
    }
}
