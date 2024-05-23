import React, { useEffect, useState } from 'react'
import { createContext } from "react"
import names from "./data"


export const AppContext = React.createContext()

    const AppProvider = ({children})=>{
    const [userNames,setUserNames] = useState(names)
    const [searchParams,setSearchParams] = useState("")
    const [clickedList,setClickedList] = useState('')
    const [filteredSearch,setfilteredSearch] = useState([])
    const handleSearchParams = (e)=>{
    setSearchParams(e.target.value)
        setClickedList("")
    // console.log(filteredSearch);
    }
    // console.log(searchParams);
    const handleClickedList = (e)=>{
    setClickedList(e.target.innerText)

    }

    useEffect(()=>{
    let filteredNames = userNames.filter
    ((name)=> name.toLowerCase().includes(searchParams.toLowerCase()))
    setfilteredSearch(filteredNames)
   
    },[searchParams])

    return <AppContext.Provider value={{userNames,setSearchParams,searchParams,clickedList,setClickedList,handleClickedList,handleSearchParams,filteredSearch,setfilteredSearch}}>
    {children}
    </AppContext.Provider>
}

export default AppProvider

