import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {

  items = Array.from({length: 100000}).map((_, i) => ({no: i, name: `Item #${i}`}));
  items2 = Array.from({length: 10}).map((_, i) => ({no: i, name: `Item #${i}`}));

  ngOnInit(): void {
  }

  updateArray(): void {
    this.items2 = Array.from({length: 11}).map((_, i) => ({no: i, name: `Item #${i}`}));
  }

  // tslint:disable-next-line:typedef
  trackByFn(index, item) {
    return index; // or item.id
  }

}
