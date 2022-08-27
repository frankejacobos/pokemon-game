<template>
  <h1 v-if="!pokemon">One sec...</h1>
  <div v-else>
    <h1>Who's That Pokémon?</h1>
    <pokemon-picture
      :pokemonId="pokemon.id"
      :isHidden="!message"
    ></pokemon-picture>
    <pokemon-options
      :pokemons="pokemonsData"
      @select-pokemon="selectPokemon"
    ></pokemon-options>
    <template v-if="message">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="restart">Nuevo Juego</button>
    </template>
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";
import getPokemonOptions from "@/helpers/pokemonFuncions";

export default {
  name: "PokemonPage",
  components: { PokemonPicture, PokemonOptions },
  data() {
    return {
      pokemon: null,
      message: null,
      pokemonsData: [],
    };
  },
  methods: {
    async getData() {
      this.pokemonsData = await getPokemonOptions();
      this.pokemon = this.pokemonsData[Math.floor(Math.random() * 4)];
    },
    selectPokemon(id) {
      id === this.pokemon.id
        ? (this.message = "Correcto")
        : (this.message = "Incorrecto, era " + this.pokemon.name);
    },
    restart() {
      this.message = null;
      this.getData();
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style></style>