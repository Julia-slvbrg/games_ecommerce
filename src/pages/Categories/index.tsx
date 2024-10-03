import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'

export const Categories = () => {
  const [actionGames, setActionGames] = useState<Game[]>([])
  const [sportGames, setSportGames] = useState<Game[]>([])
  const [simulationGames, setSimulationGames] = useState<Game[]>([])
  const [fightGames, setFightGames] = useState<Game[]>([])
  const [RPGGames, setRPGGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setActionGames(res))
  }, [])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setSportGames(res))
  }, [])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setSimulationGames(res))
  }, [])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setFightGames(res))
  }, [])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setRPGGames(res))
  }, [])

  return (
    <>
      <ProductsList games={RPGGames} title="RPG" $background="black" />
      <ProductsList games={actionGames} title="Ação" $background="gray" />
      <ProductsList games={sportGames} title="Aventura" $background="black" />
      <ProductsList games={fightGames} title="Luta" $background="gray" />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        $background="black"
      />
    </>
  )
}

export default Categories
