import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import store from './app/store'
import { Provider } from 'react-redux'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('app')
  )
})
