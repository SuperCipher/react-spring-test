// Inspired by Corey Haggards "Screeners"
// https://dribbble.com/shots/4138489-Screeners

import React from 'react'
import ReactDOM from 'react-dom'
import { Parallax } from 'react-spring'
import './styles.css'

const Page = ({ offset, caption, first, second, gradient, onClick }) => (
  <React.Fragment>
    <Parallax.Layer offset={offset} speed={0.2} onClick={onClick}>
      <div className={`slopeBegin ${gradient}`}>
        <svg viewBox="0 10 400 500" preserveAspectRatio="xMidYMid meet">
          <path d="M217.545612,0.5 C140.815411,43.629916 111.73146,105.53956 130.225471,186.342576 C163.312557,330.904847 130.383249,440.475873 29.0816408,486.33023 C19.3437266,490.738115 10.380178,494.794704 2.19099442,498.5 L731.5,498.5 L731.5,0.5 L217.545612,0.5 Z" />
        </svg>
      </div>
    </Parallax.Layer>

    <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </Parallax.Layer>

    <Parallax.Layer className="text number" offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
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
        <Page offset={0} gradient="pink" caption="who we are" first="Sirisoft" second="Hackathon" onClick={() => this.scroll(1)} />
        <Page offset={1} gradient="teal" caption="what we do" first="consectetur" second="adipiscing elit" onClick={() => this.scroll(2)} />
        <Page offset={2} gradient="tomato" caption="what we want" first="Morbi quis" second="est dignissim" onClick={() => this.scroll(0)} />
      </Parallax>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
