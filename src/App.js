import React, { Component, createRef } from 'react'
import './App.css'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      leftTextWidth: '0',
      rightTextWidth: '0',
      textAndImageStage: 'exit',
      backgroundStage: 'exit',
      index: 0,
      activeTransition: false,
    }
    
    this.leftSpanRef = createRef()
    this.rightSpanRef = createRef()
  }

  componentDidMount() {
    this.setState({ textAndImageStage: 'enter' })

    this.setState({
      leftTextWidth: this.leftSpanRef.current.clientWidth,
      rightTextWidth: this.rightSpanRef.current.clientWidth,
    })
  }

  componentDidUpdate(prevProps,prevState) {
    if (this.state.textAndImageStage === 'exit') {
      setTimeout(() => {
        this.setState({
          textAndImageStage: 'enter',
          backgroundStage: 'exit',
          index: this.props.sneakers[prevState.index + 1] ? prevState.index += 1 : 0,
        })
      },1100)

      setTimeout(() => {
        this.setState({ activeTransition: false })
      },2100)
    }
    if (this.state.index !== prevState.index) {
      this.setState({
        leftTextWidth: this.leftSpanRef.current.clientWidth,
        rightTextWidth: this.rightSpanRef.current.clientWidth,
      })
    }
  }

  handleClick = () => {
    if (!this.state.activeTransition) {
      this.setState({
        textAndImageStage: 'exit',
        backgroundStage: 'enter',
        activeTransition: true
      })
    }
  }

  render() {
    const { leftTextWidth, rightTextWidth, textAndImageStage, backgroundStage } = this.state
    const { backgroundColor, leftText, rightText, imageUrl } = this.props.sneakers[this.state.index]
    let leftSpanEnter = { right: `calc(50% - ${leftTextWidth / 2}px` }
    let leftSpanExit = { right: `-${leftTextWidth + 25}px` }
    let rightSpanEnter = { left: `calc(50% - ${rightTextWidth / 2}px)` }
    let rightSpanExit = { left: `-${rightTextWidth + 25}px` }
    let nextIndex = this.props.sneakers[this.state.index + 1] ? this.state.index + 1 : 0
    return (
      <div onClick={this.handleClick} className='App'>
        <div className='main' style={{backgroundColor}}> 
          <img className={`image ${textAndImageStage === 'enter' ? 'enter': ''}`} alt='' src={`${imageUrl}`} />
          <div className={`background ${backgroundStage === 'enter' ? 'enter' : ''}`}
            style={ backgroundStage === 'enter' ? 
              { backgroundColor: this.props.sneakers[nextIndex].backgroundColor} : {}
          }/>
          <div className='left-text'>
            <span 
            style={textAndImageStage === 'exit' ? leftSpanExit : leftSpanEnter}
            ref={this.leftSpanRef}>
                {leftText}
              </span>
            </div>
            <div className='right-text'>
            <span 
            style={textAndImageStage === 'exit' ? rightSpanExit : rightSpanEnter} 
            ref={this.rightSpanRef}>
                {rightText}
              </span>
            </div>
        </div>
        <div className='bottom'></div>
      </div>
    )
  }
}

const mapState = state => ({ ...state })

export default connect(mapState,null)(App)