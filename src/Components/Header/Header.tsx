import React from "react";
import styled from "styled-components";
import HeaderIcons from "@/assets/HeaderIcons.svg";

const userName = "원티드";

const Header = () => {
  return (
    <Container>
      <UserName>
        <p>{userName}님</p>
      </UserName>
      <img src={HeaderIcons} alt="header-icons" />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 80px;
  align-items: center;
  margin: 0 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_50};
`;

const UserName = styled.div`
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
`;
