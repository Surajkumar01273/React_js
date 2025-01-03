import React from 'react'

function Data(props) {
    const userDetals = props.userdetals;
    return (
        <div>
            <div className='ml-[45%] mt-12 mb-5'>
                <h1 className='mb-4 text-2xl font-bold'>{userDetals.data}</h1>
                <p className=''>{`Name : ${userDetals.firstName} ${userDetals.lastName}`}</p>
                <p className=''>{`Email : ${userDetals.email}`}</p>
                <p className=''>{`Message : ${userDetals.comments}`}</p>
                <p className=''>{`Details : ${userDetals.isVisible}`}</p>
                <p className=''>{`Mode : ${userDetals.mode}`}</p>
                <p className=''>{`Exam Center : ${userDetals.center}`}</p>
            </div>
        </div>
    )
}

export default Data
