import { useState } from "react"


function Card({id, image, info, price, name, removeTour}) {

    const [readmore, setReadmore] = useState(false)
    const description = readmore ? info : `${info.substring(0, 195)}....`;

    function redmoreHandler() {
        setReadmore(!readmore);
    }

    

    return (
        <div className="bg-gray-200 md:shadow-2xl w-80 my-4 p-3 rounded-md sm:mx-4 md:mx-2">
            <img className="w-80 h-80" src={image} alt="pic" />
            <div className="my-3">
                <div>
                    <h4 className="text-green-500 font-bold">₹{price}</h4>
                    <h4 className="font-bold">{name}</h4>
                </div>
                <div className="text-sm sm:text-md xl:text-sm">
                    {description}
                    <span className="text-cyan-500 mr-1" onClick={redmoreHandler}>
                        {readmore ? `Show less` : `Read more`}
                    </span>
                </div>
            </div>
            <button className="bg-gray-400 font-medium p-1 rounded-md hover:bg-gray-600 hover:transition-all hover:duration-500 hover:text-white text-black px-3 ml-4 text-sm sm:text-lg" onClick={ () => removeTour(id)}>Not Interested</button>
        </div>
    )
}

export default Card;