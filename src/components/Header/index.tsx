import React from "react";

import { Avatar } from "../Avatar";
import { Container } from "../Container";
import { Menu } from "../Menu";
import { Row } from "../Layout";
import { Input } from "../Input";
import { Logo } from "../Logo";

import avatar from "../../assets/member/2.png";
import lypaIcon from "../../assets/icons/lypa.svg";

import {
  HeaderWrapp,
  HeaderUser,
  HeaderUserAvatar,
  HeaderUserFullname,
  HeaderMenu,
  HeaderInput,
  HeaderLogo,
} from "./styled";
import { useInput } from "../../hooks/useInput";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Header: React.FC = () => {
  const { value, handleChange } = useInput();
  const { authUser } = useSelector((state: RootState) => state.auth);

  return (
    <HeaderWrapp>
      <Container>
        <Row gorizontalSpace="between">
          <HeaderLogo>
            <Logo />
          </HeaderLogo>
          <HeaderInput>
            <Input
              value={value}
              onChange={handleChange}
              placeholder="Search everything"
              icon={lypaIcon}
            />
          </HeaderInput>
          <HeaderMenu>
            <Menu />
          </HeaderMenu>
          <HeaderUser>
            <HeaderUserAvatar>
              <Avatar
                url={authUser.avatar}
                alt={`${authUser.fullname} avatar`}
                size={38}
              />
            </HeaderUserAvatar>
            <HeaderUserFullname>{authUser.fullname}</HeaderUserFullname>
          </HeaderUser>
        </Row>
      </Container>
    </HeaderWrapp>
  );
};

export default Header;
