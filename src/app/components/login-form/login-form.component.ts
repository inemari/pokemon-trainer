import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  @Output() login: EventEmitter<void> = new EventEmitter();
  loading = false; // Initialize the loading state

  constructor(
    private readonly loginService: LoginService,
    private readonly userService: UserService
  ) { }

  public loginSubmit(loginForm: NgForm): void {
    const { username } = loginForm.value;
    this.loading = true; // Set loading to true when submitting the form

    this.loginService.login(username).subscribe({
      next: (user: User) => {
        
        setTimeout(() => {
          this.userService.user = user;
          this.loading = false; // Once the process is complete, reset the loading state
          this.login.emit();
        }); 
      },
      error: (err: any) => {
        this.loading = false; // Reset loading state in case of an error
      },
    });
  }
}
