// import App from './App.jsx'
import { useState } from 'react'

function Chai() {

    let [cup, setcup] = useState(0)


    return (
        <>
            <h1>Order Chai From here</h1>
            <button onClick={() => {setcup(cup + 1) }}>Add Cup</button>

            <br /><br />

            <button onClick={() => {
                if (cup <= 0) {
                    alert('Order Cencel')
                } else {
                    setcup(cup - 1)
                }
            }}>Remove Cup</button>
            <h2>{cup} Cup Chai is ready</h2>
            <p>this is a paragraph of npm create vite@latest it is vite reaxt project and second npx create react app is take more time and vite take less time compre other</p>
        </>
    )
}

export default Chai