import { Component } from '@angular/core';

@Component({
  //html  tag that youre creating in index.html <app-root></app-root>
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //from app.component.html {{title}}
  name= 'nayoung';
}
