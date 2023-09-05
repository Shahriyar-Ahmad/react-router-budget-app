import React from 'react'
import { fetchData } from '../helper'
import { useLoaderData } from 'react-router-dom';

// Loader
export const dasbordLoader=()=>{
    const userName = fetchData('userName');
    return {userName}
}
function Dasbord() {
    const {userName, } = useLoaderData();
  return (
    <div>
        <b>{userName}</b>
      Dasbord
    </div>
  )
}

export default Dasbord
