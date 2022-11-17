import { muiButtonPrettyConfiguration } from './overrides/Button';

export enum MuiComponentType {
  MuiButton = 'MuiButton'
}

export function getPrettyConfiguration(type: MuiComponentType) {
  switch (type) {
    case MuiComponentType.MuiButton:
      return muiButtonPrettyConfiguration;
    default:
      return {};
  }
}