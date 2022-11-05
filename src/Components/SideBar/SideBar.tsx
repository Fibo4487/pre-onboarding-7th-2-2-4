import React from "react";
import styled from "styled-components";
import SideBarLogo from "@/assets/SideBarLogo.svg";
import SideBarAdDashBoard from "@/assets/SideBarAdDashBoard.svg";
import SideBarAdManage from "@/assets/SideBarAdManage.svg";
import SideBarLeverGuide from "@/assets/SideBarLeverGuide.svg";
import SideBarDropdown from "./SideBarDropdown";

const SideBar = () => {
  return (
    <Container>
      <ImgContainer>
        <LogoImg src={SideBarLogo} alt="sidebar-logo" />
      </ImgContainer>
      <ServiceContainer>
        <MenuTitle>서비스</MenuTitle>
        <SideBarDropdown />
      </ServiceContainer>
      <AdServiceContainer>
        <MenuTitle>광고 센터</MenuTitle>
        <MenuItem isSelected={true}>
          <img src={SideBarAdDashBoard} alt="dashboard" />
          대시보드
        </MenuItem>
        <MenuItem>
          <img src={SideBarAdManage} alt="manageAd" />
          광고관리
        </MenuItem>
      </AdServiceContainer>
      <LeverGuideContainer>
        <img src={SideBarLeverGuide} alt="dropdown-icon" />
        <div>
          <span>레버 이용 가이드</span>
          <p>시작하기 전에 알아보기</p>
        </div>
      </LeverGuideContainer>
      <LeverTermContainer>
        <span>레버는 함께 만들어갑니다.</span>
        <span className="term">이용약관</span>
      </LeverTermContainer>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 100vh;
  padding: 0 40px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  align-items: center;
  justify-content: flex-start;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 150px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_50};
`;

const LogoImg = styled.img`
  width: 124px;
  height: 30px;
`;

const MenuTitle = styled.span`
  height: 40px;
  font-size: 12px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.gray_300};
  padding-left: 20px;
  text-align: left;
  display: flex;
  align-items: center;
`;

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 100%;
  margin-top: 40px;
  }
`;

const AdServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
  width: 100%;
  margin-top: 40px;
`;

interface MenuItemProps {
  isSelected?: boolean;
}

const MenuItem = styled.div<MenuItemProps>`
  height: 60px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary_blue : theme.colors.gray_800};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.gray_50 : theme.colors.bg_white};
  cursor: pointer;
  border-radius: 10px;

  img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;

const LeverGuideContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 100px;
  width: 100%;
  margin-top: 260px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.secondary_blue};

  img {
    width: 40px;
    height: 40px;
    margin-left: 20px; 
    margin-right: 8px;
  }

  span 
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray_800};
  }

  p {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray_300};
    margin-top: 7px;
  }
`;

const LeverTermContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
  margin-left: 20px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray_300};

  .term {
    text-decoration: underline;
    margin-top: 10px;
  }
`;
