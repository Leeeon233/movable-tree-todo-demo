import React from "react";
import styled from "@emotion/styled";
import {
  ItemId,
  moveItemOnTree,
  mutateTree,
  RenderItemParams,
  Tree,
  TreeData,
  TreeDestinationPosition,
  TreeSourcePosition,
} from "react-beautiful-tree";
import { ITEM_HEIGHT, TreeItem } from "./TreeItem";

const OFFSET_PER_LEVEL = 36;

const StyledTreeWrapper = styled.div`
  padding: 24px;
  height: 100%;
  border: 1px solid #ededed;
  border-radius: 8px;
  margin: 24px;
  padding: 24px;
  max-width: 500px;
  overflow-y: auto;
`;

const StyledVirtualTreeWrapper = styled.div`
  height: 100vh;
  border: 1px solid #ededed;
  border-radius: 8px;
  margin: 24px;
  padding: 24px;
  max-width: 500px;
`;

const virtualTree: TreeData = {
  rootId: "root",
  items: {
    root: {
      id: "root",
      data: { title: "Root" },
      children: ["item-0"],
      hasChildren: true,
      isExpanded: true,
      isChildrenLoading: false,
    },
    "item-0": {
      id: "item-0",
      data: {
        title: "Item 0",
      },
      children: [
        "item-1",
        "item-2",
      ],
      hasChildren: true,
      isExpanded: true,
      isChildrenLoading: false,
    },
    "item-1": {
      id: "item-1",
      data: {
        title: "Item 1",
      },
      children: [],
      hasChildren: false,
      isExpanded: true,
      isChildrenLoading: false,
    },
    "item-2": {
      id: "item-2",
      data: {
        title: "Item 2",
      },
      children: [],
      hasChildren: false,
      isExpanded: true,
      isChildrenLoading: false,
    },
  },
};

const renderItem = ({ ...props }: RenderItemParams) => {
  return <TreeItem {...props} />;
};

const TreeView: React.FC = () => {
  const [tree, setTree] = React.useState<TreeData>(virtualTree);

  const onExpand = (itemId: ItemId) => {
    setTree(mutateTree(tree, itemId, { isExpanded: true }));
  };

  const onCollapse = (itemId: ItemId) => {
    setTree(mutateTree(tree, itemId, { isExpanded: false }));
  };

  const onDragEnd = (
    source: TreeSourcePosition,
    destination?: TreeDestinationPosition,
  ) => {
    if (!destination) return;

    const newTree = moveItemOnTree(tree, source, destination);
    setTree(newTree);
  };

  return (
    <StyledTreeWrapper>
      <Tree
        tree={tree}
        renderItem={renderItem}
        onExpand={onExpand}
        isDragEnabled
        onDragEnd={onDragEnd}
        offsetPerLevel={OFFSET_PER_LEVEL}
        onCollapse={onCollapse}
      />
    </StyledTreeWrapper>
  );
};

export const Virtual: React.FC = () => {
  const [tree, setTree] = React.useState<TreeData>(virtualTree);

  const onExpand = (itemId: ItemId) => {
    setTree(mutateTree(tree, itemId, { isExpanded: true }));
  };

  const onCollapse = (itemId: ItemId) => {
    setTree(mutateTree(tree, itemId, { isExpanded: false }));
  };

  const onDragEnd = (
    source: TreeSourcePosition,
    destination?: TreeDestinationPosition,
  ) => {
    if (!destination) return;

    const newTree = moveItemOnTree(tree, source, destination);
    setTree(newTree);
  };

  return (
    <StyledVirtualTreeWrapper>
      <Tree
        tree={tree}
        renderItem={renderItem}
        onExpand={onExpand}
        isDragEnabled
        isVirtualizationEnabled
        onDragEnd={onDragEnd}
        offsetPerLevel={OFFSET_PER_LEVEL}
        virtualItemHeight={ITEM_HEIGHT}
        onCollapse={onCollapse}
      />
    </StyledVirtualTreeWrapper>
  );
};

export default TreeView;
