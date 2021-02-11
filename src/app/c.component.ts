import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-c-comp',
  template: `
    <div>I am C component</div>
  `
})
export class CComponent implements DoCheck {
  ngDoCheck(): void {
    console.log('ngDoCheck is called on CComponent');
  }
}
