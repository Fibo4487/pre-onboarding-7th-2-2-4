import React from "react";
import SideBarDropdownIcon from "@/assets/SideBarDropdownIcon.svg";
import styled from "styled-components";

const SideBarDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const handleClickDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // handleClickItem 시 event.propagation을 막아야함.

  return (
    <>
      <Container onClick={handleClickDropdown}>
        <div className="dropdown-item">매드업</div>
        <div className="dropdown-icon">
          <img src={SideBarDropdownIcon} alt="dropdown-icon" />
        </div>
        <DropdownMenu isShow={isDropdownOpen}>
          <li className="dropdown-menu-item">매드업</li>
          <li className="dropdown-menu-item add">+ 서비스 추가하기</li>
        </DropdownMenu>
      </Container>
    </>
  );
};

export default SideBarDropdown;

const Container = styled.div`
  width: 100%;
  height: 60px;
  border: 1px solid ${({ theme }) => theme.colors.gray_100};
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  .dropdown-item {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray_800};
    padding-left: 20px;
  }

  .dropdown-icon {
    width: 24px;
    height: 24px;
    margin-right: 20px;
  }
`;

interface DropdownMenuProps {
  isShow: boolean;
}

const DropdownMenu = styled.ul<DropdownMenuProps>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  perspective: 1000px;
  border-radius:10px;
  border: 1px solid ${({ theme, isShow }) =>
    isShow ? theme.colors.gray_100 : "transparent"};
  z-index: 1;
  display: ${({ isShow }) => (isShow ? "block" : "none")};
  background-color: ${({ theme }) => theme.colors.bg_white};

  li + li {
    border-top: 1px solid ${({ theme }) => theme.colors.gray_100};
  }

  .dropdown-menu-item {
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    
    color: ${({ theme }) => theme.colors.gray_800};
    background-color: #34495e
    padding: 10px 20px
    font-size: 16px
    font-weight: 600
  }

  .add {
    color: ${({ theme }) => theme.colors.primary_blue};
  }
`;
