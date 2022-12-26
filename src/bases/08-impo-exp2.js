import superHeroes from '../data/heroes'

export const getHeroById = (id) => {
  return superHeroes.find(hero => hero.id === id)
}

console.log(getHeroById(2));

export const getHeroesByOwner = (data) => {
  const newHeroes = superHeroes.filter(hero => hero.owner === data)
  return newHeroes
}

console.log(getHeroesByOwner('DC'))


