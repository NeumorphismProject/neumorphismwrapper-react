import React from "react";
import { getNeumorphismStyle, NeumorphismStyleParams } from "neumorphism-pannel"
import Slider from '@mui/material/Slider';

export interface ValueSliderProps {
  label: string
  value?: any
  onChange?: (newValue: any) => void
  max?: number
  min?: number
}
export default function ValueSlider({ label, value, onChange, max, min }: ValueSliderProps) {
  return <div className="w-full">
    <span>{label}</span>
    <div className="flex">
      <Slider value={value} aria-label="Default" valueLabelDisplay="auto"
        onChange={(event: Event,
          newValue: number | number[],
          activeThumb: number) => {
          onChange && onChange(newValue as any)
        }}
        max={max}
        min={min} />
      <span className="ml-2">{value}</span>
    </div>
  </div>
}