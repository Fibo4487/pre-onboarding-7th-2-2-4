import React from "react";
import styled from "styled-components";
import dropdownIcon from "@/assets/DropdownIcon.svg";

interface ContentDropdownProps {
  initValue: string;
  items: string[];
  onChange: (value: string) => void;
  isShow: boolean;
  setIsShow: React.MouseEventHandler<HTMLDivElement>;
  hasBorder?: boolean;
  color?: string;
}

const ContentDropdown = ({
  initValue,
  items,
  onChange,
  isShow,
  setIsShow,
  hasBorder,
  color
}: ContentDropdownProps) => {
  const [selectedItem, setSelectedItem] = React.useState<string>(initValue);
  const handleClickItem = (item: string) => {
    setSelectedItem(item);
    onChange(item);
  };
  return (
    <Container onClick={setIsShow} hasBorder={hasBorder}>
      <DropdownValue>
        {color ? <DropdownValueColor color={color} /> : null}
        {selectedItem}
      </DropdownValue>
      <DropdownIcon>
        <img src={dropdownIcon} alt="dropdown-icon" />
      </DropdownIcon>
      <DropdownMenu isShow={isShow}>
        {items.map((item, index) => (
          <DropdownMenuItem
            key={index + 1}
            onClick={() => handleClickItem(item)}
          >
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenu>
    </Container>
  );
};

export default ContentDropdown;

const Container = styled.div<{ hasBorder?: boolean }>`
  width: 130px;
  height: 40px;
  padding-left: 20px;
  border: 1px solid
    ${({ theme, hasBorder }) =>
      hasBorder ? theme.colors.gray_100 : "transparent"};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
`;

const DropdownValueColor = styled.div<{ color?: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: 20px;
  background-color: ${({ color }) => color};
`;

const DropdownValue = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray_800};
  display: flex;
  align-items: center;
`;

const DropdownIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 10px;
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
    height: inherit;
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

const DropdownMenuItem = styled.li`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.gray_800};
  background-color: #34495e
  padding: 10px 20px
  font-size: 16px
  font-weight: 600
`;
