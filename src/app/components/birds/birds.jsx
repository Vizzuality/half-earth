import { Component } from 'react'

import Flock from './lib/flock'
import Boid from './lib/boid'
const { Cesium } = window

// we-e, n-s
const north = 7.8621481
const south = -34.5355066
const east = 34.898694
const west = 17.330078

const start = [22.8888689, -19.1014986, 1000]
// const start = [32.980262, -2.898339, 1000]
const target = [21.814053, -33.583702]
const fence = -30.945565

const w = 100
const h = 100
const r = 2.0
// const wrap = wrapAround(w, h, r)
const flock = new Flock()
const maxspeed = 0.07
const maxforce = 0.03
const targetRate = 0.99
const opts = {
  sep: 1.5, // Separation
  ali: 1.0, // Alignment
  coh: 1.0 // Cohesion
}

var linScale = function ([istart, istop], [ostart, ostop]) {
  return function scale (value) {
    return ostart + (ostop - ostart) * ((value - istart) / (istop - istart))
  }
}
// const inc = 2
const latScale = linScale([0, w], [west, east])
const longScale = linScale([0, h], [north, south])

const tLatScale = linScale([west, east], [0, w])
const tLongScale = linScale([north, south], [0, h])

class Birds extends Component {
  constructor (props) {
    super(props)
    const { numBirds } = props
    const tVector = [tLatScale(target[0]), tLongScale(target[1])]
    this.birds = new Array(Number(numBirds)).fill(0).map((v, i) => {
      flock.addBoid(
        new Boid(
          tLatScale(start[0]),
          tLongScale(start[1]),
          r,
          maxspeed,
          maxforce,
          tVector,
          targetRate,
          opts
        ),
        i
      )
      return {
        id: `bird-${i}`,
        image: '/img/bird.png',
        width: 10,
        height: 10
      }
    })
  }
  componentWillReceiveProps (props) {
    const { viewer } = props
    if (!viewer) return
    if (!this.viewer) this.viewer = viewer

    if (!this.ontick) {
      viewer.clock.onTick.addEventListener(this.draw)
      this.ontick = true
    }

    if (!this.entities) {
      this.entities = this.birds.map(bird => {
        return viewer.entities.add({
          position: Cesium.Cartesian3.fromDegrees(...start),
          id: bird.id,
          model: {
            uri: '/img/triangulos.glb',
            minimumPixelSize: 10
          }
        })
      })
    }
  }
  draw = () => {
    // this.entities.map(entity => {
    // })
    flock.run(({ position, velocity }, i) => {
      const entity = this.entities[i]
      if (!entity.position) return
      const { x, y } = position
      entity.position = Cesium.Cartesian3.fromDegrees(latScale(x), longScale(y)) // { x: x + 1000, y: y + 1000, z }

      if (
        longScale(y) < fence ||
        latScale(x) < west ||
        latScale(x) > east ||
        longScale(y) > north
      ) {
        entity.show = false
      }
      // this.birds[i].position = [latScale(position.x), longScale(position.y)]
      // this.forceUpdate()
      // this.frame({ position: wrap(position), velocity, r })
    })
  }
  frame = ({ position, velocity, r }) => {}
  render () {
    return false
  }
}

export default Birds
