import React from 'react'
import { Link } from 'react-router-dom'
import styles from './home-styles.scss'
import {
  default as PopUp,
  TextContent,
  VideoContent,
  ImageContent
} from 'components/pop-up'

const dummyText = {
  type: 'text',
  background:
    'https://i.pinimg.com/originals/94/e5/61/94e561fa304e3f477981cc494d84c647.jpg',
  image: 'img/bird.png',
  details: [
    { label: 'Area', value: '52ha' },
    { label: 'Established', value: '1985' }
  ],
  description:
    'Kenilworth Racecourse Conservation Area (KRCA) is a special protected area and a powerful example of urban conservation success. Bounded by a racecourse, the endangered Cape Flat Sands Fynbos vegetation type found in KRCA supports populations of birds, small mammals, and reptiles. The critically endangered Micro Frog can be found in this urban refugium. Friends of the Kenilworth Racecourse Conservation Area manages this reserve and conducts educational nature walks, weed and invasive species removal, and also collects seeds for the Millennium Seed Bank to ensure the survival of the rare vegetation found here.'
}

const dummyVideo = {
  type: 'video',
  background:
    'https://i.pinimg.com/originals/94/e5/61/94e561fa304e3f477981cc494d84c647.jpg',
  description:
    'Swooping over Botswana’s Okavango Delta, the white stork (Ciconia ciconia) observes the oasis beneath its wings.',
  video: 'http://media.w3.org/2010/05/bunny/movie.mp4'
}

const dummyImage = {
  type: 'image',
  background:
    'https://i.pinimg.com/originals/94/e5/61/94e561fa304e3f477981cc494d84c647.jpg',
  title: 'Madagascar',
  description:
    "Being very big, ancient, and tropical, Madagascar harbors a very large and unique fauna and flora, with 70 percent or more of its species found nowhere else... Examples of evolutionary radiation in Madagascar's animals are the may, yet closely related, species of lemurs (primitive primates), chameleons, vangid shrikes, ranid frogs, and among the twelve thousand species of plants, complex palms, orchids, baobabs, and cactus-like Didiereaceae."
}

const displayContent = () => {
  const types = [dummyText, dummyVideo, dummyImage]
  const i = parseInt(Math.random() * 10, 10) % 3
  const content = types[i]

  if (content.type === 'text') return <TextContent content={content} />
  if (content.type === 'video') return <VideoContent content={content} />
  if (content.type === 'image') return <ImageContent content={content} />
}

const Home = props => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>Getting To Half</h1>
    </div>
    <p className={styles.intro}>
      Half-Earth is a call-to-action to protect half the Earth’s land and sea.
      If we conserve half, we can protect 85% or more of species, including
      ourselves. By mapping data at the local, regional, and global scale, we’re
      identifying the places that contain the greatest diversity of life and
      telling the stories of the species that live there.
    </p>
    <div className={styles.cto}>
      <Link to="intro">Play</Link>
    </div>
    <PopUp>{displayContent()}</PopUp>
  </div>
)

export default Home
