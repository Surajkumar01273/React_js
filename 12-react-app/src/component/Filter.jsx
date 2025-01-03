import React from 'react'

const Filter = ({filterData, category, setCategery}) => {

  function categoryHandler(title){
    setCategery(title)
    
  }
  return (
    <div className='w-11/12 flex flex-wrap max-w-max mx-auto space-x-4 gap-y-4 py-4 justify-center'>
        {
            filterData.map( (data)=>{
                return( 
                    <button onClick={() => categoryHandler(data.title)} className={`text-lg hover:text-xl box-border px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 
                      ${category===data.title ? ("bg-opacity-60 border-white") : ("bg-opacity-40 border-transparent") }`} key={data.id}>{data.title}</button>
                )
            })
        }
    </div>
  )
}
//${category === data.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"} 

export default Filter
