import {IService} from "./IService";

export interface IOrderService {
  id: number
  OrderID: string;
  serviceId: string;
  serviceName: string;
  quantity: number;
  unit: string;
  total: number;
}
