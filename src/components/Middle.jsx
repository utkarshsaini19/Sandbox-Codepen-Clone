import React,{useContext} from 'react'
import Editor from './Editor'
import {Context} from '../context/CotextProvider'

const Middle = () => {

  const {html,css,js,setHtml,setCss,setJs} = useContext(Context)
  return (
    <div style={{display:'flex',background:'black'}}>
        <Editor name="HTML" logo="/" color="red" mode='xml' value={html} onChange={setHtml}/>
        <Editor name="CSS" logo="*" color="blue" mode='css' value={css} onChange={setCss} />
        <Editor name="JS" logo="{ }" color="yellow" mode='javascript' value={js} onChange={setJs}/>
    </div>
  )
}

export default Middle