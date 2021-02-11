import { AfterViewChecked, Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-a-comp',
  template: `
    <button (click)="remove()">Remove child component</button>
    <app-b-comp #c></app-b-comp>
  `
})
export class AComponent implements AfterViewChecked {
  @ViewChildren('c', {read: ElementRef}) childComps: QueryList<ElementRef>;


  constructor(private hostElement: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewChecked(): void {
    console.log('number of child components: ' + this.childComps.length);
  }

  remove(): void {
    this.renderer.removeChild(
      this.hostElement.nativeElement,
      this.childComps.first.nativeElement
    );
  }
}
