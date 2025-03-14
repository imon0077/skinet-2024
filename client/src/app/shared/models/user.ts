export type User = {
    firstName: String;
    lastName: String;
    email: String;
    address: Address;
}

export type Address = {
    line1: String;
    line2?:String;
    city: String;
    state: String;
    country: String;
    postalCode: String;
}