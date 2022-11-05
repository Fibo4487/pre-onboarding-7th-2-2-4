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
  height: 100%;
  padding: 20 40px;
`;

const UserName = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-right: 20px;
  display: flex;
  align-items: center;
`;
