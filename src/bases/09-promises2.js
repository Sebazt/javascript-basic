import { getHeroById } from './bases/08-impo-exp2'


const getHeroByIdAsync = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const hero = getHeroById(id)

      if (hero) {
        res(hero)
      } else {
        rej('No existe un heroe chavalillo')
      }

    }, 1500);

  });

}

getHeroByIdAsync(3)
  .then(h => {
    console.log(`El heroe es ${h.name}`)})
  .catch(err => console.log(err))
