import { useState, useCallback, useMemo } from 'react';
import {
  StyleCodeType,
  getNeumorphismStyle, isValidColor,
  NeumorphismShapeType, NeumorphismActiveLightSourceType,
  BOX_SIZE, NEUMORPHISM_SHAPE, ACTIVE_LIGHT_SOURCE, SHADOW_DISTANCE, BORDER_RADIUS, COLOR_DIFFERENCE
} from 'neumorphism-pannel';
import Sidebar from './components/Sidebar';
import Preview from './components/Preview';
import UiSelector from './components/UiSelector';

function App() {
  const [color, setColor] = useState<string>('#27282b');
  const handleColorChange = (colorHex: string) => {
    if (isValidColor(colorHex)) {
      setColor(colorHex);
    }
  };

  const [neumorphismShape, setNeumorphismShape] = useState<NeumorphismShapeType>(NEUMORPHISM_SHAPE);
  const handleNeumorphismShapeChange = (neumorphismShape: NeumorphismShapeType) => {
    setNeumorphismShape(neumorphismShape);
  };

  const [activeLightSource, setActiveLightSource] = useState<NeumorphismActiveLightSourceType>(ACTIVE_LIGHT_SOURCE);
  const handleActiveLightSourceChange = (activeLightSource: NeumorphismActiveLightSourceType) => {
    setActiveLightSource(activeLightSource);
  };

  const [boxSize, setBoxSize] = useState<number>(BOX_SIZE);
  const handleBoxSizeChange = (newValue: number) => {
    setBoxSize(newValue);
  };

  const [shadowBlur, setShadowBlur] = useState<number>(SHADOW_DISTANCE * 2);
  const handleShadowBlurChange = (newValue: number) => {
    setShadowBlur(newValue);
  };

  const [shadowDistance, setShadowDistance] = useState<number>(SHADOW_DISTANCE);
  const handleShadowDistanceChange = (newValue: number) => {
    setShadowDistance(newValue);
    setShadowBlur(newValue * 2);
  };

  const [borderRadius, setBorderRadius] = useState<number>(BORDER_RADIUS);
  const handleBorderRadiusChange = (newValue: number) => {
    setBorderRadius(newValue);
  };
  const [colorDifferenceVal, setColorDifferenceVal] = useState<number>(COLOR_DIFFERENCE * 100);
  const handleColorDifferenceChange = (newValue: number) => {
    setColorDifferenceVal(newValue);
  };
  const colorDifference = useMemo(() => colorDifferenceVal / 100, [colorDifferenceVal]);

  // const neumorphismStyle = getNeumorphismStyle({ color, shadowDistance });
  const neumorphismStyle = useMemo(
    () => getNeumorphismStyle({ color, neumorphismShape, activeLightSource, shadowDistance, shadowBlur, borderRadius, colorDifference }),
    [color, neumorphismShape, activeLightSource, shadowDistance, shadowBlur, borderRadius, colorDifference]
  );
  // const styleForReactString = JSON.stringify(neumorphismStyle, null, "\t")
  const styleForReactString = useMemo(
    () => JSON.stringify(neumorphismStyle, null, '\t'),
    [neumorphismStyle, shadowDistance]
  );

  const neumorphismCssStyle = useMemo(
    () => getNeumorphismStyle({ styleCodeType: StyleCodeType.css, color, neumorphismShape, activeLightSource, shadowDistance, shadowBlur, borderRadius, colorDifference }),
    [color, neumorphismShape, activeLightSource, shadowDistance, shadowBlur, borderRadius, colorDifference]
  );
  const styleForCssString = useMemo(
    () => JSON.stringify(neumorphismCssStyle, null, '\t'),
    [neumorphismCssStyle, shadowDistance]
  );

  return (
    <div className="flex h-screen w-screen p-10" style={{ backgroundColor: color }}>
      <div className="absolute top-6 right-6 flex h-16 flex-col text-white">
        <span className="mr-4">References (Study From):</span>
        <div>
          <span className="mr-2">Preview website:</span>
          <a style={{ textDecoration: 'underline' }} href="https://neumorphism.io/#787878" target="_blank" rel="noreferrer">https://neumorphism.io/#787878</a>
        </div>
        <div>
          <span className="mr-2">Github repo:</span>
          <a style={{ textDecoration: 'underline' }} href="https://github.com/adamgiebl/neumorphism" target="_blank" rel="noreferrer">https://github.com/adamgiebl/neumorphism</a>
        </div>
      </div>
      <div className="h-full w-96" style={neumorphismStyle}>
        <Sidebar
          color={color}
          onColorChange={handleColorChange}
          styleForReactString={styleForReactString}
          styleForCssString={styleForCssString}
          neumorphismShape={neumorphismShape}
          onNeumorphismShapeChange={handleNeumorphismShapeChange}
          activeLightSource={activeLightSource}
          onActiveLightSourceChange={handleActiveLightSourceChange}
          boxSize={boxSize}
          onBoxSizeChange={handleBoxSizeChange}
          shadowDistance={shadowDistance}
          onShadowDistanceChange={handleShadowDistanceChange}
          shadowBlur={shadowBlur}
          onShadowBlurChange={handleShadowBlurChange}
          borderRadius={borderRadius}
          onBorderRadiusChange={handleBorderRadiusChange}
          colorDifference={colorDifferenceVal}
          onColorDifferenceChange={handleColorDifferenceChange}
        />
      </div>
      <div>
        <UiSelector />
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <Preview
          color={color}
          neumorphismShape={neumorphismShape}
          activeLightSource={activeLightSource}
          boxSize={boxSize}
          shadowDistance={shadowDistance}
          shadowBlur={shadowBlur}
          borderRadius={borderRadius}
          colorDifference={colorDifference}
        />
      </div>
    </div>
  );
}

export default App;
