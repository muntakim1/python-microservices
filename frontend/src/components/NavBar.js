import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Nav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
const NavItem = styled.li`
  float: right;
  border-right: 1px solid #bbb;

  a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  :last-child {
    border-right: none;
    margin-top: 10px;
    margin-right: 35px;
  }
  :first-child {
    float: left;
    border-right: none;
  }
`;
const NavBar = () => {
  return (
    <Nav>
      <NavItem>
        <a class="active" href="#home">
          <img src={Logo} alt="" />
        </a>
      </NavItem>
      <NavItem>
        <IconButton>
          <ShoppingCartIcon style={{ fontSize: 35 }}></ShoppingCartIcon>
        </IconButton>
      </NavItem>
    </Nav>
  );
};

export default NavBar;
