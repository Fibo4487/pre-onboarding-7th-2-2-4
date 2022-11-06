import { DateRange } from "react-day-picker";
import { atom, selector } from "recoil";
import { ChartFilterTypeKey } from "../types/ChartFilterTypes";

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

export const chartDataState = atom<ChartData[]>({
  key: "chartDataState",
  default: []
});

export const dateRangeState = atom<DateRange>({
  key: "dateRangeState",
  default: {
    from: new Date(),
    to: new Date()
  }
});

export const ChartYAxisFilterState = atom<{
  main: ChartFilterTypeKey | null;
  sub: ChartFilterTypeKey | null;
}>({
  key: "ChartYAxisFilterState",
  default: {
    main: null,
    sub: null
  }
});
