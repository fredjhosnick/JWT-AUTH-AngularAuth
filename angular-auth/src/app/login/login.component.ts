import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form!: FormGroup

  constructor(
    private formBuild: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {

  }

  ngOnInit(): void {

    this.form = this.formBuild.group({
      email: '',
      password: ''
    })

  }

  submit(): void {
    this.http.post('http://localhost:8000/api/login', this.form.getRawValue(), { withCredentials: true })
      .subscribe(() => this.router.navigate(['/']));

  }

}
