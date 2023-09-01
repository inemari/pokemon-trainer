import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly userService: UserService
  ) { }

  ngOnInit(): void {
    if (this.userService.user) {
      this.router.navigateByUrl('/catalog');

    }
  }

  handleLogin(): void {
    this.router.navigateByUrl('/catalog');

  }
}
