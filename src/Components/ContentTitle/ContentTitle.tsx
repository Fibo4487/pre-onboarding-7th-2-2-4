import React from "react";
import styled from "styled-components";
import DropdownIcon from "@/assets/DropdownIcon.svg";
import "react-day-picker/dist/style.css";
import { useSelectDate } from "@/lib/hooks/useSelectDate";

interface ContentTitleProps {
  title: string;
  isDashBoard: boolean;
}

const ContentTitle = ({ title, isDashBoard }: ContentTitleProps) => {
  const { dateRange, toggleDatePicker, dateRangeToString, renderDatePicker } =
    useSelectDate();

  return (
    <>
      <Container>
        <Title>{title}</Title>
        {isDashBoard && (
          <SelectDateBox>
            <SelectDate onClick={toggleDatePicker}>
              {dateRangeToString}
              <SelectDateIcon
                src={DropdownIcon}
                alt="datePickDropdown"
                onClick={toggleDatePicker}
              />
            </SelectDate>
            {renderDatePicker()}
          </SelectDateBox>
        )}
      </Container>
    </>
  );
};

export default ContentTitle;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0 40px;
`;

const Title = styled.div`
  font-size: 26px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.gray_800};
`;

const SelectDateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 24px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray_800};
`;

const SelectDate = styled.div`
  margin-right: 8px;
  cursor: pointer;
`;

const SelectDateIcon = styled.img`
  width: 24px;
  height: 24px;
`;
