import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@fathurrq-package/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
