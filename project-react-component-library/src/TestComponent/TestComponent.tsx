import React from "react";
import styled from "styled-components";

import { TestComponentProps } from "./TestComponent.types";

const StyledDiv = styled.div`
  background-color: white;
  color: blue;
  border: 1px solid blue;
  padding: 16px;
  width: 360px;
  text-align: center;

  ${(props) =>
    props.theme === "secondary" &&
    `background-color: blue;
     color: white;`}
`;

const StyledHeading = styled.h1`
  font-size: 32px;
`;

const StyledDescription = styled.h2``;

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <StyledDiv data-testid="test-component" theme={theme}>
    <StyledHeading className="heading">I'm the test component</StyledHeading>
    <StyledDescription>Hello World!</StyledDescription>
  </StyledDiv>
);

export default TestComponent;
