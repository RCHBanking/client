
import { Component } from '@angular/core';
import { Customer } from './Models/customer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  public customers?: Customer[];

  constructor(){}

}
