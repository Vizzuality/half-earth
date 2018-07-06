// The Flock (a list of Boid objects)

class Flock {
  constructor () {
    this.boids = []; // Initialize the ArrayList
  }

  run (renderBoid) {
    const { boids } = this;
    boids.map(boid => renderBoid(boid.update(boids)));
  }

  addBoid (b) {
    this.boids.push(b);
  }
}

export default Flock;
