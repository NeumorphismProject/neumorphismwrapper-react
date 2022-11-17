import { MuiComponentType } from 'neumorphism-materialui-theme';
import { ISidebarMenuGroup, ISidebarMenuItem } from '@/components/TreeMenu/menuIcons';

// ------------------------------- sidebar menu -----------------------------------------------

export function valueOfMuiComponentType() {
  return MuiComponentType.MuiButton;
}

const baseItems: ISidebarMenuItem[] = [
  {
    nodeId: '1',
    labelText: 'MUI Base',
    labelIconName: 'DonutSmall',
    children: [
      {
        nodeId: MuiComponentType.MuiButton,
        labelText: 'Button',
        labelIconName: 'Badge',
        routePath: 'Button'
      }
    ]
  }
];

export const muiMenu: ISidebarMenuGroup[] = [
  {
    nodeId: 'mui',
    groupTitle: 'Material UI',
    groupCaption: 'MUI',
    children: baseItems
  }
];
