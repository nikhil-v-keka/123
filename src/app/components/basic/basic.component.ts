import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
})
export class BasicComponent {
  name: string = 'nikhil';

  sampleFunction() {
    //sample function
    if (this.name === 'nikhil') {console.log('my name is Nikhil');}
  }

  function2() {
    //second function
    console.log('hi');
  }
}
