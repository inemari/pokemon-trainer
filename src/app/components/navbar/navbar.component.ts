import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { StorageUtil } from 'src/app/utils/storage.util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    public userService: UserService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}
  logout(): void {
    if (this.userService.user) {
      const { username } = this.userService.user;
      StorageUtil.localStorageDelete(username);
      this.userService.user = undefined;
      this.router.navigateByUrl("/login")
    }
    // Add additional logic if needed
  }
}
