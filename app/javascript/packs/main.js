import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import '../styles/main.css'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
