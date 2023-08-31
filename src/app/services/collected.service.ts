import { Injectable } from '@angular/core';
import { PokemonCatalogService } from './pokemon-catalog.service';
import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { User } from '../models/user.model';
<<<<<<< HEAD
import { Observable, tap } from 'rxjs';
=======
import { Observable, finalize, tap } from 'rxjs';
>>>>>>> ff3764bca228100045704c7519cefc7ee1785b6c

const { apiKey, apiUsers } = environment

@Injectable({
  providedIn: 'root'
})
export class CollectedService {

<<<<<<< HEAD
  constructor(
    private http: HttpClient,
    private readonly pokemonService: PokemonCatalogService,
=======
  private _loading: boolean = false;

  get loading(): boolean {
    return this._loading;
  }

  constructor(
    private http: HttpClient,
    private readonly pokemonsService: PokemonCatalogService,
>>>>>>> ff3764bca228100045704c7519cefc7ee1785b6c
    private readonly userService: UserService
  ) { }

  public collectPokemon(pokemonName: string): Observable<User> {
    if(!this.userService.user) {
      throw new Error('User not logged in')
    }

    const user: User = this.userService.user
<<<<<<< HEAD
    const pokemon: Pokemon | undefined = this.pokemonService.findPokemonByName(pokemonName)

    if(!pokemon) {
      throw new Error('collectPokemon: Pokemon not found ' + pokemonName)
=======
    const pokemon: Pokemon | undefined = this.pokemonsService.findPokemonByName(pokemonName)

    if(!pokemon) {
      throw new Error('collectPokemon: Pokemon not found' + pokemonName)
>>>>>>> ff3764bca228100045704c7519cefc7ee1785b6c
    }

    if(this.userService.isCollected(pokemonName)) {
      this.userService.releasePokemon(pokemonName);
    } else {
<<<<<<< HEAD
      this.userService.collectPokemon(pokemonName);
=======
      this.userService.collectPokemon(pokemon);
>>>>>>> ff3764bca228100045704c7519cefc7ee1785b6c
    }

  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': apiKey
  })
<<<<<<< HEAD
=======
    
  this._loading = true;
>>>>>>> ff3764bca228100045704c7519cefc7ee1785b6c

  return this.http.patch<User>(`${apiUsers}/${user.id}`, {
    pokemon: [...user.pokemon]
  }, {
    headers
  })
  .pipe(
    tap((updatedUser: User) => {
      this.userService.user = updatedUser;
<<<<<<< HEAD
    }))
=======
    }),
    finalize(() => this._loading = false)
  )
>>>>>>> ff3764bca228100045704c7519cefc7ee1785b6c
}
}