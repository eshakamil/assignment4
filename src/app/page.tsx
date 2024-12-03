import Card from '@/components/card'
import React from 'react'

function Home() {
  return (
    <div className='mx-20 p-4 flex flex-row justify-evenly'>
      <Card name={"Esha"} age={19} rollno={110118} class={"monday"} />
      <Card name={'Osaid'} age={18} rollno={11560} class={'tuesday'}/>
      <Card name={'Ahmed'} age={30} rollno={34560} class={'wednesday'}/>
    </div>
  )
}

export default Home
