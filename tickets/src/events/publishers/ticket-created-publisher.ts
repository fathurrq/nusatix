import { Publisher, Subjects, TicketCreatedEvent } from '@fathurrq-package/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
