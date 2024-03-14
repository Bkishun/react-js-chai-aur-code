import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const MyApp = () => (<a href="https://google.com" target='_blank'> Visit google</a>)


ReactDOM.createRoot(document.getElementById('root')).render(
  <MyApp/>
)
