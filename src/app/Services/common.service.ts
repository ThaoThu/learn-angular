import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public age = 20;
  public tangTuoi = () => {
    this.age++;
  };

  constructor() {}
}
