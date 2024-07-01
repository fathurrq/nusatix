import { Publisher, Subjects, TicketUpdatedEvent } from '@fathurrq-package/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
