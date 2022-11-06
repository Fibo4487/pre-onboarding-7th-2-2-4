import ContentTitle from "@/Components/ContentTitle/ContentTitle";
import DashBoard from "@/Components/DashBoard/DashBoard";
import React from "react";

const Main = () => {
  return (
    <>
      <ContentTitle title="대시보드" isDashBoard={true} />
      <DashBoard />
    </>
  );
};

export default Main;
