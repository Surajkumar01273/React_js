import Card from './Card'


function Tours({tours, removeTour}){
    
    return(
        <div className='flex flex-col items-center mt-8'>
            <div>
                <h2 className='font-bold text-2xl'>Plan for Tour</h2>
            </div>

            <div className="flex flex-wrap justify-center items-center">
             {
                   tours.map( (tour) => {
                   // console.log(tour);   map function pass only value not array so in this map function pass only object
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>                    
                   })
             }
            </div>
        </div>
    )

}

export default Tours