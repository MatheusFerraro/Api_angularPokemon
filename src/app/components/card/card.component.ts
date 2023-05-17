import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/modules/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:PokemonData = {
    id:0,
    name:'',
    sprites:{
      front_default:''
    },
    types:[]
  }
  

  constructor(private service:PokemonService) { }

  ngOnInit(): void {
    this.getPokemon('bulbasaur')
  }

  getPokemon(searchName:string){
    this.service.getPokemon(searchName).subscribe({
      next:(res) => {

        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types
        }
      }, 
      error: (err) => console.log(err)
    })

  }


}
