import { useState, useMemo } from "react"
import { StyleCodeType } from 'neumorphism-pannel'
import TypeRadioGroup from '../TypeRadioGroup'

export interface StyleCodeAreaProps {
  styleForReactString: string
  styleForCssString: string
}
export default function StyleCodeArea({ styleForReactString, styleForCssString }: StyleCodeAreaProps) {
  const [styleCodeType, setStyleCodeType] = useState<StyleCodeType>(StyleCodeType.reactStyle)
  const handleStyleCodeTypeChange = (newValue: any) => {
    setStyleCodeType(parseInt(newValue, 10))
  }
  const codeString = useMemo(() => {
    switch (styleCodeType) {
      case StyleCodeType.css:
        return styleForCssString;
      default: // StyleCodeType.reactStyle
        return styleForReactString
    }
  }, [styleCodeType, styleForReactString, styleForCssString])
  return <div className="w-full h-full">
    <TypeRadioGroup
      label="Style Code"
      value={styleCodeType}
      options={[
        { radioKey: StyleCodeType.reactStyle, radioText: "React Style" },
        { radioKey: StyleCodeType.css, radioText: "CSS" },
      ]}
      onChange={handleStyleCodeTypeChange}
    />
    <textarea readOnly className="w-full h-44 bg-black p-2" value={codeString}></textarea>
  </div>
}