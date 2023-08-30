import { Component, OnInit } from '@angular/core';
// import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css']
})
export class TrainerPage /*implements OnInit*/ {

/*   collectedPokemon: Pokemon[] = [];

  constructor(private PokemonService: PokemonService) {}

  ngOnInit(): void {
      this.fetchCollectedPokemons();
  }

  fetchCollectedPokemons(): void {
    this.PokemonService.getPokemonList().subscribe((pokemonList) => {

      this.collectedPokemon = pokemonList.filter((pokemon)) => pokemon.collected);
    }); */
}
