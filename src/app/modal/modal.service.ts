import { Injectable } from '@angular/core';

import { ModalComponent } from './modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  /*
  The modal service should make it possible to show some pre-defined modals very easily from any component.

  Only setup required should be to import the modal service in your component ts and run whatever you wish.
  */

  constructor() {}

  // Open a success modal
  success(title: string, body: string): ModalComponent | null {
    // Final implementation should always return !null
    return null;
  }

  // Open a failure modal
  failure(title: string, body: string): ModalComponent | null {
    // Final implementation should always return !null
    return null;
  }
}
