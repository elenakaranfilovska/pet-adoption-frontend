import { Component, OnInit } from '@angular/core';
import { CurrentUser } from '../../../model/CurrentUser';
import { TokenStorageService } from '../../token-storage.service';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  currentUser: CurrentUser;
  error: String;
  token: string

  constructor(private tokenService: TokenStorageService,
    private authService: AuthService,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.currentUser = this.tokenService.getUser();
      this.token = this.tokenService.getToken();
    }
  }

  onEditUser() {
    this.authService.editProfile(this.currentUser)
      .subscribe(
        succ => {
          this.tokenService.saveToken(this.token);
          this.router.navigate(['/profile']);
        }, error => {
          this.error = error.error;
        });
  }
}