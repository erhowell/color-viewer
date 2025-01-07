"use client";

import { useState } from "react";
import { styled } from "styled-system/jsx";
import DraggableList from "./DraggableList";
import ColorsInput from "./ColorsInput";
import { DragEndEvent } from "@dnd-kit/core";

export default function ColorViewerController() {
  const [colors, setColors] = useState<string[]>([]);
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const oldIndex = colors.indexOf(active.id as string);
    const newIndex = colors.indexOf(over.id as string);

    if (oldIndex !== newIndex) {
      const updatedItems = [...colors];
      updatedItems.splice(oldIndex, 1);
      updatedItems.splice(newIndex, 0, active.id as string);
      setColors(updatedItems);
    }
  };
  return (
    <styled.section>
      <ColorsInput setColors={setColors} />
      {!!colors?.length && (
        <styled.div py="10" w="full">
          <DraggableList listItems={colors} handleDragEnd={handleDragEnd} />
        </styled.div>
      )}
    </styled.section>
  );
}
