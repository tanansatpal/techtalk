import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  items2 = Array.from({length: 10000}).map((_, i) => `Item #${i}`);

  ngOnInit(): void {
  }

}
