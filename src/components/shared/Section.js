import React from "react";
import styled from "styled-components";
import { Title } from "./Title";

export const Section = ({ titleColor, gap, landing, title, children }) => {
  return (
    <StyledSection landing={landing} gap={gap}>
      {title && <Title titleColor={titleColor}>{title}</Title>}
      {children}
    </StyledSection>
  );
};

export const StyledSection = styled.section`
  padding: ${(props) =>
    props.landing ? "2rem 1.875rem" : props.theme.padding.section};
  min-height: ${(props) => (props.landing ? "calc(100vh - 3.875rem)" : "auto")};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || "2.5rem"};

  @media (min-width: ${(props) => props.theme.media.md}) {
    padding: ${(props) => props.theme.padding.sectionLg};
  }
`;
