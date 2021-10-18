
import {IPosition} from "./IPosition";
import {IAccount} from "./IAccount";

export interface IEmployee {
  id: number;
  employeeId: string;
  fullName: string;
  dateOfBirth: string;
  email: string;
  account: IAccount;
  position: IPosition;
  address: string;
  phone: string;
  startWorkDate: string;
  yearOfExp: string;
  avtUrl: string;
  msgStartWorkDate?: string;
  msgDateOfBirth?: string;
  msgCode?: string;
  msgEmail?: string;
  status?: boolean;
  msgPassword?: string;

}
