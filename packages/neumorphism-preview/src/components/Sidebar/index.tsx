import { useMemo } from 'react';
import { NeumorphismStyleParams, NeumorphismShapeType, NeumorphismActiveLightSourceType, BORDER_RADIUS_MAX } from 'neumorphism-pannel';
import ColorPicker from '@/components/ColorPicker';
import ValueSlider from '@/components/ValueSlider';
import TypeRadioGroup from '@/components/TypeRadioGroup';
import StyleCodeArea from '@/components/StyleCodeArea';

const shadowDistanceMax = 100;

export interface SidebarProps extends Omit<NeumorphismStyleParams, 'color'> {
  backgroundColor: string
  onBackgroundColorChange: (colorHex: string) => void
  frontColor: string
  onFrontColorChange: (colorHex: string) => void
  styleForReactString: string
  styleForCssString: string
  configurationString: string
  boxWidth?: number
  onBoxWidthChange?: (newValue: number) => void
  boxHeight?: number
  onBoxHeightChange?: (newValue: number) => void
  onNeumorphismShapeChange?: (neumorphismShape: NeumorphismShapeType) => void
  onActiveLightSourceChange?: (activeLightSource: NeumorphismActiveLightSourceType) => void
  onShadowDistanceChange?: (newValue: number) => void
  onShadowBlurChange?: (newValue: number) => void
  onBorderRadiusChange?: (newValue: number) => void
  onColorDifferenceChange?: (newValue: number) => void
}
export default function Sidebar({ backgroundColor, onBackgroundColorChange, frontColor, onFrontColorChange,
  styleForReactString, styleForCssString, configurationString,
  boxWidth,
  onBoxWidthChange,
  boxHeight,
  onBoxHeightChange,
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
  const shadowBlurMax = useMemo(() => (shadowDistanceMax || 0) * 2, [shadowDistanceMax]);
  return (
    <div className="flex h-full w-full flex-col overflow-y-auto p-8 text-white">
      <div className="h-60 bg-black p-2">
        <ColorPicker
          title="Pick background color"
          color={backgroundColor}
          onColorChange={onBackgroundColorChange}
        />
        <ColorPicker
          title="Pick front Color"
          color={frontColor}
          onColorChange={onFrontColorChange}
        />
      </div>
      {/* ------ style code textarea ------ */}
      <div className="mb-6 w-full bg-black">
        <StyleCodeArea
          styleForReactString={styleForReactString}
          styleForCssString={styleForCssString}
          configurationString={configurationString}
        />
      </div>
      {/* ------ silder ------ */}
      <div className="w-full flex-1 bg-black p-2">
        <TypeRadioGroup
          label="Light Direction"
          value={activeLightSource}
          options={[
            { radioKey: NeumorphismActiveLightSourceType.topLeft, radioText: 'Top Left' },
            { radioKey: NeumorphismActiveLightSourceType.topRight, radioText: 'Top Right' },
            { radioKey: NeumorphismActiveLightSourceType.bottomLeft, radioText: 'Bottom Left' },
            { radioKey: NeumorphismActiveLightSourceType.bottomRight, radioText: 'Bottom Right' }
          ]}
          onChange={onActiveLightSourceChange}
        />
        <TypeRadioGroup
          label="Shape Type"
          value={neumorphismShape}
          options={[
            { radioKey: NeumorphismShapeType.flat, radioText: 'Flat' },
            { radioKey: NeumorphismShapeType.pressed, radioText: 'Pressed' },
            { radioKey: NeumorphismShapeType.concave, radioText: 'Concave' },
            { radioKey: NeumorphismShapeType.convex, radioText: 'Convex' }
          ]}
          onChange={onNeumorphismShapeChange}
        />
        <ValueSlider label="Box Width" value={boxWidth} onChange={onBoxWidthChange} max={500} />
        <ValueSlider label="Box Height" value={boxHeight} onChange={onBoxHeightChange} max={500} />
        <ValueSlider label="Shadow Distance" value={shadowDistance} onChange={onShadowDistanceChange} max={shadowDistanceMax} />
        <ValueSlider label="Shadow Blur" value={shadowBlur} onChange={onShadowBlurChange} max={shadowBlurMax} />
        <ValueSlider label="Border Radius" value={borderRadius} onChange={onBorderRadiusChange} max={BORDER_RADIUS_MAX} />
        <ValueSlider label="Light Intensity" value={colorDifference} onChange={onColorDifferenceChange} max={200} />
      </div>
    </div>
  );
}