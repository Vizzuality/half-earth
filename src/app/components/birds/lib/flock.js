// The Flock (a list of Boid objects)

class Flock {
  constructor () {
    this.boids = [] // Initialize the ArrayList
  }

  run (renderBoid) {
    const { boids } = this
    boids.map((boid, i) => renderBoid(boid.update(boids), boid.i))
  }

  addBoid (b, i) {
    b.i = i
    this.boids.push(b)
  }
}

export default Flock
