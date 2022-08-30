import React from 'react'
import ReactDOM from 'react-dom/client' //Se usa el client
import {Greeting, UserCard} from './Greting'
import Product, {Navbar} from './Product'
import {Button} from './Button'
import {TaskCard} from './Task'
import {Saludar} from './Saludar'
import {Posts} from './Posts'
const root = ReactDOM.createRoot(document.getElementById('root'))

const handleChange = (event) =>{
    console.log(event.target.value)
  }

root.render( 
    <>
    <Posts/>
    </>
 )