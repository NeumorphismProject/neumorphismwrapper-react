import { useState, useCallback } from 'react'
import { NeumorphismPannel, getNeumorphismStyle, isValidColor } from 'neumorphism-pannel'
import Sidebar from './components/Sidebar'

function App() {
  const [color, setColor] = useState<string>('#83abfb');
  const handleColorChange = (colorHex: string) => {
    if (isValidColor(colorHex)) {
      setColor(colorHex)
    }
  }
  const neumorphismStyle = getNeumorphismStyle({ color });
  const styleForReactString = JSON.stringify(neumorphismStyle, null, '\t')
  return (
    <div className="w-screen h-screen flex" style={{ backgroundColor: color }}>
      <div className="w-64 h-full">
        <Sidebar color={color} onColorChange={handleColorChange} styleForReactString={styleForReactString} />
      </div>
      <div className="flex-1">
        <NeumorphismPannel color={color} style={{
          width: '300px',
          height: '300px',
          margin: '0 auto'
        }}>
        </NeumorphismPannel>
      </div>
    </div>
  )
}

export default App
