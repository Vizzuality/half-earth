// The Boid class
import Vector from './vector';

class Boid {
  constructor(options) {
    const {
      position,
      r,
      maxspeed = 1,
      maxforce = 0.03,
      separationFactor = 1.5,
      alignmentFactor = 1.0,
      cohesionFactor = 1.0,
      velocityFactor = 1.0
    } = options;

    this.acceleration = new Vector(0, 0);
    this.velocity = Vector.random2D();
    this.position = new Vector(position[0], position[1]);
    this.r = r;
    this.maxspeed = maxspeed;
    // Maximum speed
    this.maxforce = maxforce;
    // Maximum steering force
    this.separationFactor = separationFactor;
    this.alignmentFactor = alignmentFactor;
    this.cohesionFactor = cohesionFactor;
    this.velocityFactor = velocityFactor;
  }

  applyForce(force) {
    const { acceleration } = this;
    // We could add mass here if we want A = F / M
    acceleration.add(force);
  }

  // We accumulate a new acceleration each time based on three rules
  flock(boids) {
    const { separationFactor, alignmentFactor, cohesionFactor } = this;
    const sep = this.separate(boids).mult(separationFactor);
    // Separation
    const ali = this.align(boids).mult(alignmentFactor);
    // Alignment
    const coh = this.cohesion(boids).mult(cohesionFactor);

    // Cohesion
    // Add the force vectors to acceleration
    this.applyForce(sep);
    this.applyForce(ali);
    this.applyForce(coh);

    return this;
  }

  // Method to update position
  update(boids) {
    const { velocity, position, acceleration, maxspeed, velocityFactor } = this;

    // compute flocking first
    this.flock(boids);

    // Update velocity
    velocity.add(acceleration);
    // Limit speed
    velocity.limit(maxspeed);
    position.add(velocity.mult(velocityFactor));
    // Reset accelertion to 0 each cycle
    acceleration.mult(0);
  }

  // A method that calculates and applies a steering force towards a target
  // STEER = DESIRED MINUS VELOCITY
  seek(to) {
    const { velocity, maxspeed, maxforce } = this;
    // A vector pointing from the position to the target
    let desired = Vector.sub(to, this.position);
    // Scale to maximum speed
    desired.setMag(maxspeed);

    // Steering = Desired minus Velocity
    const steer = Vector.sub(desired, velocity);
    steer.limit(maxforce);

    // Limit to maximum steering force
    return steer;
  }

  // Separation
  // Method checks for nearby boids and steers away
  separate(boids) {
    const { position } = this;

    const desiredseparation = 25.0;
    let steer = new Vector(0, 0, 0);
    let count = 0;
    // For every boid in the system, check if it's too close
    boids.forEach(other => {
      const d = Vector.dist(position, other.position);
      // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
      if (d > 0 && d < desiredseparation) {
        // Calculate vector pointing away from neighbor
        const diff = Vector.sub(position, other.position);
        diff.normalize();
        diff.div(d);
        // Weight by distance
        steer.add(diff);
        count++; // Keep track of how many
      }
    });
    // Average -- divide by how many
    if (count > 0) steer.div(count);

    // As long as the vector is greater than 0
    if (steer.mag() > 0) {
      // First two lines of code below could be condensed with new Vector setMag() method
      // Not using this method until Processing.js catches up
      // steer.setMag(maxspeed)
      // Implement Reynolds: Steering = Desired - Velocity
      steer.normalize();
      steer.mult(this.maxspeed);
      steer.sub(this.velocity);
      steer.limit(this.maxforce);
    }

    return steer;
  }

  // Alignment
  // For every nearby boid in the system, calculate the average velocity
  align(boids) {
    const { position, maxspeed, velocity, maxforce } = this;

    const neighbordist = 50;
    const sum = new Vector(0, 0);
    let count = 0;

    boids.forEach(other => {
      const d = Vector.dist(position, other.position);
      if (d > 0 && d < neighbordist) {
        sum.add(other.velocity);
        count++;
      }
    });

    if (count > 0) {
      sum.div(count);
      // First two lines of code below could be condensed with new Vector setMag() method
      // Not using this method until Processing.js catches up
      // sum.setMag(maxspeed)
      // Implement Reynolds: Steering = Desired - Velocity
      sum.normalize();
      sum.mult(maxspeed);
      const steer = Vector.sub(sum, velocity);
      steer.limit(maxforce);
      return steer;
    } else {
      return new Vector(0, 0);
    }
  }

  // Cohesion
  // For the average position (i.e. center) of all nearby boids, calculate steering vector towards that position
  cohesion(boids) {
    const { position } = this;

    const neighbordist = 50;
    const sum = new Vector(0, 0);
    // Start with empty vector to accumulate all positions
    let count = 0;

    boids.forEach(other => {
      const d = Vector.dist(position, other.position);
      if (d > 0 && d < neighbordist) {
        sum.add(other.position);
        // Add position
        count++;
      }
    });

    if (count > 0) {
      sum.div(count);
      return this.seek(sum); // Steer towards the position
    } else {
      return new Vector(0, 0);
    }
  }
}

export default Boid;
