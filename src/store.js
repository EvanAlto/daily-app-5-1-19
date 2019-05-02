import { createStore,applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

const initialState = {
  sneakers: [
    {
      leftText: 'Yeezy',
      rightText: '700',
      imageUrl: './yeezy-700.png',
      backgroundColor: '#fe703a',
    },
    {
      leftText: 'Jordan',
      rightText: 'Off-White',
      imageUrl: './jordan-1.png',
      backgroundColor: '#ed1b23',
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

const store = createStore(reducer,applyMiddleware(createLogger()))

export default store