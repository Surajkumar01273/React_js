
import './App.css';
import Product from "./component/Product";
import NewProduct from './component/NewProduct';

function App() {

  const products = [
    {
      id: "p1",
      title: 'Nirma',
      amount: 100,
      date: new Date(2021, 8, 10)
    },
    {
      id: "p2",
      title: 'SurfExl',
      amount: 200,
      date: new Date(2021, 2, 2)
    },
    {
      id: "p3",
      title: 'Tide',
      amount: 130,
      date: new Date(2021, 12, 28)
    },
    {
      id: "p4",
      title: 'Maggi',
      amount: 420,
      date: new Date(2021, 21, 5)
    }
  ]

  return (
    <>
      <div>
        <NewProduct />

        <div className="bg-yellow-400 rounded-md w-80 mx-auto mt-10 p-6">
          <Product items={products} ></Product>
        </div>
        
      </div>
    </>
  )
}

export default App
