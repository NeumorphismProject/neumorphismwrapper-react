import { useState, useMemo } from 'react';
import { StyleCodeType } from 'neumorphism-pannel';
import TypeRadioGroup from '@/components/TypeRadioGroup';

export interface StyleCodeAreaProps {
  styleForReactString: string
  styleForCssString: string
  configurationString: string
}
export default function StyleCodeArea({ styleForReactString, styleForCssString, configurationString }: StyleCodeAreaProps) {
  const [styleCodeType, setStyleCodeType] = useState<StyleCodeType | 'configurationString'>(StyleCodeType.reactStyle);
  const handleStyleCodeTypeChange = (newValue: any) => {
    setStyleCodeType(newValue);
  };
  const codeString = useMemo(() => {
    switch (styleCodeType) {
      case StyleCodeType.css:
        return styleForCssString;
      case 'configurationString':
        return configurationString;
      default: // StyleCodeType.reactStyle
        return styleForReactString;
    }
  }, [styleCodeType, styleForReactString, styleForCssString, configurationString]);
  return (
    <div className="h-full w-full">
      <TypeRadioGroup
        label="Style Code"
        value={styleCodeType}
        options={[
          { radioKey: StyleCodeType.reactStyle, radioText: 'React Style' },
          { radioKey: StyleCodeType.css, radioText: 'CSS' },
          { radioKey: 'configurationString', radioText: 'Configuration' }
        ]}
        onChange={handleStyleCodeTypeChange}
      />
      <textarea readOnly className="h-44 w-full bg-black p-2" value={codeString}></textarea>
    </div>
  );
}