import { IsEnum } from 'class-validator';
import { OrderStatus, OrderStatusList } from '../enum/order.enum';

export class ChangeOrderDto {
  @IsEnum(OrderStatusList, {
    message: `Valid status are ${OrderStatusList}`,
  })
  status: OrderStatus;
}
