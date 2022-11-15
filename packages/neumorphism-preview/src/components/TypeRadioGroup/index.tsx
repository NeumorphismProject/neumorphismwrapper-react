import React from 'react';
import { NeumorphismShapeType } from 'neumorphism-pannel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export interface TypeRadioOption {
  radioKey: any
  radioText: string
}

export interface TypeRadioGroupProps {
  label: string
  value: any
  options: Array<TypeRadioOption>
  onChange?: (newValue: any) => void
}
export default function TypeRadioGroup({ label, value, options, onChange }: TypeRadioGroupProps) {
  return (
    <div className="border-2 border-dashed border-white p-1">
      <FormControl>
        <span className="font-bold text-white">{label}</span>
        <RadioGroup
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>, value: string) => {
            if (onChange) onChange(value);
          }}
          row
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          {(Array.isArray(options) && options.length > 0)
          && options.map((opt: TypeRadioOption) => (
            <FormControlLabel key={`typeradio-${opt.radioKey}`} value={opt.radioKey} control={<Radio />} label={opt.radioText} />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}