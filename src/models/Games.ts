class Game {
  title: string
  category: string
  system: string
  description: string
  info: string[]
  image: string
  id: number
  constructor(
    title: string,
    category: string,
    system: string,
    description: string,
    info: string[],
    image: string,
    id: number
  ) {
    this.title = title
    this.category = category
    this.system = system
    this.description = description
    this.info = info
    this.image = image
    this.id = id
  }
}

export default Game
