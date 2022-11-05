import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout = ({}: MainLayoutProps) => {
  return (
    <MainLayoutContainer>
      <SideBar />
      <MainLayoutContent>
        <Header />
        <Outlet />
      </MainLayoutContent>
    </MainLayoutContainer>
  );
};

export default MainLayout;

const MainLayoutContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.bg_gray};
`;

const MainLayoutContent = styled.div`
  width: calc(100vw - 320px);
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
