import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' 
import React from 'react'
// const reactElement={
//     type: 'a',
//     props:{
//         href:'https:google.com',
//         target:'_blank',
//     },
//     children:'click me to visit google',
// }
const anotherUser="rushikesh cheedalla"
const reactElement=React.createElement(
  'a',
  {href:"https://google.com",target:"_blank"},
  'click me to visit googleeee',
  anotherUser
)


const MyApp=function(){
  return "chai aour codeinf!"
}

const AnotherElement=(
  <a href="https:google.com" target="_blank">VisitGoogle </a>
)


createRoot(document.getElementById('root')).render(
  reactElement
)
