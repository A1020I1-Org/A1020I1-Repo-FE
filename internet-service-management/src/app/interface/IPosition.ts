import {IEmployee} from "./IEmployee";

export interface IPosition {
  positionId: number;
  positionName: string;
  employeeList?: IEmployee[];

}
