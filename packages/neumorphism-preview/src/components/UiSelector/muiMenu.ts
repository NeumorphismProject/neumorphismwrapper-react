import { ISidebarMenuGroup, ISidebarMenuItem } from '../TreeMenu/menuIcons';

// ------------------------------- sidebar menu -----------------------------------------------

const group1Items: ISidebarMenuItem[] = [
  {
    nodeId: '1',
    labelText: 'Base',
    labelIconName: 'DonutSmall',
    children: [
      {
        nodeId: '11',
        labelText: 'Button',
        labelIconName: 'Badge',
        labelInfo: '90'
      }
    ]
  }
];

export const muiMenu: ISidebarMenuGroup[] = [
  {
    nodeId: 'mui',
    groupTitle: 'Material UI',
    groupCaption: 'MUI',
    children: group1Items
  }
];
