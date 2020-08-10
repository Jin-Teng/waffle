import { Observable } from 'rxjs';
import { TokenStorageService } from './../_services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Data } from '../_shared/data';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  currentUser: Data;
  role: string;

  constructor(
    private user: UserService,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.user.getUserProfile().subscribe(
      data => {
        console.log(data.data.role);
        if ( data.code === 0 ) {
          this.currentUser = data;
          this.tokenStorage.saveUser(data.data.role); //save role in localStorage
        }
      }
    );
  }

}

