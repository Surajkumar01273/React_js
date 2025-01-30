import Random from './components/Random'
import Tag from './components/Tag'
import './App.css'

function App() {

  return (
    <>
      <div className='w-full h-full flex flex-col background'>
        <h1 className='bg-white text-center mt-6 py-2 text-xl font-bold mx-10 rounded-sm'>RANDOM GIFTS</h1>
        <div className='flex flex-col justify-center items-center md:mt-20 mt-12 mb-4'>
          <Random />
          <Tag />
        </div>
      </div>
    </>
  )
}

export default App
