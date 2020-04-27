import { Injectable } from '@angular/core';
import { fromEvent, fromEventPattern } from 'rxjs';
import { tap } from 'rxjs/operators';

import gameControl from './gamepad/gamecontrol';

@Injectable()
export class GamepadService {

  private gameControl = gameControl;
  private gamepad: any;

  connect() {
    return fromEvent(this.gameControl, 'connect')
      .pipe(
        tap(gamepad => this.gamepad = gamepad)
      );
  }

  after(event: string) {
    return fromEventPattern(
      handler => this.gamepad.after(event, handler)
    );
  }

  on(event: string) {
    return fromEvent(this.gamepad, event);
  }
}
