import React from "react";
import styled from "styled-components";
import SideBarLogo from "@/assets/SideBarLogo.svg";

const SideBar = () => {
  return (
    <Container>
      <ImgContainer>
        <LogoImg src={SideBarLogo} alt="sidebar-logo" />
      </ImgContainer>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 100vh;
  padding: 60px 40px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  align-items: center;
  justify-content: flex-start;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const LogoImg = styled.img`
  width: 124px;
  height: 30px;
`;
