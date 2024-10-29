import { useState } from 'react'
import './App.css'
import Card from './component/Card'

function App() {


  // let myObj = {
  //   name: "suraj",
  //   age: 42
  // }
  // let newArr = [1, 2, 3, 4, 5]

  const cardText = 'This a card it card to used lern how used props and used  props to update card element '

  return (
    <>
      <h1 className='bg-green-500 p-3 text-3xl rounded-xl mb-4 text-black'>Tailwind Test</h1>
      <Card userName = "Chai aur Code" name = 'Suraj' card = {cardText}  />
      <Card userName = "Deniyal 123" name = 'Deniyal' card = {cardText}  />
      <Card userName = "Raj333" name = 'Raj'  />
    </>
  )
}

export default App
