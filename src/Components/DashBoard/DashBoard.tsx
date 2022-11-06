import React from "react";
import styled from "styled-components";
import SelectChartOption from "./SelectChartOption";
import DashBoardSummary from "./DashBoardSummary";

const DashBoard = () => {
  return (
    <Container>
      <Title>통합 광고 현황</Title>
      <DashBoardContainer>
        <DashBoardSummary />
        <SelectChartOption />
        <DashBoardChart />
      </DashBoardContainer>
    </Container>
  );
};

export default DashBoard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 40px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 800;
  width: 100%;
  color: ${({ theme }) => theme.colors.gray_800};
  height: 60px;
  align-items: center;
  display: flex;
`;

const DashBoardContainer = styled.div`
  width: 100%;
  height: 654px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  padding: 40px;
`;

const DashBoardChart = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray_100};
  margin-top: 40px;
`;
