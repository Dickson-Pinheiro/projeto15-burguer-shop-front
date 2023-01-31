import styled from "styled-components"

export const ContainerButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: ${props => props.currentStep === 3 ? "center" : "space-between"};
`