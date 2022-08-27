<template>
  <div class="pokemon-container">
    <img :src="pokemonSrc" class="hidden-pokemon" alt="pokemon" />
    <img v-if="!isHidden" :src="pokemonSrc" class="fade-in" alt="pokemon" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
      validator: function (value) {
        return value > 0 && value < 600;
      },
    },
    isHidden: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    pokemonSrc() {
      return (
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
        this.pokemonId +
        ".svg"
      );
    },
  },
};
</script>

<style scoped>
.pokemon-container {
  height: 200px;
}
img {
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  height: 200px;
  margin-left: -50vw;
  position: absolute;
  user-select: none;
  width: 100vw;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>
