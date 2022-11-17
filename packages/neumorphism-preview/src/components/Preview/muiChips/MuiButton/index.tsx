import { SxProps, Theme } from '@mui/material/styles';
import Button from '@mui/material/Button';

export interface MuiButtonProps {
  sx?: SxProps<Theme>
}
export default function MuiButton({ sx }:MuiButtonProps) {
  return <Button variant="contained" sx={sx}>Neumorphism Mui Button</Button>;
}