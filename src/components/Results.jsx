import React, { useContext, useState,useEffect } from 'react'
import { Context } from '../context/CotextProvider'
let timeout=''

const Results = () => {

    const { html, css, js } = useContext(Context);
    const [state, setState] = useState('')

    let srcDoc = `<html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${js}</script>
                </html>`

    useEffect(() => {

        clearTimeout(timeout)
        
       timeout=setTimeout(() => {
        setState(srcDoc);
      }, 2000);


      
    }, [html,css,js])
    

    return (
        <iframe style={html || css || js ? null : {background:'#0e3d66'}}
        srcDoc={state}
        title="Output"
        sandbox='allow-scripts'
        frameBorder={0}
        height='100%'
        width='100%'

        />
    )
}

export default Results