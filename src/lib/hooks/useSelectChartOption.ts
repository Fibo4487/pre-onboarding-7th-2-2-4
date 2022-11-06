import React from "react";
import { ChartFilterType } from "@/lib/types/ChartFilterTypes";
import { ChartYAxisFilterState } from "@/lib/states/DashBoardState";
import { useRecoilState } from "recoil";

export const useSelectChartOptions = () => {
  const [firstOptionOpen, setFirstOptionOpen] = React.useState(false);
  const [secondOptionOpen, setSecondOptionOpen] = React.useState(false);
  const [dateOptionOpen, setDateOptionOpen] = React.useState(false);
  const optionsArr = Object.values(ChartFilterType);
  const [firstOptions, setFirstOptions] = React.useState(optionsArr);
  const [secondOptions, setSecondOptions] = React.useState(optionsArr);
  const [dateOptions, setDateOptions] = React.useState([
    "주간",
    "월간",
    "분기별",
    "연간"
  ]);
  const [dateOption, setDateOption] = React.useState("주간");
  const [ChartYAxisFilter, setChartYAxisFilter] = useRecoilState(
    ChartYAxisFilterState
  );

  const handleFirstDropdownClick = () => {
    setFirstOptionOpen(!firstOptionOpen);
    setSecondOptionOpen(false);
  };

  const handleSecondDropdownClick = () => {
    setSecondOptionOpen(!secondOptionOpen);
    setFirstOptionOpen(false);
  };

  const handleDateDropdownClick = () => {
    setDateOptionOpen(!dateOptionOpen);
  };

  const handleFirstOptionClick = (value: string) => {
    const findKey = Object.keys(ChartFilterType).find(
      (key) => ChartFilterType[key as keyof typeof ChartFilterType] === value
    );
    setChartYAxisFilter({
      ...ChartYAxisFilter,
      main: findKey as keyof typeof ChartFilterType
    });
    setSecondOptions(optionsArr.filter((option) => option !== value));
  };

  const handleSecondOptionClick = (value: string) => {
    const findKey = Object.keys(ChartFilterType).find(
      (key) => ChartFilterType[key as keyof typeof ChartFilterType] === value
    );
    setChartYAxisFilter({
      ...ChartYAxisFilter,
      sub: findKey as keyof typeof ChartFilterType
    });
    setFirstOptions(optionsArr.filter((option) => option !== value));
  };

  const handleDateOptionClick = (value: string) => {
    setDateOption(value);
  };

  return {
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
  };
};
