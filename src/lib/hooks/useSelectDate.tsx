// datepicker custom hook

import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { useCallback, useState } from "react";
import {
  DateFormatter,
  DateRange,
  DayPicker,
  SelectRangeEventHandler
} from "react-day-picker";
import { useRecoilState } from "recoil";
import { dateRangeState } from "../states/DashBoardState";

export const useSelectDate = (initialDate?: DateRange) => {
  const [dateRange, setDateRange] = useRecoilState(dateRangeState);
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const dateRangeToString = ((
    dateRange: DateRange | undefined,
    initialDate: DateRange | undefined
  ) => {
    if (!initialDate && !dateRange) {
      return "기간을 선택해 주세요";
    }

    const from = dateRange?.from || initialDate?.from;
    const to = dateRange?.to || initialDate?.to;

    const dateFormat = "yyyy년 M월 d일";
    const fromString = format(from || new Date(), dateFormat, { locale: ko });
    const toString = format(to || new Date(), dateFormat, { locale: ko });
    return `${fromString} ~ ${toString}`;
  })(dateRange, initialDate);

  const toggleDatePicker = () => {
    setDatePickerOpen(!datePickerOpen);
  };

  const SelectRangeEventHandler: SelectRangeEventHandler = (range) => {
    if (range?.from && range?.to) {
      setDateRange(range);
    }
  };

  const formatter: DateFormatter = (date: Date, options) => {
    return <>{format(date, "yyyy년 MM월", { locale: options?.locale })}</>;
  };

  const renderDatePicker = useCallback(() => {
    return (
      <>
        {datePickerOpen && (
          <DayPicker
            locale={ko}
            mode="range"
            selected={dateRange}
            onSelect={SelectRangeEventHandler}
            modifiersStyles={{
              selected: {
                position: "relative"
              }
            }}
            formatters={{ formatCaption: formatter }}
          />
        )}
      </>
    );
  }, [datePickerOpen, dateRange]);
  return {
    dateRange,
    dateRangeToString,
    SelectRangeEventHandler,
    datePickerOpen,
    toggleDatePicker,
    formatter,
    renderDatePicker
  };
};
