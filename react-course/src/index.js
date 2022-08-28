import React from 'react'
import ReactDOM from 'react-dom/client' //Se usa el client
import {Greeting, UserCard} from './Greting'
import Product, {Navbar} from './Product'
import {Button} from './Button'
const root = ReactDOM.createRoot(document.getElementById('root'))


root.render( 
    <>
    <Button text='Click me'/>
    <Button text='Pay'/>
    <Button text='Go to'/>


    {/*     <UserCard
        name="Ryan Rau"
        amount={3000}
        points={[99,33.3,22.2]}
        address={{street: "123",city:"New York"}}
        greet = {function(){
            alert('Hello')
        }}
        />
        <UserCard
        name="Ryan Rau"
        amount={3000}
        points={[99,33.3,22.2]}
        address={{street: "123",city:"New York"}}
        greet = {function(){
            alert('Hello')
        }}
        /> */}

    </>
 )