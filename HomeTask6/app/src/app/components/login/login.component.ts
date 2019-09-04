import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username : string;
  invalidUser: string;
  loginForm = new FormGroup({
    username : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
    });

  constructor(private router: Router, private newsService: NewsService) { 
    
  }

  ngOnInit() { }

  loginCheck()
  {
    if(this.loginForm.valid)
    {
      if(this.loginForm.get('username').value ==='angular' && this.loginForm.get('password').value==='angular')
      {
        this.invalidUser = '';
        this.newsService.setLoggedInUserName = this.loginForm.get('username').value;
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
