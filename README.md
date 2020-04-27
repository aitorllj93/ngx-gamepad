# ngx-gamepad

Angular [gamecontroller.js](https://www.npmjs.com/package/gamecontroller.js) wrapper service.

[Demo](https://d3v0ps.github.io/ngx-gamepad)

## Getting Started

### 1. Install packages
```sh
npm i ngx-gamepad
```

### 2. Import Module
```typescript
import { NgxGamepadModule } from 'ngx-gamepad';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgxGamepadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### 3. Include the service

```ts

import { GamepadService } from 'ngx-gamepad';

export class AppComponent {

  constructor(
    private gamepad: GamepadService
  ){}

  ngOnInit() {
    this.listenToGamepad();
  }

  private listenToGamepad() {
    this.gamepad.connect()
      .subscribe(() => {

        this.gamepad.after('button0')
          .subscribe(() => ...);

        this.gamepad.after('select')
          .subscribe(() => ...);

        this.gamepad.after('start')
          .subscribe(() => ...);

        this.gamepad.on('right')
          .pipe(bufferCount(10))
          .subscribe(() => ...);

        this.gamepad.on('right0')
          .pipe(bufferCount(10))
          .subscribe(() => ...);

        this.gamepad.on('right1')
          .pipe(bufferCount(10))
          .subscribe(() => ...);
      })
  }

}

```
