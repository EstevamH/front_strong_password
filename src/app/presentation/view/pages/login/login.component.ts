import { UserEntity } from './../../../../domain/entities/user-entity';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/infra/auth/auth.service';
import { Router } from '@angular/router';
import { IUserController } from 'src/app/domain/interfaces/controllers/user/iuser-controller';
import { LoginFormValidatorService } from 'src/app/domain/usecases/user/validation/user-login-form-validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  signUpForm: FormGroup;
  signInForm: FormGroup;

  hide = true;
  isLoginForm: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userController: IUserController,
    private loginFormValidator: LoginFormValidatorService
  ) {}

  ngOnInit() {
    this.signUpForm = this.createForm();
    this.signUpForm.addControl('name', this.fb.control(''));

    this.signInForm = this.createForm();
    this.loginFormValidator.setForm(this.signUpForm);
  }

  createForm() {
    return this.fb.group({
      email: [''],
      password: [''],
    });
  }

  create() {
    this.signUpForm.markAllAsTouched();
    this.userController.create(this.signUpForm.value).subscribe(
      (user: UserEntity) => this.createResponse(user),
      (err) => console.log(err)
    );
  }

  login() {
    this.userController.login(this.signUpForm.value).subscribe(
      (user: UserEntity) => this.loginResponse(user),
      (err) => console.log(err)
    );
  }

  createResponse(user: UserEntity) {
    if (user) {
      console.log('Criado com sucesso');
      this.isLoginForm = !this.isLoginForm;
    } else {
      console.log('Falha na conexão. Tente novamente!');
    }
  }

  loginResponse(user: UserEntity) {
    if (user) {
      this.authService.setCredentials(user);
      this.router.navigateByUrl('/home');
    } else {
      console.log('Usuário e/ou senha inválido. Tente novamente!');
    }
  }
}
