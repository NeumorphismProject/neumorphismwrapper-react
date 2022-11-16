import { useState } from 'react';
import { styled } from '@mui/material/styles';
import TreeMenu, { ISidebarMenuGroup, ISelectedAppMenuItem, ITreeMenuprops } from '@/components/TreeMenu';
import { menu, PreviewComponentType } from './menu';

const Wrapper = styled('div')(() => ({
  overflowY: 'auto'
}));

export interface IUiSelectorProps extends Pick<ITreeMenuprops, 'onSelected'> { }
export default function UiSelector({ onSelected }: IUiSelectorProps) {
  const [selectedNodeId, setSelectedNodeId] = useState<string>(PreviewComponentType.NormalBox);
  const [selectedChildNodeId, setSelectedChildNodeId] = useState<string>('');

  return (
    <Wrapper className="h-full w-64">
      <TreeMenu
        menuData={menu}
        onSelected={onSelected}
        selectedNodeId={selectedNodeId}
        setSelectedNodeId={setSelectedNodeId}
        selectedChildNodeId={selectedChildNodeId}
        setSelectedChildNodeId={setSelectedChildNodeId}
      />
    </Wrapper>
  );
}