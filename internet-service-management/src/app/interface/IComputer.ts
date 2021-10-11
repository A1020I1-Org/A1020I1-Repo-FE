import {IManufacturer} from "./IManufacturer";
import {IStatus} from "./IStatus";
import {IType} from "./IType";
import {IGames} from "./IGames";
import {IOrder} from "./IOrder";
import {IPay} from "./IPay";

export interface IComputer {
  computerId: string,
  computerLocation: string,
  computerStartUsedDate: string,
  computerWarrantyPeriod: string,
  computerConfiguration: string,
  manufacturer: IManufacturer,
  status: IStatus,
  type: IType,
  game: IGames,
  order: IOrder,
  pay: IPay
}

// export interface PageCustomer {
//   content: IComputer[],
//   empty: boolean,
//   first: boolean,
//   number: number,
//   numberOfElements: number,
//   size: number,
//   totalElements: number,
//   totalPages: number
// }

