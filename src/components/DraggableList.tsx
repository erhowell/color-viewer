import { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { styled } from "styled-system/jsx";

import ColorCard from "./ColorCard";

export default function DraggableList({
  listItems,
  handleDragEnd,
}: {
  listItems: string[];
  handleDragEnd: (event: DragEndEvent) => void;
}) {
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={listItems} strategy={verticalListSortingStrategy}>
        <styled.div
          w="full"
          display="flex"
          flexWrap="wrap"
          justifyContent="start"
          alignItems="start"
        >
          {listItems.map((color) => (
            <ColorCard key={color} color={color} />
          ))}
        </styled.div>
      </SortableContext>
    </DndContext>
  );
}
