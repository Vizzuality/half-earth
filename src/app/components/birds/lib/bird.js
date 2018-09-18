import Vector from './vector';
import Boid from './boid';
import { map } from './utils';

class Bird extends Boid {
  constructor(options) {
    super(options);
    if (options.targets) {
      this.targetFactor = options.targetFactor || 0.35;
      this.targets = options.targets;
      this.setTarget(0);

      this.minDistance = options.minDistance || 10;
      this.maxDistance = options.maxDistance || 20;
      this.minDistanceFactor = options.minDistanceFactor || 0.1;
      this.maxDistanceFactor = options.maxDistanceFactor || 0.5;

      this.targetFactorScale = map([ this.minDistance, this.maxDistance ], [
        this.minDistanceFactor,
        this.maxDistanceFactor
      ]);
    }
  }

  setTarget(idx) {
    this.targetIdx = idx;
    if (!this.targets[this.targetIdx]) this.targetIdx = 0;
    this.target = new Vector(...this.targets[this.targetIdx]);
  }

  flock(boids) {
    super.flock(boids);
    const { targetFactor, target } = this;
    if (this.targets) {
      const seek = this.seek(target).mult(targetFactor);
      this.applyForce(seek);
    }
    return this;
  }

  update(boids) {
    if (this.targets) {
      const d = Vector.dist(this.position, this.target);
      if (d < 25.0) this.setTarget(this.targetIdx + 1);
      // this.calculateTargetForce()
    }
    super.update(boids);
  }

  calculateTargetForce() {
    const d = Vector.dist(this.position, this.target);
    this.targetFactor = this.targetFactorScale(d) / 50;
  }
}

export default Bird;
