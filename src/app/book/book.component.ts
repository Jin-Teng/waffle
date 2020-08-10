import { Observable } from 'rxjs';
import { TokenStorageService } from './../_services/token-storage.service';
import { Component, OnInit } from '@angular/core';
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
    private TokenStorageService: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.role = this.TokenStorageService.getUser();
  }

}

