import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/classes/user';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;
  hide: boolean = false;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  public submit(): void {
    this.loginService.login(this.user).subscribe(
      (data: number) => {
        localStorage.setItem('userName', this.user.name);
        localStorage.setItem('personalToken', `${data}`);

        this.router.navigate(['/list']).then(() => { window.location.reload(); });
      },
      (error: Error) => {
        console.error("Error al realizar el acceso- login");
      }
    )
  }

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    } else {
      this.loginService.login(this.user).subscribe(
        (data: number) => {
          localStorage.setItem('userName', this.user.name);
          localStorage.setItem('personalToken', `${data}`);

          this.router.navigate(['/list']).then(() => { window.location.reload(); });
        },
        (error: Error) => {
          console.error("Error al realizar el acceso- login");
        }
      )
    }
    console.log(this.loginForm.value);
  }

}
