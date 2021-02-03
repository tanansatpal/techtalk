import { Component, Injector } from '@angular/core';
import { debounce, memoize } from '../memoize';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  framework = 'Angular';
  count = 0;

  @memoize()
  getTitle(framework: string): string {
    console.log('getTitle is called', framework);
    return `I love ${framework.toUpperCase()}`;
  }

  changeFramework(): void {
    if (this.framework === 'Angular') {
      this.framework = 'React';
    } else {
      this.framework = 'Angular';
    }
  }

  @debounce(500)
  counterAdd(): void {
    this.count += 1;
  }

}
