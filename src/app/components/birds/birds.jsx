import { Component } from 'react'

import Flock from './lib/flock'
import Boid from './lib/boid'
const { Cesium } = window

const start = [22.8888689, -19.1014986, 1000]
// const start = [32.980262, -2.898339, 1000]
const fence = -30.945565

const w = 100
const h = 100
const r = 2.0
// const wrap = wrapAround(w, h, r)
const flock = new Flock()

var linScale = function ([istart, istop], [ostart, ostop]) {
  return function scale (value) {
    return ostart + (ostop - ostart) * ((value - istart) / (istop - istart))
  }
}

class Birds extends Component {
  constructor (props) {
    super(props)
    const { numBirds, target, north, south, east, west } = props
    // const inc = 2
    this.latScale = linScale([0, w], [west, east])
    this.longScale = linScale([0, h], [north, south])

    this.tLatScale = linScale([west, east], [0, w])
    this.tLongScale = linScale([north, south], [0, h])

    const opts = {
      maxspeed: Number(props.maxspeed) || 0.07,
      maxforce: Number(props.maxforce) || 0.03,
      targetRate: Number(props.targetRate) || 0.99,
      sep: Number(props.sep) || 1.5, // Separation
      ali: Number(props.ali) || 1.0, // Alignment
      coh: Number(props.coh) || 1.0, // Cohesion,
      target: [this.tLatScale(target[0]), this.tLongScale(target[1])]
    }

    this.birds = new Array(Number(numBirds)).fill(0).map((v, i) => {
      flock.addBoid(
        new Boid(this.tLatScale(start[0]), this.tLongScale(start[1]), r, opts),
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

  componentWillUnmount () {
    const { viewer } = this.props
    viewer.entities.removeAll()
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
            minimumPixelSize: props.pixelSize
          }
        })
      })
    }
  }

  draw = () => {
    // this.entities.map(entity => {
    // })
    flock.run(({ position, velocity }, i) => {
      const { west, east, north, viewer } = this.props
      const entity = this.entities[i]
      if (!entity || !entity.position) return
      const { x, y } = position
      entity.position = Cesium.Cartesian3.fromDegrees(
        this.latScale(x),
        this.longScale(y)
      ) // { x: x + 1000, y: y + 1000, z }
      if (!entity.show) viewer.entities.remove(entity)
      if (
        this.longScale(y) < fence ||
        this.latScale(x) < west ||
        this.latScale(x) > east ||
        this.longScale(y) > north
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
