import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserInfo } from 'src/app/models/IUserInfo';
import { AccountService } from 'src/app/services/account.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  formLogin: FormGroup;
  usuario: IUserInfo;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AccountService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.maxLength(250), Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  login() {
    if (this.formLogin.invalid) {
      window.alert("Complete los campos");
      return;
    }
    this.usuario = new IUserInfo;
    this.usuario.UserName = this.formLogin.value.email;
    this.usuario.Password = this.formLogin.value.password;    

    this.authService.login(this.usuario).subscribe(token => this.recibirToken(token),
    error => this.manejarError(error));


  }

  recibirToken(token) {
    localStorage.setItem('token', token.token);
    localStorage.setItem('tokenExpiration', token.expiration);
    this.router.navigate([""]);
  }

  manejarError(error) {
    if (error && error.error) {
      alert(error.error[""]);
    }
  }







}
