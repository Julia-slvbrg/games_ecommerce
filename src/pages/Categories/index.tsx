import ProductsList from '../../components/ProductsList'
import Game from '../../models/Games'
import resident_evil from '../../assets/images/resident_evil.svg'
import fifa from '../../assets/images/fifa.svg'
import diablo from '../../assets/images/diablo.svg'
import jedi_survivor from '../../assets/images/jedi-survivor.svg'
import legend_of_zelda from '../../assets/images/legend-of-zelda.svg'
import street_fighter from '../../assets/images/street-fighter.svg'

const forSale: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4 - Remake',
    category: 'Ação',
    system: 'Windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    info: ['R$199,90', '-10%'],
    image: resident_evil
  },
  {
    id: 2,
    title: 'FIFA 23',
    category: 'Esporte',
    system: 'PS5',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    info: ['R$99,90', '-50%'],
    image: fifa
  },
  {
    id: 3,
    title: 'Resident Evil 4 - Remake',
    category: 'Ação',
    system: 'Windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    info: ['R$199,90', '-10%'],
    image: resident_evil
  },
  {
    id: 4,
    title: 'FIFA 23',
    category: 'Esporte',
    system: 'PS5',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    info: ['R$99,90', '-50%'],
    image: fifa
  }
]

const commingSoon: Game[] = [
  {
    id: 5,
    title: 'Diablo 4',
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    info: ['05/04'],
    image: diablo
  },
  {
    id: 6,
    title: 'Star Wars Jedi Survivor',
    category: 'Aventura',
    system: 'Windows',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    info: ['05/04'],
    image: jedi_survivor
  },
  {
    id: 7,
    title: 'Street Fighter 6',
    category: 'Luta',
    system: 'Windows',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    info: ['05/04'],
    image: street_fighter
  },
  {
    id: 8,
    title: 'The Legend of Zelda - TOK',
    category: 'RPG',
    system: 'Switch',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    info: ['05/04'],
    image: legend_of_zelda
  }
]

export const Categories = () => {
  return (
    <>
      <ProductsList games={forSale} title="RPG" $background="gray" />
      <ProductsList games={commingSoon} title="Ação" $background="black" />
      <ProductsList games={forSale} title="Aventura" $background="gray" />
      <ProductsList games={commingSoon} title="FPS" $background="black" />
    </>
  )
}

export default Categories
