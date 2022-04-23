import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  onClick(): void{
    console.log("on click ");
  }

  onHomeClick(): void{
    this.router.navigate(['home']);
    console.log("route to home ");
  }

  onSomeLinkClick(): void{
    this.router.navigate(['link']);
    console.log("route to home ");
  }

  onClickAbout(): void{
    this.router.navigate(['about']);
    console.log("on click about");
  }

  logout(){
    this.auth.logout();
  }
}