export interface AddNew {
    id: number;
    firstName: string;
    lastName: string;
    doctor: any;
    regDate: any,
    email: string;
    phone: string;
    street: string;
    city: string;
    zipcode: string;
    country: string;
    anotherAddress: Address [];
}

export interface Address {
    type: string;
    name: string;
    phone: string;
    street: string;
    city: string;
    zipcode: string;
    country: string;
}

