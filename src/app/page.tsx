import { Container, styled } from "styled-system/jsx";

import ColorsInput from "@/components/ColorsInput";
import ColorViewerController from "@/components/ColorViewerController";

export default function Home() {
  return (
    <styled.section py="8">
      <Container maxW="7xl">
        <styled.p py="4">
          Input a list of colors separating by comma, space, or newline
        </styled.p>
        <ColorViewerController />
      </Container>
    </styled.section>
  );
}
