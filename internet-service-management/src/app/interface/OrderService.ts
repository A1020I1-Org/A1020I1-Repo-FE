import {Service} from "./Service";
import {Customer} from "./Customer";


export interface OrderService {
  id: number,
  quantity: number,
  unit: number,
  totalMoney: number,
  order_date: string,
  status: boolean,
  service: Service,
  customer: Customer,

}
