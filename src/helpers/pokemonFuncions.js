import pokemonApi from "@/api/pokemonApi";

const getOrderedArray = (number) => {
  const orderedArray = Array.from(Array(number));
  return orderedArray.map((_, index) => index + 1);
};

const getPokemonsData = async ([a, b, c, d] = []) => {
  const [p1, p2, p3, p4] = await Promise.all([
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ]);
  return [
    { name: p1.data.name, id: p1.data.id },
    { name: p2.data.name, id: p2.data.id },
    { name: p3.data.name, id: p3.data.id },
    { name: p4.data.name, id: p4.data.id },
  ];
};

const getPokemonOptions = async () => {
  const mixedRandomIds = getOrderedArray(650).sort(() => 0.5 - Math.random());
  const pokemons = await getPokemonsData(mixedRandomIds.splice(0, 4));
  return pokemons;
};

export default getPokemonOptions;
