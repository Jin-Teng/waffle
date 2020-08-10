import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    // private authService: AuthService,
    private router: Router,
    private tokenStorage: TokenStorageService,
    private userService: UserService
  ) { }

  ngOnInit(){
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit() {
    this.userService.userLogin(this.form).subscribe(
      data => {
        console.log(data.data);
        this.tokenStorage.saveToken(data.data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
        this.router.navigate(['home']);

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

}
