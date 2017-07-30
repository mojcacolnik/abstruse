import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

export interface IUser {
  id: number;
  email: string;
  fullname: string;
  admin: boolean;
  avatar: string;
}

export interface IUserPass {
  id: number;
  password: string;
  repeat_password;
}

@Component({
  selector: 'app-settings',
  templateUrl: 'app-settings.component.html'
})
export class AppSettingsComponent implements OnInit {
  loading: boolean;
  userSaved: boolean;
  user: IUser;
  userPasswordSaved: boolean;
  userPass: IUserPass;

  constructor(private api: ApiService, private auth: AuthService) { }

  ngOnInit() {
    const data: any = this.auth.getData();
    this.user = {
      id: data.id,
      email: data.email,
      fullname: data.fullname,
      admin: data.admin,
      avatar: data.avatar
    };

    this.userPass = {
      id: data.id,
      password: '',
      repeat_password: ''
    };
  }

  updateProfile(e: MouseEvent): void {
    e.preventDefault();

    this.api.updateUser(this.user).subscribe(event => {
      if (event) {
        this.userSaved = true;
        setTimeout(() => this.userSaved = false, 3000);
      }
    });
  }

  updatePassword(e: MouseEvent): void {
    e.preventDefault();

    this.api.updatePassword(this.userPass).subscribe(event => {
      if (event) {
        this.userPasswordSaved = true;
        setTimeout(() => this.userPasswordSaved = false, 3000);
        this.userPass.password = '';
        this.userPass.repeat_password = '';
      }
    });
  }
}