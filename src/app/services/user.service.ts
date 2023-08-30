import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { StorageUtil } from '../utils/storage.util';
import { StorageKeys } from '../consts/storage-keys.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   private _user?: User; 

    get user(): User | undefined { 
      return this._user;
    }

    set user(user: User | undefined) {
      StorageUtil.storageSave<User>(StorageKeys.User, user!);
      this._user = user;
    }

    constructor(private readonly http: HttpClient) {
      this._user = StorageUtil.storageRead<User>(StorageKeys.User);
    } 

}