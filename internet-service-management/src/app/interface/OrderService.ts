import {Service} from "./Service";
import {Customer} from "./Customer";


export interface OrderService {
  id: number;
  quantity: number;
  unit: string;
  totalMoney: number;
  orderDate: string;
  status: boolean;
  service: Service;
  customer: number;
  pay: number;
}
