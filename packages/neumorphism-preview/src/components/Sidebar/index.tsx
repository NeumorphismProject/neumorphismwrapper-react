import React from "react";

export interface SidebarProps {
  color: string
  onColorChange: (colorHex: string) => void
  styleForReactString: string
}
export default function Sidebar({ color, onColorChange, styleForReactString }: SidebarProps) {
  const handleColorChange = (e: any) => {
    onColorChange(e.target.value)
  }
  return <div className="w-full h-full flex flex-col">
    <div className="h-32">
      <label htmlFor="color">Pick a color:</label>
      <input
        type="color"
        name="color"
        onChange={handleColorChange}
        placeholder="#ffffff"
        value={color}
        id="color"
      />
      <label htmlFor="colorInput" style={{ paddingLeft: '10px' }}>
        or
      </label>
      <input
        type="text"
        placeholder="#ffffff"
        name="color"
        onChange={handleColorChange}
        value={color}
      />
    </div>
    {/* ------------ */}
    <div>
      <div className=''>react style</div>
      <textarea className='w-96 h-64'>{styleForReactString}</textarea>
    </div>
  </div>
}