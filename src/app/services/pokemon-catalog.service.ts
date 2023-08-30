import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { finalize } from 'rxjs';
import { PokemonApiResponse } from '../models/Pokemon-api-response';
const { apiPokemons } = environment;

@Injectable({
  providedIn: 'root'
})
export class PokemonCatalogService {

  private _pokemons: Pokemon[] = [];
  private _error: string = "";
  private _loading: boolean = false;

  get pokemons(): Pokemon[] {
    return this._pokemons;
  }
  get loading(): boolean {
    return this._loading;
  }

  get error(): string {
    return this._error;
  }

  constructor(private readonly http: HttpClient) { }


  public findAllPokemon(): void {
    this._loading = true;
    this.http.get<PokemonApiResponse>(apiPokemons)

      .pipe(
        finalize(() => {
          this._loading = false;
        }))
      .subscribe({
        next: (response: PokemonApiResponse) => {
          this._pokemons = response.results;
        },

        error: (error: HttpErrorResponse) => {
          this._error = error.message;
        }
      })
  }

    public findPokemonByName(name: string): Pokemon | undefined {
      return this._pokemons.find((pokemon: Pokemon) => pokemon.name === name);
    }

}
