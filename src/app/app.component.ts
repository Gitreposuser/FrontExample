import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'example';
  @Input() isLogged = true;

  constructor(){}

  onLogin(isLogged: boolean){
      this.isLogged = isLogged;
  }
}