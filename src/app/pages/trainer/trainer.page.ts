import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { StorageUtil } from 'src/app/utils/storage.util';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css'],
})
export class TrainerPage {
  constructor(private userService: UserService) {}

  get user(): User | undefined {
    return this.userService.user;
  }

  public get collected(): Pokemon[] {
    if (this.user) {
      const collectedPokemons = this.user.pokemon;

      if (sessionStorage) {

        const sessionPokemons =
          StorageUtil.sessionStorageRead<Pokemon[]>('pokemons');

        const pokemons: Pokemon[] = [];
        if (sessionPokemons !== undefined) {
          for (const collectedPokemonName of collectedPokemons) {
            const foundPokemon = sessionPokemons.find(
              (pokemon) => pokemon.name === collectedPokemonName
            );
            if (foundPokemon) {
              pokemons.push(foundPokemon);
            }
          }

          return pokemons;
        }
      }
    }
    return [];
  }
  ngOnInit(): void {
    this.collected;
  }
}
