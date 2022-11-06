import React from "react";
import styled from "styled-components";
import SummaryBooleanUp from "@/assets/SummaryBooleanUp.svg";
import SummaryBooleanDown from "@/assets/SummaryBooleanDown.svg";

interface SummaryItemProps {
  title: string;
  value: string;
  UpDownboolean: boolean;
  booleanValue: string;
}

const SummaryItem = ({
  title,
  value,
  UpDownboolean,
  booleanValue
}: SummaryItemProps) => {
  return (
    <Container>
      <LeftContainer>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </LeftContainer>
      <RightContainer>
        <BooleanValue>
          <img
            src={UpDownboolean ? SummaryBooleanUp : SummaryBooleanDown}
            alt="summaryBoolean"
          />
          {booleanValue}
        </BooleanValue>
      </RightContainer>
    </Container>
  );
};

export default SummaryItem;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 40px;
  border: 1px solid ${({ theme }) => theme.colors.gray_100};
  border-radius: 10px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray_300};
  margin-bottom: 10px;
`;

const Value = styled.div`
  font-size: 16px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.gray_800};
`;

const BooleanValue = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray_300};

  img {
    margin-right: 5px;
  }
`;
