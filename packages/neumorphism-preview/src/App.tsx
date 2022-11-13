import { useState, useCallback, useMemo } from "react"
import {
  getNeumorphismStyle, isValidColor,
  NeumorphismShapeType, NeumorphismActiveLightSourceType,
  NEUMORPHISM_SHAPE, ACTIVE_LIGHT_SOURCE, SHADOW_DISTANCE, SHADOW_BLUR, BORDER_RADIUS
} from "neumorphism-pannel"
import Sidebar from "./components/Sidebar"
import Preview from "./components/Preview"

function App() {
  const [color, setColor] = useState<string>("#27282b");
  const handleColorChange = (colorHex: string) => {
    if (isValidColor(colorHex)) {
      setColor(colorHex)
    }
  }

  const [neumorphismShape, setNeumorphismShape] = useState<NeumorphismShapeType>(NEUMORPHISM_SHAPE)
  const handleNeumorphismShapeChange = (neumorphismShape: NeumorphismShapeType) => {
    setNeumorphismShape(neumorphismShape)
  }

  const [activeLightSource, setActiveLightSource] = useState<NeumorphismActiveLightSourceType>(ACTIVE_LIGHT_SOURCE)
  const handleActiveLightSourceChange = (activeLightSource: NeumorphismActiveLightSourceType) => {
    setActiveLightSource(activeLightSource)
  }

  const [shadowDistance, setShadowDistance] = useState<number>(SHADOW_DISTANCE)
  const handleShadowDistanceChange = (newValue: number) => {
    setShadowDistance(newValue)
  }
  const [shadowBlur, setShadowBlur] = useState<number>(SHADOW_BLUR)
  const handleShadowBlurChange = (newValue: number) => {
    setShadowBlur(newValue)
  }
  const [borderRadius, setBorderRadius] = useState<number>(BORDER_RADIUS)
  const handleBorderRadiusChange = (newValue: number) => {
    setBorderRadius(newValue)
  }

  // const neumorphismStyle = getNeumorphismStyle({ color, shadowDistance });
  const neumorphismStyle = useMemo(() => getNeumorphismStyle({ color, neumorphismShape, activeLightSource, shadowDistance, shadowBlur, borderRadius }),
    [color, neumorphismShape, activeLightSource, shadowDistance, shadowBlur, borderRadius])
  // const styleForReactString = JSON.stringify(neumorphismStyle, null, "\t")
  const styleForReactString = useMemo(() => JSON.stringify(neumorphismStyle, null, "\t"),
    [neumorphismStyle, shadowDistance])

  return (
    <div className="w-screen h-screen flex p-10" style={{ backgroundColor: color }}>
      <div className="absolute top-6 right-6 h-16 text-white flex flex-col">
        <span className="mr-4">References (Study From):</span>
        <div>
          <span className="mr-2">Preview website:</span>
          <a style={{ textDecoration: "underline" }} href="https://neumorphism.io/#787878" target="_blank">https://neumorphism.io/#787878</a>
        </div>
        <div>
          <span className="mr-2">Github repo:</span>
          <a style={{ textDecoration: "underline" }} href="https://github.com/adamgiebl/neumorphism" target="_blank">https://github.com/adamgiebl/neumorphism</a>
        </div>

      </div>
      <div className="w-96 h-full" style={neumorphismStyle}>
        <Sidebar color={color} onColorChange={handleColorChange} styleForReactString={styleForReactString}
          neumorphismShape={neumorphismShape} onNeumorphismShapeChange={handleNeumorphismShapeChange}
          activeLightSource={activeLightSource} onActiveLightSourceChange={handleActiveLightSourceChange}
          shadowDistance={shadowDistance} onShadowDistanceChange={handleShadowDistanceChange}
          shadowBlur={shadowBlur} onShadowBlurChange={handleShadowBlurChange}
          borderRadius={borderRadius} onBorderRadiusChange={handleBorderRadiusChange} />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <Preview color={color}
          neumorphismShape={neumorphismShape}
          activeLightSource={activeLightSource}
          shadowDistance={shadowDistance}
          shadowBlur={shadowBlur}
          borderRadius={borderRadius} />
      </div>
    </div>
  )
}

export default App
