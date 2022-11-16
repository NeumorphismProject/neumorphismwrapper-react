import { useState } from 'react';
import { styled } from '@mui/material/styles';
import TreeMenu, { ISidebarMenuGroup } from '../TreeMenu';
import { muiMenu } from './muiMenu';

const Wrapper = styled('div')(() => ({
  overflowY: 'auto'
}));

export default function UiSelector() {
  const [menu, setMenu] = useState<Array<ISidebarMenuGroup>>(muiMenu);
  const [selectedNodeId, setSelectedNodeId] = useState('');
  const [selectedChildNodeId, setSelectedChildNodeId] = useState('');

  const handleSelected = () => {
  };

  return (
    <Wrapper className="h-full w-64">
      <TreeMenu
        menuData={menu}
        onSelected={handleSelected}
        selectedNodeId={selectedNodeId}
        setSelectedNodeId={setSelectedNodeId}
        selectedChildNodeId={selectedChildNodeId}
        setSelectedChildNodeId={setSelectedChildNodeId}
      />
    </Wrapper>
  );
}