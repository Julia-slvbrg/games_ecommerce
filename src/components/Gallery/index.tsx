import Section from '../Section'
import zoom from '../../assets/images/zoom.svg'
import play from '../../assets/images/play_btn.svg'
import resident_evil from '../../assets/images/resident_evil.svg'
import legend_of_zelda from '../../assets/images/legend-of-zelda.svg'
import close from '../../assets/images/close.svg'
import { Action, Item, Items, Modal, ModalContent } from './styles'
import { useState } from 'react'

interface GalleryType {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryType[] = [
  {
    type: 'image',
    url: resident_evil
  },
  {
    type: 'image',
    url: legend_of_zelda
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=z6d9ct7ea8L3DjmF" title="YouTube video player'
  }
]

type Props = {
  defaultCover: string
  name: string
}

interface ModalState extends GalleryType {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryType) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GalleryType) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" $background="black">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={index}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={close}
              alt="Ícone de fechar"
              onClick={() => closeModal()}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe style={{ border: 'none' }} src={modal.url} />
          )}
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Gallery
