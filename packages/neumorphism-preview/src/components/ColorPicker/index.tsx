import { useState } from 'react';
import { styled } from '@mui/material/styles';

export interface ColorPickerProps {
  title: string
  color: string
  onColorChange: (color: string) => void
}
export default function ColorPicker({ title, color, onColorChange }: ColorPickerProps) {
  const handleColorChange = (e: any) => {
    onColorChange(e.target.value);
  };
  return (
    <div className="h-16">
      <div className="font-bold">{title}</div>
      <div>
        <input
          className="relative top-1 mr-2"
          type="color"
          name="color"
          onChange={handleColorChange}
          value={color}
          id="color"
        />
        <input
          className="bg-black"
          type="text"
          name="color"
          onChange={handleColorChange}
          value={color}
        />
      </div>
    </div>
  );
}