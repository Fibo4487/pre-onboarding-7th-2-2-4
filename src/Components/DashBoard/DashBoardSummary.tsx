import React from "react";
import styled from "styled-components";

const DashBoardSummary = () => {
  return <Conatiner></Conatiner>;
};

export default DashBoardSummary;

const Conatiner = styled.div`
  width: 100%;
  height: 178px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray_100};
`;
