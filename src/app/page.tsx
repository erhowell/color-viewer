import { Container, styled } from "styled-system/jsx";

import ColorViewerController from "@/components/ColorViewerController";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Viewer",
  description: "Color Viewer by Liz H.",
};

export default function Home() {
  return (
    <styled.section py="8" w="full">
      <Container maxW="7xl">
        <styled.p py="4">
          Input a list of colors separating by comma, space, or newline
        </styled.p>
        <ColorViewerController />
      </Container>
    </styled.section>
  );
}
