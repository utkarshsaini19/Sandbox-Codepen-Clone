import React, { useState } from 'react'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as CodeMirror } from 'react-codemirror2'


const Editor = (props) => {

  const { name, logo, color, mode, value, onChange } = props;

  const [open, setopen] = useState(true)

  


  return (
    <div style={open ? { flexGrow: '1', margin: '4px' } : { flexGrow: '0', margin: '4px' } }>
      <div style={{ display: 'flex', justifyContent: 'space-between', background: '#263238' }}>
        <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', background: '#263238', color: 'black' }}>
          <span style={{ display: 'inline-block', height: '20px', width: '20px', margin: '4px', background: color, borderRadius: '5px', textAlign: 'center' }}>{logo}</span>
          <text style={{color:'white'}}>{name}</text>
        </div>
        <div>
          <CloseFullscreenIcon 
            onClick={()=>{
              setopen(prev => !prev)
            }}
            cursor='pointer'
            style={{color:'white'}}
          />
        </div>
      </div>
      <CodeMirror
        value={value}
        options={{
          mode: mode,
          theme: 'material',
          lineNumbers: true
        }}
        onBeforeChange={(editor, data, value) => {
          onChange(value)
        }}
      />

    </div>
  )
}

export default Editor