import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
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

    this.authService.login(this.formLogin.value.email, this.formLogin.value.password).subscribe(res => console.log(res))


  }





}
