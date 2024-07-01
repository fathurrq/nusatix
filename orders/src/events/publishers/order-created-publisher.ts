import { Publisher, OrderCreatedEvent, Subjects } from '@fathurrq-package/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
