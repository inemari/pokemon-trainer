import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { StorageUtil } from 'src/app/utils/storage.util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) {}

  public get user(): User | undefined {
    return this.userService.user;
  }

  logout(): void {
    if (this.userService.user) {
      const { username } = this.userService.user;
      StorageUtil.localStorageDelete(username);
      this.userService.user = undefined;
      this.router.navigateByUrl('/login');
    }
  }
}
