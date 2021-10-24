
import {IPosition} from "./IPosition";
import {IAccount} from "./IAccount";
import {IPosition} from "./IPosition";

export interface IEmployee {
  employeeId: string;
  fullName: string;
  dateOfBirth: string;
  email: string;
  account: IAccount;
  position: IPosition;
  address: string;
  phone: string;
  level: string;
  startWorkDate: string;
  yearOfExp: number;
  avtUrl: string;
  msgStartWorkDate?: string;
  msgDateOfBirth?: string;
  msgCode?: string;
  msgEmail?: string;
  status?: boolean;
  msgPassword?: string;

  position: IPosition;
}
