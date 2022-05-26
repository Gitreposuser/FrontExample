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
  }

  onMangaClick(): void{
    this.router.navigate(['manga']);
  }

  onDisable(): void{
    console.log("on disabled");
  }

  onSomeLinkClick(): void{
    this.router.navigate(['pagenotfound']);
  }

  onClickAbout(): void{
    this.router.navigate(['about']);
  }

  logout(){
    this.auth.logout();
  }
}