import React from 'react'

// function Card(props) {
//     console.log(props.userName);
    
function Card({userName, name, card='Here Card Information'}) {
    
    return (
        <>
            <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 mb-8">
                <img
                    src="/images/6621-copy.jpg"
                    alt=""
                    className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name || 'unknow'}</h2>
                        <p className="text-gray-400">
                         {card}
                        </p>
                    </div>
                    <button
                        type="button"
                        className="flex items-center justify-center w-full p-2 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
                    >
                       {userName}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card
