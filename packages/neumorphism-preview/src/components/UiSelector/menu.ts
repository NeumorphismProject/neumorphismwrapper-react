import { ISidebarMenuGroup, ISidebarMenuItem } from '@/components/TreeMenu/menuIcons';
import { muiMenu } from './muiMenu';

export enum PreviewComponentType {
  NormalBox = 'NormalBox'
}

const baseItems: ISidebarMenuItem[] = [
  {
    nodeId: PreviewComponentType.NormalBox,
    labelText: 'Normal',
    labelIconName: 'DonutSmall'
  }
];

export const menu: ISidebarMenuGroup[] = [
  {
    nodeId: 'Normal',
    groupTitle: 'Normal Box',
    groupCaption: '',
    children: baseItems
  },
  ...muiMenu
];