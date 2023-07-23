import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-view-pokemon',
  templateUrl: './view-pokemon.component.html',
  styleUrls: ['./view-pokemon.component.css'],
})
export class ViewPokemonComponent implements OnInit {
  constructor(private pokemonesService: PokemonService) {}
  //totalPokemones: number = 12;
  //paginaActual = 1;
  //pokemonesPorPagina = 10;
  pokemones: any = [];

  ngOnInit(): void {
    this.cargarPokemones();
  }

  cargarPokemones() {
    this.pokemonesService
      .getPokemons('https://pokeapi.co/api/v2/pokemon?offset=150&limit=12')
      .subscribe((response: any) => {
        console.log(response.results.length);
        //this.totalPokemones = response.results.length;
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
  /*handlerChangeRangeValue(event: Event) {
    const inputRange = event.target as HTMLInputElement;
    this.pokemonesPorPagina = +inputRange.value;
  }*/
}
