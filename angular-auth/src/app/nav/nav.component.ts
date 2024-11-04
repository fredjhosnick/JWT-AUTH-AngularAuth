
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  authenticated = false;
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {

        this.authenticated = auth;
      }
    )

  }

  logout(): void {
    this.http.post('http://localhost:8000/api/logout', {}, { withCredentials: true })
      .subscribe(() => this.authenticated = false)
  }

}
