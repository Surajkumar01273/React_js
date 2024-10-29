import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 p-4 text-white m-5 rounded-xl'>Tailwind Test</h1>

      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">

        <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/images/6621-copy.jpg" alt="img" width="384" height="512" />

        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              Hi averyone this React web app and tailwind css Project this is not project it is a card. In  this card to used learn how to used tailwind setup in react project.
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              Suraj kumar
            </div>
            <div class="text-slate-200 dark:text-slate-400">
              Web app Developer (MERN STACK)
            </div>
          </figcaption>
        </div>
      </figure>
      

    </>
  )
}

export default App
