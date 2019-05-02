import { createStore,applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

const initialState = {
  sneakers: [
    {
      leftText: 'Yeezy',
      rightText: '700',
      imageUrl: './yeezy-700.png',
      backgroundColor: '#fe703a',
      release: '2017',
      nickname: 'Wave Runner',
      sku: 'B75571'
    },
    {
      leftText: 'Jordan',
      rightText: 'Off-White',
      imageUrl: './jordan-1.png',
      backgroundColor: '#ed1b23',
      release: '2017',
      nickname: 'Off-White',
      sku: 'AA3834 101'
    },
    {
      leftText: 'Nike',
      rightText: 'Adapt',
      imageUrl: './nike-adapt.png',
      backgroundColor: '#7b7e80', 
      release: '2019',
      nickname: 'Self-lacing',
      sku: 'AO2582 001'
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