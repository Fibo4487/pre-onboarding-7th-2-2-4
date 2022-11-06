import React from "react";
import styled from "styled-components";
import SummaryItem from "./SummaryItem";

const DashBoardSummary = () => {
  return (
    <Conatiner>
      <SummaryItem
        title="Total Sales"
        value="1,000,000"
        UpDownboolean={true}
        booleanValue="10%"
      />
      <SummaryItem
        title="Total Sales"
        value="1,000,000"
        UpDownboolean={true}
        booleanValue="10%"
      />
      <SummaryItem
        title="Total Sales"
        value="1,000,000"
        UpDownboolean={true}
        booleanValue="10%"
      />
      <SummaryItem
        title="Total Sales"
        value="1,000,000"
        UpDownboolean={true}
        booleanValue="10%"
      />
      <SummaryItem
        title="Total Sales"
        value="1,000,000"
        UpDownboolean={true}
        booleanValue="10%"
      />
      <SummaryItem
        title="Total Sales"
        value="1,000,000"
        UpDownboolean={true}
        booleanValue="10%"
      />
    </Conatiner>
  );
};

export default DashBoardSummary;

const Conatiner = styled.div`
  width: 100%;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 22px;
  column-gap: 20px;
`;
