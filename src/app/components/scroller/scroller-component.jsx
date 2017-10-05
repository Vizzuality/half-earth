import React, { PureComponent } from 'react'
import Rx from 'rxjs/Rx'
// import { audioContext, getScheduler } from 'waves-audio'
// import { SuperLoader } from 'waves-loaders'
// import {
//   scheduledGranular,
//   loopPlayer,
//   triggerPlayer
// } from './engines'

import styles from './scroller-styles.scss'

// const scale = (value, istart, istop, ostart, ostop) =>
//   ostart + (ostop - ostart) * ((value - istart) / (istop - istart))
// const clamp = (n, min, max) => (n > max ? max : n < min ? min : n)
const domId = 'oneItemLow'

class Scroller extends PureComponent {
  constructor (props) {
    super(props)
    this.onTick = this.onTick.bind(this)
    this.onError = this.onError.bind(this)
    this.onComplete = this.onComplete.bind(this)
    this.source = Rx.Observable.interval(props.interval || 100)
    this.offset = -1
  }

  componentDidMount () {
    const $playhead = document.getElementById('playhead')
    this.playheadPosition = $playhead.getBoundingClientRect().top
    this.subscription = this.source.subscribe(
      this.onTick,
      this.onError,
      this.onComplete
    )
  }

  getOffset (el) {
    return el.scrollTop
  }

  onTick () {
    const $element = document.getElementById(domId)
    const $rect = $element.getBoundingClientRect()
    const $top = $rect.top - this.playheadPosition
    const $bottom = $rect.bottom - this.playheadPosition

    if ($top !== this.offset) {
      if ($top <= 0 && $bottom >= 0) console.log($element.innerHTML.split(10))
      this.offset = $top
    }
  }

  onError (e) {
    console.error(e)
  }

  onComplete () {
    console.log('Completed')
  }

  render () {
    const { children } = this.props
    console.log(children)
    return (
      <article id="all">
        <div id="playhead" className={styles.playHead} />
        <h2 className={styles.heading} id="chapter-five-fiction-and-bridges">
          <span className={styles.title}>I</span>
        </h2>
        <p id="oneItem">
          Alix no recuerda su origen. Desde que tiene memoria, el universo se
          compone de dos largos pasillos, el cuarto de dormir, el cuarto de
          comer y la habitación blanca. Alguien podría preguntarle quién es, por
          ejemplo, y Alix entendería esas palabras, pero sería incapaz de
          responder. La noche es su origen, la noche misma, por eso cierra los
          ojos, porque sabe, de la manera inconsciente y sorda en la que saben
          los que no saben nada, que ha nacido de la noche.
        </p>
        <p>
          Mata siempre dice que Alix no tiene madre, que no tiene padre, pero él
          no conoce el significado de esas palabras. No conoce su nombre, no
          conoce su sexo, no percibe el paso del tiempo. Alix es una bestia
          mansa compuesta de partículas primigenias de un intenso color negro,
          es la oscuridad, la ceguera, la sombra.
        </p>
        <p id="oneItemLow">
          Pero Alix ha aprendido algunas cosas. Sabe que hace frío siempre que
          viene Xim y dice, despierta, Alix, despierta. Sabe que tirita y que
          entonces Xim se ríe enseñando mucho los dientes. Y escucha a Mata,
          ¡zas!, ¡zas! Golpeando con el hacha y no puede evitar estremecerse,
          aunque Xim se siente a su lado y le dé calor. El hacha de Mata sigue
          subiendo y bajando, ¡zas!, ¡zas! Y Xim espera y se frota las manos,
          frota, frota, frota. Alix también espera, porque, aunque no sea capaz
          de decir cuántos han pasado, sabe que todos los días empiezan así.
        </p>
        <p id="anoterItem">
          Cuando la silueta de Mata se dibuja en el marco de la puerta, Xim sabe
          que ya es el momento de empezar a preparar la comida. No tendrían por
          qué, pero hablan, por eso Alix ha aprendido algunas cosas, por
          ejemplo, que Xim sabe preparar la comida, pero que sus manos no saben
          matar. También que en su espalda la piel se arruga y se abulta
          formando una extraña figura que es incapaz de observar, pero la palpa
          con sus manos y entonces nota algo parecido a un dolor antiguo, tan
          enterrado en su cuerpo que es apenas el murmullo de un dolor. Mata
          dice que es una marca de nacimiento, y entonces Xim se ríe mucho con
          la boca y tose, y dice, claro, claro, y se tiene que sujetar la tripa.
        </p>
        <p>
          Nadie tendría que haber hablado nunca a Alix, pero lo hicieron, por
          eso ha aprendido palabras que no entiende, pero que pesan, gravitan
          hacia el núcleo de la oscuridad dibujando espirales en la negrura.
          Palabras: día, padre, madre, amo, matar, dolor, bueno, hombre,
          máquina, hermano, placer, tú, sexo, nosotros, mujer.
        </p>
      </article>
    )
  }
}

export default Scroller
