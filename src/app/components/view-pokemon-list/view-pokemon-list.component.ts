import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-view-pokemon-list',
  templateUrl: './view-pokemon-list.component.html',
  styleUrls: ['./view-pokemon-list.component.css']
})
export class ViewPokemonListComponent implements OnInit {
  constructor(private pokemonesService: PokemonService) {}
  totalPokemones: number = 1000;
  paginaActual = 1;
  pokemonesPorPagina = 40;
  pokemones: any = [];

  ngOnInit(): void {
    this.cargarPokemones();
  }

  cargarPokemones() {
    this.pokemonesService
      .getPokemons('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000')
      .subscribe((response: any) => {
        console.log(response.results.length);
        this.totalPokemones = response.results.length;
        this.pokemones = response.results;
        this.getPokemonTypes();
      });
  }

  getId(pokemon: any): number {
    const url = pokemon.url;
    const array = url.split('/');
    const id = array[array.length - 2];
    return id;
  }
  getPokemonTypes() {
    this.pokemones.forEach((pokemon: any) => {
      const id = this.getId(pokemon);
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon-form/${id}/`;
      this.pokemonesService.getPokemons(pokemonUrl)
        .subscribe((pokemonData: any) => {
          const types = pokemonData.types.map((typeInfo: any) => typeInfo.type.name);
          pokemon.types = types;
        });
    });
  }

  getType(pokemon: any): string {
    return pokemon.types ? pokemon.types.join(', ') : 'Unknown';
  }
  getImageUrl(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }
  handlerChangeRangeValue(event: Event) {
    const inputRange = event.target as HTMLInputElement;
    this.pokemonesPorPagina = +inputRange.value;
  }
}
