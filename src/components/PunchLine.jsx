import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'

const PunchLine = () => {

    let { data } = useContext(AppContext)

  return (
    <div>
      <p className='punchline'>{data?.map((data) =>{return data.punchline})}</p>
    </div>
  )
}

export default PunchLine
