import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { styled } from "styled-system/jsx";

export default function ColorCard({ color }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: color,
    });

  return (
    <styled.div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        touchAction: "none", // Prevent default touch gestures
      }}
      m="4"
      w="fit-content"
      textAlign="center"
      borderColor="black"
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
    >
      <styled.div
        style={{
          backgroundColor: color,
        }}
        minH="20"
        borderBottomColor="black"
        borderBottomWidth="1px"
        borderTopRadius="lg"
      />

      <styled.p px="4">{color.toUpperCase()}</styled.p>
    </styled.div>
  );
}
