import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
