import React from 'react'

function Card(props:{name:string , age:number , rollno:number , class:string}) {
  return (
    <div className='w-80 h-48 rounded-md bg-blue-900 text-white flex flex-col justify-center items-center p-4 shadow-lg'>
      <h2 className='text-2xl font-bold mb-2'>Name: {props.name}</h2>
      <h2 className='text-2xl font-bold mb-2'>Age: {props.age}</h2>
        <h2 className='text-2xl font-bold mb-2'>Roll No: {props.rollno}</h2>
          <h2 className='text-2xl font-bold mb-2'>Day: {props.class} </h2>
    </div>
  )
}

export default Card
