import Vector from './vector'
import Boid from './boid'
import { wrapAround, map } from './utils'

const sizeToColor = (s, v) => Math.round(v / s * 255)
const degreesToRadians = deg => 2 * Math.PI * deg / 360

function drawTri (ctx, side, cx, cy, r, color) {
  var h = side * (Math.sqrt(3) / 2)

  ctx.fillStyle = color
  ctx.save()
  ctx.translate(cx, cy)
  ctx.rotate(r)
  ctx.beginPath()
  ctx.moveTo(0, -h / 2)
  ctx.lineTo(-side / 2, h / 2)
  ctx.lineTo(side / 2, h / 2)
  ctx.lineTo(0, -h / 2)
  ctx.closePath()
  ctx.fill()

  ctx.restore()
}

class Bird extends Boid {
  constructor (options) {
    super(options)

    this.canvas = options.canvas
    this.context = this.canvas.context
    this.wrap = wrapAround(this.canvas.width, this.canvas.height, options.r)
    this.targetFactor = 0.35
    this.targets = options.targets
    this.setTarget(0)
    const minDistance = 10
    const minDistanceFactor = 0.1
    const maxDistance = 20
    const maxDistanceFactor = 0.5
    this.targetFactorScale = map(
      [minDistance, minDistanceFactor],
      [maxDistance, maxDistanceFactor]
    )
  }
  setTarget (idx) {
    this.targetIdx = idx
    if (!this.targets[this.targetIdx]) this.targetIdx = 0
    this.target = new Vector(...this.targets[this.targetIdx])
  }
  flock (boids) {
    super.flock(boids)
    const { targetFactor, target } = this
    const seek = this.seek(target).mult(targetFactor)
    this.applyForce(seek)
    return this
  }
  update (boids) {
    const d = Vector.dist(this.position, this.target)
    if (d < 25.0) this.setTarget(this.targetIdx + 1)
    super.update(boids)
  }
  calculateTargetForce () {
    const d = Vector.dist(this.position, this.target)
    this.targetFactor = this.targetFactorScale(d)
  }
  render () {
    const { canvas, position, velocity, r } = this
    const context = canvas.getContext('2d')
    const pos = position // wrap(position)
    const theta = velocity.heading() + degreesToRadians(90)
    const c = `rgb(${sizeToColor(canvas.width, pos.x)}, ${sizeToColor(
      canvas.height,
      pos.y
    )}, 255)`
    drawTri(context, r, position.x, position.y, theta, c)
  }
}

export default Bird
