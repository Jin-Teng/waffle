import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { UserService } from './_services/user.service';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'waffle';

  isLoggedIn = false;
  role: string;

  constructor(
    private tokenStorageService: TokenStorageService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log(this.isLoggedIn);

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
    }
  }

  logout() {
    this.userService.userLogout().subscribe( data => {
        console.log(data.code);
        if ( data.code === 0 ) {
          this.tokenStorageService.signOut();
          window.location.reload();
        }
    });
  }
}
