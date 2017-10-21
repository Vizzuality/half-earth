import { Component } from 'react'

import Flock from './lib/flock'
import Bird from './cesium-bird'

export const map = function ([istart, istop], [ostart, ostop]) {
  return value =>
    ostart + (ostop - ostart) * ((value - istart) / (istop - istart))
}

class Birds extends Component {
  constructor (props) {
    super(props)
    // const inc = 2
    this.flock = new Flock()
    this.flock.run = this.flock.run.bind(this.flock)
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
      viewer.clock.onTick.addEventListener(this.flock.run)
      this.ontick = true
    }
    if (!this.entities) {
      const {
        numBirds,
        targets,
        north,
        south,
        east,
        west,
        position,
        colorBlendMode,
        colorBlendAmount,
        pixelSize
      } = this.props

      let maxspeed = 1
      let maxforce = 0.03
      let separationFactor = 1.5
      let alignmentFactor = 1.0
      let cohesionFactor = 0.8
      let velocityFactor = 1.0
      let targetFactor = 0.35 // .35

      const w = 1000
      const latScale = map([0, w], [west, east])
      const longScale = map([0, w], [north, south])

      const tLatScale = map([west, east], [0, w])
      const tLongScale = map([north, south], [0, w])

      const nTargets = targets.map(t => [tLatScale(t[0]), tLongScale(t[1])])

      this.entities = new Array(Number(numBirds)).fill(0).map((v, i) => {
        this.flock.addBoid(
          new Bird({
            maxspeed,
            r: pixelSize,
            velocityFactor,
            maxforce,
            targetFactor,
            targets: nTargets,
            north,
            south,
            east,
            west,
            position: [tLatScale(position[0]), tLongScale(position[1])],
            colorBlendMode,
            colorBlendAmount,
            viewer,
            pixelSize,
            separationFactor,
            alignmentFactor,
            cohesionFactor,
            latScale,
            longScale,
            tLatScale,
            tLongScale
          })
        )
      })
    }
  }

  render () {
    return false
  }
}

export default Birds
