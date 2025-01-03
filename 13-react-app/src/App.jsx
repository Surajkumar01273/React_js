import Testimonial from './component/Testimonial';
import reviews from './data';
import './App.css'

function App() {
  return (
    <>
      <div className='flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-gray-200'>
        <div className='md:text-center top-0'>
          <h1 className='text-3xl font-bold text-center'>Our Testimonials</h1>
          <div className='bg-violet-500 h-[3px] w-[130px] rounded-sm mx-auto md:mb-4'></div>
          <Testimonial reviews={reviews} />
        </div>
      </div>
    </>
  )
}

export default App
