import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/infra/auth/auth.service';
import { Router } from '@angular/router';
import { IUserController } from 'src/app/domain/interfaces/controllers/user/iuser-controller';
import { LoginFormValidatorService } from 'src/app/domain/usecases/user/validation/user-login-form-validator.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

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
    private loginFormValidator: LoginFormValidatorService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.signUpForm = this.createForm();
    this.signUpForm.addControl('name', this.fb.control(''));

    this.signInForm = this.createForm();
    this.loginFormValidator.setForm(this.signUpForm);
  }

  createForm() {
    return this.fb.group({
      email: ['', [Validators.email]],
      password: [''],
    });
  }

  create() {
    this.signUpForm.markAllAsTouched();
    this.userController.create(this.signUpForm.value).subscribe(
      (user: any) => this.createResponse(user),
      (err) => this.errorResponse(err)
    );
  }

  login() {
    this.userController.login(this.signUpForm.value).subscribe(
      (user: any) => this.loginResponse(user),
      (err) => this.errorResponse(err)
    );
  }

  createResponse(user: any) {
    if (user) {
      this.snackbar.open('Criado com sucesso', 'Fechar', {
        duration: 3000,
      });
      this.isLoginForm = !this.isLoginForm;
    } else {
      this.snackbar.open('Falha na conexão. Tente novamente!', 'Fechar', {
        duration: 3000,
      });
    }
  }

  errorResponse(error: HttpErrorResponse) {
    const msg = error.error.message || 'Falha na conexão. Tente novamente!';
    this.snackbar.open(msg, 'Fechar', {
      duration: 3000,
    });
  }

  loginResponse(user: any) {
    if (user) {
      this.authService.setCredentials(user);
      this.router.navigateByUrl('/home');
    } else {
      console.log('Usuário e/ou senha inválido. Tente novamente!');
    }
  }
}
