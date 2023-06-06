import { Component, OnInit } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'My Application';
  name: string = 'keka';
  ngOnInit() {
    if (this.name === 'nikhil') {
      console.log('Correct');
    } else {
      console.log('Incorrect');
    }

    console.log('this is for testing : ');

    for (let i: number = 0; i < 5; i++){
      console.log(i);
    }
  }

  users: User[] = [
    {
      name: 'John Doe',
      job: 'Architect and Engineer',
    },
    {
      name: 'Nikhil',
     								 job: 'Movie Director',
    },
    {
      name: 'Swetha',
      			job: 'Sports person',
    },
    {
      name: 'Ram',
      job: 'its a Quality Analyst',
    },
  ];
}
