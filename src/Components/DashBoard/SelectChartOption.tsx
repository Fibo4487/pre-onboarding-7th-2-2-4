import React from "react";
import styled from "styled-components";

const SelectChartOption = () => {
  return <Container></Container>;
};

export default SelectChartOption;

const Container = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray_100};
  margin-top: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
