import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router} from '@angular/router';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usernames: string[] =  ['angular','admin'];
  passwords: string[] =  ['angular','admin'];
  invalidUser: string;
  loginForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl('')
    });

  constructor(private router: Router, private newsService: NewsService) { 
    
  }

  ngOnInit() { }

  loginCheck()
  {
    if(this.loginForm.valid)
    {
      if(this.usernames.includes(this.loginForm.get('username').value) && 
      this.passwords.includes(this.loginForm.get('password').value))
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
