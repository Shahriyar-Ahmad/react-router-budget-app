import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'

// ealper functions
import { fetchData } from '../helper'

// Componets
import Nabar from '../Components/Nabar';

// import pics
import Wave from '../assets/wave.svg';

// Loader
export function mainLoader(){
    const userName= fetchData('userName')
    return {userName}
}
function Main() {
    const {userName} = useLoaderData()
  return (
    <div className='layout'>
      <Nabar userName={userName}/>
      <main>
        <Outlet/>
      </main>
      <img src={Wave} alt='footer pic'/>
    </div>
  )
}

export default Main
