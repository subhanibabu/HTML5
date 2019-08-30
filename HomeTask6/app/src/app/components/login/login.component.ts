import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username : string;
  invalidUser: string;
  loginForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl('')
    });

  constructor(private router: Router) { }

  ngOnInit() {
  }
  loginCheck()
  {
    if(this.loginForm.get('username').value != '' && this.loginForm.get('password').value != '')
    {
      if(this.loginForm.get('username').value ==='angular' && this.loginForm.get('password').value==='angular')
      {
        this.invalidUser = '';
        this.router.navigateByUrl('/News');
      }
      else{
        this.invalidUser = 'UserName & Password are InCorrect.';
      }
    }
    else{
      this.invalidUser = 'Please enter UserName & Password.';
    }
  }
}
