import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserInfo } from 'src/app/models/IUserInfo';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  FormLogin: FormGroup;
  usuario: IUserInfo;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.FormLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.maxLength(250), Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  login() {
    if (this.FormLogin.invalid) {
      window.alert("Complete los campos");
      return;
    }
    this.usuario = new IUserInfo;
    this.usuario.email = this.FormLogin.value.email;    
    this.usuario.password = this.FormLogin.value.password;    

    console.log(this.usuario)
    //this.authService.login(this.usuario).subscribe(token => this.recibirToken(token),
    //error => this.manejarError(error));
    this.authService.login(this.usuario).subscribe( (data: any) =>{ 
      this.authService.setToken(data.token)
      this.router.navigateByUrl('carrito')
    
    })

  }

 







}
