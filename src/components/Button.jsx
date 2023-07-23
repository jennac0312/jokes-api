import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'

const Button = ( { feeling, type } ) => {

  let { buttonClicked } = useContext(AppContext)

  return (
      <button onClick={() => buttonClicked(type)}>{feeling}</button>
  )
}

export default Button
