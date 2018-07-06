import { Component } from 'react';

import Flock from './lib/flock';
import Bird from './cesium-bird';

export const map = function ([istart, istop], [ostart, ostop]) {
  return value =>
    ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
};

class Birds extends Component {
  constructor (props) {
    super(props);
    // const inc = 2
    this.flock = new Flock();
    this.flock.run = this.flock.run.bind(this.flock);
  }

  componentWillUnmount () {
    const { viewer } = this.props;
    this.birds.map(bird => {
      viewer.entities.remove(bird.entity);
    });
  }

  componentWillReceiveProps (props) {
    const { viewer } = props;
    if (!viewer) return;
    if (!this.viewer) this.viewer = viewer;
    if (!this.ontick) {
      viewer.clock.onTick.addEventListener(this.flock.run);
      this.ontick = true;
    }
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
      pixelSize,
      separationFactor,
      crop
    } = this.props;

    if (!this.birds) {
      let maxspeed = this.props.maxspeed || 2.5;
      let maxforce = this.props.maxforce || 0.03;
      let alignmentFactor = this.props.alignmentFactor || 1.0;
      let cohesionFactor = this.props.cohesionFactor || 0.8;
      let velocityFactor = this.props.velocityFactor || 1.0;
      let targetFactor = this.props.targetFactor || 0.35; // .35

      const w = 1000;
      const latScale = map([0, w], [west, east]);
      const longScale = map([0, w], [north, south]);

      const tLatScale = map([west, east], [0, w]);
      const tLongScale = map([north, south], [0, w]);

      let nTargets = targets;
      if (targets) {
        nTargets = targets.map(t => [tLatScale(t[0]), tLongScale(t[1])]);
      }

      this.birds = new Array(Number(numBirds)).fill(0).map((v, i) => {
        return this.flock.addBoid(
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
            tLongScale,
            crop
          })
        );
      });
    } else {
      this.birds.map(bird => {
        bird.entity.model.minimumPixelSize = pixelSize;
        bird.entity.model.colorBlendMode = colorBlendMode;
        bird.entity.model.colorBlendAmount = colorBlendAmount;
      });
    }
  }

  render () {
    return false;
  }
}

export default Birds;
