// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {countMango: 0, countBanana: 0}

  onIncreaseMango = () => {
    this.setState(prevState => {
      console.log(`previou state value ${prevState}`)
      return {countMango: prevState.countMango + 1}
    })
  }

  onIncreaseBanana = () => {
    this.setState(prevState => {
      console.log(`previou state value ${prevState}`)
      return {countBanana: prevState.countBanana + 1}
    })
  }

  render() {
    const {countMango} = this.state
    const {countBanana} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="count-ate">{countMango}</span> mangoes
            <span className="count-ate">{countBanana}</span> bananas
          </h1>
          <div className="ban-man-cont">
            <div className="imgs-cont">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                className="button"
                type="button"
                onClick={this.onIncreaseMango}
              >
                Eat Mango
              </button>
            </div>

            <div className="imgs-cont">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />

              <button
                className="button"
                type="button"
                onClick={this.onIncreaseBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
