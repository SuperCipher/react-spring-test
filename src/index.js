// Inspired by Corey Haggards "Screeners"
// https://dribbble.com/shots/4138489-Screeners

import React from 'react'
import ReactDOM from 'react-dom'
import { Parallax } from 'react-spring'
import './styles.css'

const Page = ({ offset, caption, first, second, gradient, onClick }) => (
  <React.Fragment>
    <Parallax.Layer offset={offset} speed={0.2} onClick={onClick}>
      <div className={`slopeBegin ${gradient}`} />
    </Parallax.Layer>

    <Parallax.Layer className="text number" offset={offset} speed={0.3} />

    <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
      <svg viewBox="-250 0 980 500" preserveAspectRatio="xMidYMid meet" className={'shadow'}>
        <path d="M727.756834,0.5 L217.672645,0.5 C140.942445,43.629916 111.858493,105.53956 130.352505,186.342576 C163.43959,330.904847 130.510282,440.475873 29.2086745,486.33023 C19.4707603,490.738115 10.5072117,494.794704 2.3180281,498.5 L512.328131,498.5 C520.629947,494.743775 529.732741,490.624181 539.636513,486.141221 C640.428339,440.517618 673.210393,331.436574 640.217923,187.287691 C621.644234,106.136554 650.846852,43.8366574 727.756834,0.5 Z" />
      </svg>
    </Parallax.Layer>

    <Parallax.Layer className="text header" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 20 }}>{caption}</p>
        <div className={`stripe ${gradient}`} />
        <p>{first}</p>
        <p>{second}</p>
      </span>
    </Parallax.Layer>
  </React.Fragment>
)

class App extends React.Component {
  scroll = to => this.refs.parallax.scrollTo(to)
  render() {
    return (
      <Parallax className="container" ref="parallax" pages={3} horizontal scrolling={false}>
        <Page offset={0} gradient="pink" caption="are you ready for" first="Sirisoft" second="Hackathon" onClick={() => this.scroll(1)} />
        <Page offset={1} gradient="teal" caption="who can enter" first="com sci/engineer" second="Burapha University" onClick={() => this.scroll(2)} />
        <Page offset={2} gradient="tomato" caption="when" first="August" second="27-28" onClick={() => this.scroll(0)} />
      </Parallax>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
