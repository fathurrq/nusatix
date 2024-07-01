import { Subjects, Publisher, OrderCancelledEvent } from '@fathurrq-package/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
