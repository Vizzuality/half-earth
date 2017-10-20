// The Boid class
import Vector from './vector'

class Boid {
  constructor (x, y, r, opts) {
    this.acceleration = new Vector(0, 0)
    // const angle = Math.random(TWO_PI)
    // this.velocity = new Vector(Math.cos(angle), Math.sin(angle))
    this.velocity = Vector.random2D()
    this.position = new Vector(x, y)
    this.r = r
    this.maxspeed = opts.maxspeed // Maximum speed
    this.maxforce = opts.maxforce // Maximum steering force
    this.target = new Vector(...opts.target)
    this.targetRate = opts.targetRate
    this.opts = opts
  }

  applyForce (force) {
    const { acceleration } = this
    // We could add mass here if we want A = F / M
    acceleration.add(force)
  }

  // We accumulate a new acceleration each time based on three rules
  flock (boids) {
    const sep = this.separate(boids) // Separation
    const ali = this.align(boids) // Alignment
    const coh = this.cohesion(boids) // Cohesion
    // Arbitrarily weight these forces
    sep.mult(this.opts.sep)
    ali.mult(this.opts.ali)
    coh.mult(this.opts.coh)
    // Add the force vectors to acceleration
    this.applyForce(sep)
    this.applyForce(ali)
    this.applyForce(coh)

    return this
  }

  // Method to update position
  update (boids) {
    const { velocity, position, acceleration, maxspeed } = this

    // compute flocking first
    this.flock(boids)

    // Update velocity
    velocity.add(acceleration)
    // Limit speed
    velocity.limit(maxspeed)
    position.add(velocity)
    // Reset accelertion to 0 each cycle
    acceleration.mult(0)

    // { position, velocity } are already up to date at this point
    return { position, velocity }
  }

  // A method that calculates and applies a steering force towards a target
  // STEER = DESIRED MINUS VELOCITY
  seek (target) {
    const { velocity, maxspeed, maxforce } = this
    let desired = Vector.sub(target, this.position) // A vector pointing from the position to the target
    // Scale to maximum speed
    desired.normalize()
    desired.mult(maxspeed)

    // Above two lines of code below could be condensed with new Vector setMag() method
    // Not using this method until Processing.js catches up
    // desired.setMag(maxspeed)

    // Steering = Desired minus Velocity
    const steer = Vector.sub(desired, velocity)
    steer.limit(maxforce) // Limit to maximum steering force

    return steer
  }

  // Separation
  // Method checks for nearby boids and steers away
  separate (boids) {
    const { position } = this

    const desiredseparation = 25.0
    let steer = new Vector(0, 0, 0)
    let count = 0
    // For every boid in the system, check if it's too close
    boids.forEach(other => {
      const d = Vector.dist(position, other.position)
      // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
      if (d > 0 && d < desiredseparation) {
        // Calculate vector pointing away from neighbor
        const diff = Vector.sub(position, other.position)
        diff.normalize()
        diff.div(d) // Weight by distance
        steer.add(diff)
        count++ // Keep track of how many
      }
    })
    // Average -- divide by how many
    if (count > 0) steer.div(count)

    // As long as the vector is greater than 0
    if (steer.mag() > 0) {
      // First two lines of code below could be condensed with new Vector setMag() method
      // Not using this method until Processing.js catches up
      // steer.setMag(maxspeed)

      // Implement Reynolds: Steering = Desired - Velocity
      steer.normalize()
      steer.mult(this.maxspeed)
      steer.sub(this.velocity)
      steer.limit(this.maxforce)
    }

    return steer
  }

  // Alignment
  // For every nearby boid in the system, calculate the average velocity
  align (boids) {
    const { position, maxspeed, velocity, maxforce } = this

    const neighbordist = 50
    const sum = new Vector(0, 0)
    let count = 0

    boids.forEach(other => {
      const d = Vector.dist(position, other.position)
      if (d > 0 && d < neighbordist) {
        sum.add(other.velocity)
        count++
      }
    })

    if (count > 0) {
      sum.div(count)
      // First two lines of code below could be condensed with new Vector setMag() method
      // Not using this method until Processing.js catches up
      // sum.setMag(maxspeed)

      // Implement Reynolds: Steering = Desired - Velocity
      sum.normalize()
      sum.mult(maxspeed)
      const steer = Vector.sub(sum, velocity)
      steer.limit(maxforce)
      return steer
    } else {
      return new Vector(0, 0)
    }
  }

  // Cohesion
  // For the average position (i.e. center) of all nearby boids, calculate steering vector towards that position
  cohesion (boids) {
    const { position } = this

    const neighbordist = 50
    const sum = new Vector(0, 0) // Start with empty vector to accumulate all positions
    let count = 0

    boids.forEach(other => {
      const d = Vector.dist(position, other.position)
      if (d > 0 && d < neighbordist) {
        sum.add(other.position) // Add position
        sum.add(this.target.mult(this.targetRate))
        count++
      }
    })

    if (count > 0) {
      sum.div(count)
      return this.seek(sum) // Steer towards the position
    } else {
      return new Vector(0, 0)
    }
  }
}

export default Boid
