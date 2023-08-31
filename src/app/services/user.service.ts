import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { StorageUtil } from '../utils/storage.util';
import { StorageKeys } from '../consts/storage-keys.enum';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user?: User;

  public get user(): User | undefined {
    return this._user;
  }

  public set user(user: User | undefined) {
    StorageUtil.localStorageSave<User>(StorageKeys.User, user!);
    this._user = user;
  }

  constructor() {
    this._user = StorageUtil.localStorageRead<User>(StorageKeys.User);
  }


    public isCollected(pokemon: string): boolean {
    if (this._user) {
      return Boolean(this._user?.pokemon.find(p => p === pokemon));
    }
    return false;
  } 

  public releasePokemon(pokemon: string): void {
    if (this._user) {
      this._user.pokemon = this._user.pokemon.filter(p => p!== pokemon);
    }
  }
  
  public collectPokemon(pokemon: string): void {
    if (this._user) {
      this._user.pokemon.push(pokemon);
    }
  }

}

