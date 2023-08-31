import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonCatalogService } from 'src/app/services/pokemon-catalog.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './pokemon-catalog.page.html',
  styleUrls: ['./pokemon-catalog.page.css']
})
export class CatalogPage implements OnInit {

  public isDataLoaded: boolean = false;
  private _pokemons: Pokemon[] = this.pokemonCatalogService.pokemons;

  get pokemons(): Pokemon[] {
    return this.pokemonCatalogService.pokemons;
  }

  get loading(): boolean {
    return this.pokemonCatalogService.loading;
  }

  get error(): string {
    return this.pokemonCatalogService.error;
  }


  constructor(
    private readonly pokemonCatalogService: PokemonCatalogService
  ) { }

  ngOnInit(): void {
    this.pokemonCatalogService.findAllPokemon().subscribe(
      (data: Pokemon[]) => {
      this._pokemons = data;
      this.isDataLoaded = true;
    },
    (error: any) => {
      throw new Error("Error fetching Pokemon data: ", error);
      this.isDataLoaded = true;
    });
  }

}
