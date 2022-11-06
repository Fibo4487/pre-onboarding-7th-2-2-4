import React, { useState } from "react";
import { DateRange } from "react-day-picker";

type ChartData = {
  imp: number;
  click: number;
  cost: number;
  conv: number;
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
  roas: number;
  date: string;
};

interface DashBoardData {
  dateRange: DateRange | undefined;
  setDateRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  ChartData: ChartData[];
  setChartData: React.Dispatch<React.SetStateAction<ChartData[]>>;
  ChartYAxisFilter: string | null;
  ChartSubYAxisFilter: string | null;
  setChartYAxisFilter: (filter: string) => void;
  setChartSubYAxisFilter: (filter: string) => void;
}

export const DashBoardContext = React.createContext<DashBoardData | null>(null);

export const DashBoardContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [ChartData, setChartData] = useState<ChartData[]>([]);
  const [ChartYAxisFilter, setChartYAxisFilter] = useState<string | null>(null);
  const [ChartSubYAxisFilter, setChartSubYAxisFilter] = useState<string | null>(
    null
  );

  return (
    <DashBoardContext.Provider
      value={{
        dateRange,
        setDateRange,
        ChartData,
        setChartData,
        ChartYAxisFilter,
        ChartSubYAxisFilter,
        setChartYAxisFilter,
        setChartSubYAxisFilter
      }}
    >
      {children}
    </DashBoardContext.Provider>
  );
};

export const useDashBoardContext = () => {
  const context = React.useContext(DashBoardContext);
  if (context === null) {
    throw new Error("useDashBoard must be used within a DashBoardProvider");
  }
  return context;
};
