import { useMemo } from "react";
import { NeumorphismStyleParams, NeumorphismShapeType, NeumorphismActiveLightSourceType, BORDER_RADIUS_MAX } from "neumorphism-pannel"
import Slider from '@mui/material/Slider'
import ValueSlider from '../ValueSlider'
import TypeRadioGroup from '../TypeRadioGroup'

const shadowDistanceMax = 100

export interface SidebarProps extends NeumorphismStyleParams {
  onColorChange: (colorHex: string) => void
  styleForReactString: string
  boxSize?: number
  onBoxSizeChange?: (newValue: number) => void
  onNeumorphismShapeChange?: (neumorphismShape: NeumorphismShapeType) => void
  onActiveLightSourceChange?: (activeLightSource: NeumorphismActiveLightSourceType) => void
  onShadowDistanceChange?: (newValue: number) => void
  onShadowBlurChange?: (newValue: number) => void
  onBorderRadiusChange?: (newValue: number) => void
  onColorDifferenceChange?: (newValue: number) => void
}
export default function Sidebar({ color, onColorChange, styleForReactString,
  boxSize,
  onBoxSizeChange,
  neumorphismShape,
  onNeumorphismShapeChange,
  activeLightSource,
  onActiveLightSourceChange,
  shadowDistance,
  onShadowDistanceChange,
  shadowBlur,
  onShadowBlurChange,
  borderRadius,
  onBorderRadiusChange,
  colorDifference,
  onColorDifferenceChange }: SidebarProps) {
  const handleColorChange = (e: any) => {
    onColorChange(e.target.value)
  }
  const shadowBlurMax = useMemo(() => (shadowDistanceMax || 0) * 2, [shadowDistanceMax])
  return <div className="w-full h-full flex flex-col justify-arround p-8 text-white overflow-y-auto">
    <div className="h-16 bg-black p-2">
      <div className="font-bold">Pick a color</div>
      <div>
        <input
          className="relative top-1 mr-2"
          type="color"
          name="color"
          onChange={handleColorChange}
          placeholder="#ffffff"
          value={color}
          id="color"
        />
        <input
          className="bg-black"
          type="text"
          placeholder="#ffffff"
          name="color"
          onChange={handleColorChange}
          value={color}
        />
      </div>
    </div>
    {/* ------ style code textarea ------ */}
    <div className="w-full mb-6">
      <div className="font-bold bg-black p-2">React style</div>
      <textarea readOnly className="w-full h-44 bg-black p-2" value={styleForReactString}></textarea>
    </div>
    {/* ------ silder ------ */}
    <div className="flex-1 w-full bg-black p-2">
      <TypeRadioGroup
        label="Light Direction"
        value={activeLightSource}
        options={[
          { radioKey: NeumorphismActiveLightSourceType.topLeft, radioText: "Top Left" },
          { radioKey: NeumorphismActiveLightSourceType.topRight, radioText: "Top Right" },
          { radioKey: NeumorphismActiveLightSourceType.bottomLeft, radioText: "Bottom Left" },
          { radioKey: NeumorphismActiveLightSourceType.bottomRight, radioText: "Bottom Right" },
        ]}
        onChange={onActiveLightSourceChange}
      />
      <TypeRadioGroup
        label="Shape Type"
        value={neumorphismShape}
        options={[
          { radioKey: NeumorphismShapeType.flat, radioText: "Flat" },
          { radioKey: NeumorphismShapeType.pressed, radioText: "Pressed" },
          { radioKey: NeumorphismShapeType.concave, radioText: "Concave" },
          { radioKey: NeumorphismShapeType.convex, radioText: "Convex" },
        ]}
        onChange={onNeumorphismShapeChange}
      />
      <ValueSlider label="Box Size" value={boxSize} onChange={onBoxSizeChange} max={500} />
      <ValueSlider label="Shadow Distance" value={shadowDistance} onChange={onShadowDistanceChange} max={shadowDistanceMax} />
      <ValueSlider label="Shadow Blur" value={shadowBlur} onChange={onShadowBlurChange} max={shadowBlurMax} />
      <ValueSlider label="Border Radius" value={borderRadius} onChange={onBorderRadiusChange} max={BORDER_RADIUS_MAX} />
      <ValueSlider label="Light Intensity" value={colorDifference} onChange={onColorDifferenceChange} />
    </div>
  </div>
}