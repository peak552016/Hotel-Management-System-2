import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// style the components
const Container = styled.div`
  height: 70px;
  background-color: hsl(0, 0%, 93%);
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const Center = styled.div`
  text-align: center;
  padding-top: 5px;
  display: flex;
`;

const SecondHalfLogo = styled.h1`
  font-weight: bold;
  color: hsl(199, 100%, 33%);
`;

const FirstHalfLogo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: bold;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  #basic-nav-dropdown {
    color: black;

    &:hover {
      color: hsl(199, 100%, 33%);
      text-decoration: underline;
    }
  }
`;

const LinkItem = styled.h6`
  color: black;
  text-decoration: none;

  &:hover {
    color: hsl(199, 100%, 33%);
    text-decoration: underline;
  }
`;

const LinkCat = styled.div`
  color: black;
  text-decoration: none;
`;

const NavbarComponent = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuItem>
            <Link to="/">
              <LinkItem>HOME</LinkItem>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/">
              <LinkItem>ROOMS</LinkItem>
            </Link>
          </MenuItem>
        </Left>
        <Center>
          <FirstHalfLogo>VENE</FirstHalfLogo>
          <SecondHalfLogo>SSA</SecondHalfLogo>
        </Center>
        <Right>
          <MenuItem>
            <NavDropdown
              id="basic-nav-dropdown"
              title={<FontAwesomeIcon icon={faUser} className="icon" />}
            >
              <NavDropdown.Item as="li">
                <Link to="#">
                  <LinkCat>Login</LinkCat>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li">
                <Link>
                  <LinkCat>Register</LinkCat>
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item as="li">
                <Link>
                  <LinkCat>Profile</LinkCat>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li">
                <LinkCat>Logout</LinkCat>
              </NavDropdown.Item>
            </NavDropdown>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavbarComponent;
