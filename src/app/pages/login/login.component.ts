import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() isLogged = true;
  @Output() newLoginEvent = new EventEmitter<boolean>();

  userName = '';
  passWord = '';
  errorMsg = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLoginClick(): void{
    if(this.userName.trim().length === 0){
      this.errorMsg = 'Username is required';
    }
    else
    {
      if(this.passWord.trim().length === 0){
        this.errorMsg = 'Password required';
      }
      else
      {
        this.errorMsg = '';
        let res = this.auth.login(this.userName, this.passWord);
        if(res === 200){
          this.router.navigate(['home']);
          this.isLogged = true;
        }
        if(res === 403){
          this.errorMsg = "Invalid credentials";
          this.isLogged = false;
        }
      }
    }
    this.newLoginEvent.emit(this.isLogged);
  }
}