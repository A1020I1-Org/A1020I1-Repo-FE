import {Account} from "./Account";
import {Orders} from "./Orders";

export interface Customer {
  customerId: number;
  account: Account;
  orders: Orders;
  fullName: string;
  email: string;
  dateOfBirth: string;
  address: string;
  phone: string;
  status: boolean;
  idCard: string;
}


