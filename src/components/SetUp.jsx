import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../contexts/app_context'

const SetUp = () => {
    let { data } = useContext(AppContext)

    // let loaded = () => {
        return (
          <div>
           {data?.map((data) => {
            return <h3>{data?.setup}</h3>
           })}
          </div>
        )
    // }

//     let loading = () => {
//         <h3>waiting for punchline ...</h3>
//     }

//    return data ? loaded() : loading()
}

export default SetUp
