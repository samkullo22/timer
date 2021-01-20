import './App.css';
import Timer from './Timer'
import React, { Component } from 'react'

export default class App extends Component {
    state = {
      time : 0,
      text : '',
    }
    setTim = () => {
      let time = this.state.text;
      this.setState(() => {
        return { time: time};
      })
    }
    setTimer = (event) => {
      let newVal = event.target.value;
      this.setState(() => {
        return {
          text : newVal
        }
      })
    }
  render() {
    return (
      <div className="haupt">
        {this.state.time > 0 ? (
          <Timer  ammount={this.state.time} />
        ) : (
    <div className="main">
      <div className="logo">
        <ul className="c-rainbow">
        <li className="c-rainbow__layer c-rainbow__layer--white">TIMER</li>
        <li className="c-rainbow__layer c-rainbow__layer--orange">TIMER</li>
        <li className="c-rainbow__layer c-rainbow__layer--red">TIMER</li>
        <li className="c-rainbow__layer c-rainbow__layer--violet">TIMER</li>
        <li className="c-rainbow__layer c-rainbow__layer--blue">TIMER</li>
        <li className="c-rainbow__layer c-rainbow__layer--green">TIMER</li>
        <li className="c-rainbow__layer c-rainbow__layer--yellow">TIMER</li>
        </ul>
        </div>
        <div className='timerSet'>
          <form>
          <input  onChange={this.setTimer} placeholder="min"/>
          </form>
          <button onClick={() => {
            this.setTim()
          }}>
            start
          </button>
        </div>
      </div>
        )}
    </div>
    )
  }
}

