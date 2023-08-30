import { Pokemon } from './pokemon.model';

export interface PokemonApiResponse {

    count: number;

    next: string | null;

    previous: string | null;

    results: Pokemon[];

}

