"use client";

import { useState } from "react";
import { styled } from "styled-system/jsx";
import ColorCard from "./ColorCard";
import DraggableList from "./DraggableList";

function isColor(value: string): boolean {
  const s = new Option().style;
  s.color = value;
  return s.color !== "";
}
export default function ColorsInput({ setColors }) {
  const [input, setInput] = useState("");
  const [errors, setError] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleParseColors = () => {
    try {
      if (!input) {
        throw Error("Please enter at least one color");
      }
      const colorList = input
        ?.toString()
        .split(/[,\s\n]+/)
        .filter(Boolean);

      const errorColors = colorList.filter((color) => !isColor(color));
      if (!!errorColors?.length) {
        console.log(errorColors);
        throw Error(
          `There was an issue parsing your input. ${errorColors.join(", ")} are not valid colors. Please correct this error and try again.`
        );
      }
      console.log(colorList);
      setColors(colorList);
      setError("");
    } catch (error) {
      setError(error.toString());
    }
  };

  return (
    <styled.div>
      {!!errors && <styled.div>{errors}</styled.div>}
      <styled.div w={["full", "1/3", "1/2"]}>
        <styled.textarea
          name="colors"
          w="full"
          minH="80"
          display="block"
          borderColor="black"
          borderWidth="1px"
          borderRadius="lg"
          onChange={handleInputChange}
        />
        <styled.button
          onClick={handleParseColors}
          px="4"
          py="2"
          my="4"
          color="black"
          bg="gray.200"
          borderRadius="xl"
          float="right"
          _hover={{ bg: "green" }}
        >
          Submit
        </styled.button>
      </styled.div>
    </styled.div>
  );
}
