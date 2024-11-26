import Card from './Card'


function Tours({tours, removeTour}){

    return(
        <div className='flex flex-col items-center justify-center mt-10'>
            <div>
                <h2 className='font-bold text-2xl'>Plan for Tour</h2>
            </div>

            <div className="flex flex-wrap justify-center items-center">
             {
                   tours.map( (tour) => {
                    return <Card {...tour} removeTour={removeTour}></Card>
                   })
             }
            </div>
        </div>
    )

}

export default Tours