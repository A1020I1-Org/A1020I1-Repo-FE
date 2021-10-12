import {Account} from "./Account";

export interface Customer {
  customerId: number;
  account: Account;
  fullName: string;
  email: string;
  dateOfBirth: string;
  address: string;
  phone: string;
  status: boolean;
  idCard: string;
}
