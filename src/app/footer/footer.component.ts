import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  onClickHome(){
    this.router.navigate(['home']);
  }

  onClickOurGoals(){
    this.router.navigate(['pagenotfound']);
  }

  onClickContacts(){
    this.router.navigate(['pagenotfound']);
  }

  onClickWorkWithUs(){
    this.router.navigate(['pagenotfound']);
  }

  onClickSupport(){
    this.router.navigate(['pagenotfound']);
  }

  onClickAbout(){
    this.router.navigate(['about']);
  }
}