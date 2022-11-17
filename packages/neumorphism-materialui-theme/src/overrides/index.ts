import { Components } from '@mui/material/styles';
import { NeumorphismStyles } from './types';
import Button from './Button';

export * from './types';

export default function ComponentsOverrides(neuStyles: NeumorphismStyles): Components {
  return Object.assign(
    Button(neuStyles)
  );
}