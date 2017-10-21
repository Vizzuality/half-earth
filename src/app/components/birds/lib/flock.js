// The Flock (a list of Boid objects)

class Flock {
  constructor () {
    this.boids = [] // Initialize the ArrayList
  }

  run () {
    const { boids } = this
    boids.map(boid => {
      boid.update(boids)
      boid.render()
    })
  }

  addBoid (b) {
    this.boids.push(b)
    return b
  }
}

export default Flock
