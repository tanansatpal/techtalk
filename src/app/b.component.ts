import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-b-comp',
  template: `
    <div>I am B component</div>
    <app-c-comp></app-c-comp>
  `
})
export class BComponent implements DoCheck {
  ngDoCheck(): void {
    console.log('ngDoCheck is called on BComponent');
  }
}
