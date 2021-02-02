import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-feature-2',
  templateUrl: './feature-2.component.html',
  styles: []
})
export class Feature2Component implements OnInit {

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
  }

}
