import { Component } from '@angular/core';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private pokemonesService: PokemonService) {}
  pokemones: any = [];

  ngOnInit(): void {
    this.cargarPokemones();
  }

  cargarPokemones() {
    this.pokemonesService
      .getPokemons('https://pokeapi.co/api/v2/pokemon?offset=150&limit=12')
      .subscribe((response: any) => {
        console.log(response.results.length);
        this.pokemones = response.results;
      });
  }

  getId(pokemon: any): number {
    const url = pokemon.url;
    const array = url.split('/');
    const id = array[array.length - 2];
    return id;
  }
  getImageUrl(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }
}