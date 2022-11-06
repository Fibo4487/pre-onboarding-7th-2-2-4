import ContentTitle from "@/Components/ContentTitle/ContentTitle";
import DashBoard from "@/Components/DashBoard/DashBoard";
import { DashBoardContextProvider } from "@/lib/states/DashBoardContext";
import React from "react";

const Main = () => {
  return (
    <>
      <DashBoardContextProvider>
        <ContentTitle title="대시보드" isDashBoard={true} />
        <DashBoard />
      </DashBoardContextProvider>
    </>
  );
};

export default Main;
