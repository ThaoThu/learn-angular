import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public age;
  constructor(private commonAge: CommonService) {
    this.age = this.commonAge.age;
  }

  public tangTuoi() {
    this.commonAge.age++;
    this.age = this.commonAge.age;
  }

  ngOnInit(): void {}
}
