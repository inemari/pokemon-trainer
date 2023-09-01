import { Injectable } from '@angular/core';
import { PokemonCatalogService } from './pokemon-catalog.service';
import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { User } from '../models/user.model';
import { Observable, tap } from 'rxjs';

const { apiKey, apiUsers } = environment

@Injectable({
  providedIn: 'root'
})
export class CollectedService {

  constructor(
    private http: HttpClient,
    private readonly pokemonService: PokemonCatalogService,
    private readonly userService: UserService
  ) { }

  public collectPokemon(pokemonName: string): Observable<User> {
    if(!this.userService.user) {
      throw new Error('User not logged in')
    }

    const user: User = this.userService.user
    const pokemon: Pokemon | undefined = this.pokemonService.findPokemonByName(pokemonName)

    if(!pokemon) {
      console.log("Pokemons:", pokemon)
      throw new Error('collectPokemon: Pokemon not found ' + pokemonName)
    }
    console.log("release Pokemon")
    if(this.userService.isCollected(pokemonName)) {
      
      this.userService.releasePokemon(pokemonName);
    } else {
      this.userService.collectPokemon(pokemonName);
    }

  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': apiKey
  })

  return this.http.patch<User>(`${apiUsers}/${user.id}`, {
    pokemon: [...user.pokemon]
  }, {
    headers
  })
  .pipe(
    tap((updatedUser: User) => {
      this.userService.user = updatedUser;
    }))
}
}