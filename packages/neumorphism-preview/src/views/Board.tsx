import { useState, useCallback, useMemo } from 'react';
import {
  MuiComponentType, MuiComponentDefaultSize,
  muiButtonDefaultSize, muiButtonPrettyConfiguration
} from 'neumorphism-materialui-theme';
import {
  NeumorphismStyleParams,
  StyleCodeType,
  getNeumorphismStyle, isValidColor,
  NeumorphismShapeType, NeumorphismActiveLightSourceType,
  BOX_SIZE, NEUMORPHISM_SHAPE, ACTIVE_LIGHT_SOURCE, SHADOW_DISTANCE, BORDER_RADIUS, COLOR_DIFFERENCE
} from 'neumorphism-pannel';
import Sidebar from '@/components/Sidebar';
import Preview from '@/components/Preview';
import UiSelector from '@/components/UiSelector';
import { ISelectedAppMenuItem } from '@/components/TreeMenu';
import { PreviewComponentType } from '@/components/UiSelector/menu';

export interface ResetConfigurationParams extends MuiComponentDefaultSize, NeumorphismStyleParams {
  frontColor?: string
}

function Board() {
  const configurationRecorder: any = {};

  const [color, setColor] = useState<string>('#27282b');
  const handleBackgroundColorChange = (colorHex: string) => {
    if (isValidColor(colorHex)) {
      setColor(colorHex);
    }
  };

  const [frontColor, setFrontColor] = useState<string>('#ffffff');
  const handleFrontColorChange = (colorHex: string) => {
    if (isValidColor(colorHex)) {
      setFrontColor(colorHex);
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

  const [boxWidth, setBoxWidth] = useState<number>(BOX_SIZE);
  const handleBoxWidthChange = (newValue: number) => {
    setBoxWidth(newValue);
  };
  const [boxHeight, setBoxHeight] = useState<number>(BOX_SIZE);
  const handleBoxHeightChange = (newValue: number) => {
    setBoxHeight(newValue);
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

  const pannelProps = useMemo(() => ({
    boxWidth,
    boxHeight,
    color,
    frontColor,
    neumorphismShape,
    activeLightSource,
    shadowDistance,
    shadowBlur,
    borderRadius,
    colorDifference
  }), [boxWidth,
    boxHeight,
    color,
    frontColor,
    neumorphismShape,
    activeLightSource,
    shadowDistance,
    shadowBlur,
    borderRadius,
    colorDifference]);
  const configurationString = useMemo(
    () => JSON.stringify(pannelProps, null, '\t'),
    [pannelProps]
  );

  // -------- UI Selector --------
  function resetConfiguration(configuration: ResetConfigurationParams) {
    const {
      boxWidth,
      boxHeight,
      color,
      frontColor,
      shadowDistance,
      shadowBlur,
      borderRadius,
      colorDifference
    } = configuration;
    if (boxWidth) {
      setBoxWidth((prev:any) => {
        configurationRecorder.boxWidth = prev;
        return boxWidth;
      });
    }
    if (boxHeight) {
      setBoxHeight((prev:any) => {
        configurationRecorder.boxHeight = prev;
        return boxHeight;
      });
    }
    if (color) {
      setColor((prev:any) => {
        configurationRecorder.color = prev;
        return color;
      });
    }
    if (frontColor) {
      setFrontColor((prev:any) => {
        configurationRecorder.frontColor = prev;
        return frontColor;
      });
    }
    if (shadowDistance) {
      setShadowDistance((prev:any) => {
        configurationRecorder.shadowDistance = prev;
        return shadowDistance;
      });
    }
    if (shadowBlur) {
      setShadowBlur((prev:any) => {
        configurationRecorder.shadowBlur = prev;
        return shadowBlur;
      });
    }
    if (borderRadius) {
      setBorderRadius((prev:any) => {
        configurationRecorder.borderRadius = prev;
        return borderRadius;
      });
    }
    if (colorDifference) {
      setColorDifferenceVal((prev:any) => {
        configurationRecorder.colorDifference = prev / 100;
        return colorDifference * 100;
      });
    }
  }
  const [previewType, setPreviewType] = useState<PreviewComponentType | MuiComponentType>(PreviewComponentType.NormalBox);
  const handleMuiComponentsSelected = useCallback((selectedItem: ISelectedAppMenuItem) => {
    let previewType: any;
    if (selectedItem.childItem && Object.keys(selectedItem.childItem).length > 0) {
      previewType = selectedItem.childItem.nodeId;
    } else {
      previewType = selectedItem.nodeItem.nodeId;
    }
    if (previewType === MuiComponentType.MuiButton) {
      resetConfiguration({ ...muiButtonDefaultSize, ...muiButtonPrettyConfiguration });
    } else if (previewType === PreviewComponentType.NormalBox) {
      resetConfiguration(configurationRecorder);
    }
    setPreviewType(previewType);
  }, []);

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
          backgroundColor={color}
          onBackgroundColorChange={handleBackgroundColorChange}
          frontColor={frontColor}
          onFrontColorChange={handleFrontColorChange}
          styleForReactString={styleForReactString}
          styleForCssString={styleForCssString}
          configurationString={configurationString}
          neumorphismShape={neumorphismShape}
          onNeumorphismShapeChange={handleNeumorphismShapeChange}
          activeLightSource={activeLightSource}
          onActiveLightSourceChange={handleActiveLightSourceChange}
          boxWidth={boxWidth}
          onBoxWidthChange={handleBoxWidthChange}
          boxHeight={boxHeight}
          onBoxHeightChange={handleBoxHeightChange}
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
        <UiSelector onSelected={handleMuiComponentsSelected} />
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <Preview
          previewType={previewType}
          pannelProps={pannelProps}
        />
      </div>
    </div>
  );
}

export default Board;
