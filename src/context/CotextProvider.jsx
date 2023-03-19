import { createContext } from "react";
import {React,useState} from 'react'


export const Context = createContext();



const CotextProvider = (props) => {

    const [html, setHtml] = useState('')
    const [css, setCss] = useState('')
    const [js, setJs] = useState('')

    return (
        <Context.Provider value={{html,css,js,setHtml,setCss,setJs}}>
            {props.children}
        </Context.Provider>
    )
}

export default CotextProvider
