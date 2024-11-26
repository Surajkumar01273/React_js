import { useState } from "react"


function Card({ id, image, info, price, name, removeTour}) {

    const [readmore, setReadmore] = useState(false)
    const description = readmore ? info : `${info.substring(0, 195)}....`;

    function redmoreHandler() {
        setReadmore(!readmore);
    }

    

    return (
        <div className=" bg-gray-200 w-80 my-4 p-3 rounded-md mx-2">
            <img className="w-80 h-80" src={image} alt="pic" />
            <div className="my-3">
                <div>
                    <h4 className="text-green-500 font-bold">₹{price}</h4>
                    <h4 className="font-bold">{name}</h4>
                </div>
                <div>
                    {description}
                    <span className="text-cyan-500 mr-1" onClick={redmoreHandler}>
                        {readmore ? `Show less` : `Read more`}
                    </span>
                </div>
            </div>
            <button className="bg-gray-500 font-medium p-1 rounded-md text-white px-3 ml-4" onClick={ () => removeTour(id)}>Not Interested</button>
        </div>
    )
}

export default Card;