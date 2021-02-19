import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Thao';
  public age;
  public vehicles = ['honda', 'toyota', 'nisan'];
  constructor(private commonAge: CommonService) {
    this.age = commonAge.age;
  }
  public tangTuoi() {
    this.commonAge.age++;
    this.age = this.commonAge.age;
    this.vehicles.push(this.name + this.age);
  }
  ngOnInit(): void {}
}
