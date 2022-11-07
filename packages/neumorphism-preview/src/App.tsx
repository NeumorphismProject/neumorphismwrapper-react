import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NeumorphismPannel from '../../neumorphism-pannel/src/NeumorphismPannel/index'
import {getNeumorphismStyle} from '../../neumorphism-pannel/src/neumorphism/styleBuilder'
import {isValidColor} from '../../neumorphism-pannel/src/neumorphism/utils'

function App() {
  const [color, setColor] = useState<string>('#83abfb');
  const colorOnChange = ({ target: { value } }: any) => {
    if (isValidColor(value)) {
      setColor(value)
    }
  }
  const handleColor = useCallback((e:any)=>{
    setColor(e.target.value)
  }, [])
  const neumorphismStyle = getNeumorphismStyle({color});
  const styleForReactString = JSON.stringify(neumorphismStyle, null, '\t')
  return (
    <div className="app" style={{ backgroundColor: color }}>
      <div className="row">
        <label htmlFor="color">Pick a color:</label>
        <input
          type="color"
          name="color"
          onChange={handleColor}
          placeholder="#ffffff"
          value={color}
          id="color"
        />
        <label htmlFor="colorInput" style={{ paddingLeft: '10px' }}>
          or
        </label>
        <input
          type="text"
          placeholder="#ffffff"
          name="color"
          onChange={colorOnChange}
          value={color}
        />
      </div>
      <NeumorphismPannel color={color} style={{
        width: '300px',
        height: '300px',
        margin: '0 auto'}}>
      </NeumorphismPannel>
      <div className='code-view-label'>react style</div>
      <textarea className='code-view'>{styleForReactString}</textarea>
    </div>
  )
}

export default App
