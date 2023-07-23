import { useState, createContext, useEffect } from "react";
import axios from 'axios'

// create context
export const AppContext = createContext()


// function to provide context
const AppContextProvider = (props) => {
    // API VARIABLES
    const [type, setType] = useState(null)
    const [data, setData] = useState(null)
    const [count, setCount] = useState(0) // to track button clicks
    
    const URL = `https://official-joke-api.appspot.com/jokes/${type}/random`
    // console.log(URL)

    // get type
    const getType = (selected) => {
        setType(selected)
        console.log(type)
       }

    // fetch data
    const fetchData = async () => {
        console.log(URL)
        let response = await axios.get(URL)
        let info = await response.data
        console.log(info)

        setData(info)
        console.log(data) // ig data is supposed to be null stil atp?
    }

    // button clicked
    const buttonClicked = (selected) => {
        setCount((prev) => prev + 1)
        getType(selected)
    }

    useEffect(() => {
        fetchData()
    }, [count])

    const toggleFade = () => {
        let punchline = document.querySelector('.punchline')
        punchline.classList.toggle('fadeIn')
    }

    useEffect(() => {
    setTimeout(() => {
        toggleFade()
    }, 5000);

        return() => {
            clearInterval()
            toggleFade()
        }

    }, [data])
    // 

    return(
        <AppContext.Provider value={{
            type, setType, data, getType, count, setCount, buttonClicked
        }}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppContextProvider