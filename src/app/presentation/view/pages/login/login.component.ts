import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { IUserRepository } from '../../../../domain/interfaces/repository/iuser-repository';
import { AuthService } from 'src/app/infra/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title = 'strong-password';
  signUpForm: FormGroup;
  signInForm: FormGroup;
  containerClass = 'container';
  hide = true;

  constructor(
    private repository: IUserRepository,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.signInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  setContainerStyle(style: string) {
    const clss = 'container';
    this.containerClass = `${clss} ${style}`;
  }

  getContainerStyle() {
    return this.containerClass;
  }

  create() {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }
    this.repository.create(this.signUpForm.getRawValue()).subscribe(
      (response) => {
        this.snackbar.open('Cadastro realizado com sucesso!', 'Fechar', {
          duration: 3000,
        });
        this.setContainerStyle('');
      },
      (err) => {
        const { error } = err;
        this.snackbar.open(
          `${error.message || 'Falha de Conexão. Tente Novamente'}`,
          'Fechar',
          {
            duration: 4500,
          }
        );
      }
    );
  }

  login() {
    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
      return;
    }

    this.repository.login(this.signInForm.getRawValue()).subscribe(
      (user: any) => {
        this.authService.setCredentials(user);
        this.router.navigateByUrl('/home');
      },
      (err) => {
        const { error } = err;
        this.snackbar.open(
          `${error.message || 'Falha de Conexão. Tente Novamente'}`,
          'Fechar',
          {
            duration: 3000,
          }
        );
      }
    );
  }

  getErrorMessage(control: AbstractControl) {
    switch (control.invalid) {
      case control.hasError('required'): {
        return 'Campo obrigatório';
      }
      case control.hasError('email'): {
        return 'Email inválido';
      }
    }
  }
}
