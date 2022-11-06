import React from "react";
import styled from "styled-components";
import ContentDropdown from "@/Components/ContentDropdown/ContentDropdown";
import { useSelectChartOptions } from "@/lib/hooks/useSelectChartOption";

const SelectChartOption = () => {
  const {
    ChartYAxisFilter,
    firstOptionOpen,
    secondOptionOpen,
    dateOptionOpen,
    firstOptions,
    secondOptions,
    dateOptions,
    dateOption,
    handleFirstDropdownClick,
    handleSecondDropdownClick,
    handleDateDropdownClick,
    handleFirstOptionClick,
    handleSecondOptionClick,
    handleDateOptionClick
  } = useSelectChartOptions();
  return (
    <Container>
      <DropdownContainer>
        <ContentDropdown
          initValue=""
          items={firstOptions}
          isShow={firstOptionOpen}
          setIsShow={handleFirstDropdownClick}
          onChange={handleFirstOptionClick}
          hasBorder={true}
        />
        {ChartYAxisFilter?.main && (
          <ContentDropdown
            initValue=""
            items={secondOptions}
            isShow={secondOptionOpen}
            setIsShow={handleSecondDropdownClick}
            onChange={handleSecondOptionClick}
            hasBorder={true}
          />
        )}
      </DropdownContainer>
      <ContentDropdown
        initValue={dateOption}
        items={dateOptions}
        isShow={dateOptionOpen}
        setIsShow={handleDateDropdownClick}
        onChange={handleDateOptionClick}
        hasBorder={false}
      />
    </Container>
  );
};

export default SelectChartOption;

const Container = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  margin-top: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 270px;
  height: 100%;
`;
