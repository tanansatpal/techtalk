import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading: boolean;

  number: number;
  output;

  private webWorker: Worker;

  calcFib(): void {
    this.output = fibonacci(this.number);

    // ENABLE WEB WORKER USAGE
    // this.webWorker.postMessage(this.number);
  }

  constructor(router: Router) {
    this.loading = false;

    router.events.subscribe(
      (event: RouterEvent): void => {
        if (event instanceof RouteConfigLoadStart) {
          this.loading = true;
        } else if (event instanceof RouteConfigLoadEnd) {
          this.loading = false;
        }
      }
    );
  }

  ngOnInit() {
    if (typeof Worker !== 'undefined') {
      this.webWorker = new Worker('./webworker.worker', {type: 'module'});
      this.webWorker.onmessage = ({data}) => {
        console.log('data :: ', data);
        this.output = data;
      };
    }
  }
}


function fibonacci(num: number): number {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}
