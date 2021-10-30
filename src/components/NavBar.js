import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/JTSpice.svg";
import { BiMenuAltRight } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import { NavData } from "../data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [backgroundChange, setBackgroundChange] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const changeNavbarBackground = () => {
    if (window.scrollY >= 80) {
      setBackgroundChange(true);
    } else {
      setBackgroundChange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarBackground);

  return (
    <Nav className={backgroundChange ? "menu_fixed" : "navbar"}>
      <div className="nav-container">
        <div className="navbar-logo">
          <a href="/main" className="navbar-brand">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="navbar-menu">
          <span onClick={toggle} className="nav-toggler-icon">
            {isOpen ? (
              <FiX style={{ textAlign: "right" }} />
            ) : (
              <BiMenuAltRight />
            )}
          </span>
          <ul className={isOpen ? "navbar-list active" : "navbar-list"}>
            {NavData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <a href={item.path} className={item.active}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999;
  height: 80px;

  .menu_fixed {
    position: fixed;
    width: 100%;
    z-index: 999 !important;
    background: #8d00ff;
    top: 0;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    padding-right: 25px;
    padding-left: 25px;
    margin-right: auto;
    margin-left: auto;
  }

  .navbar-brand {
    color: #fff;
    font-weight: bold;
  }

  .nav-toggler-icon {
    display: none;
  }

  .navbar-list {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 1rem;
  }

  .navbar-list-items .nav-link {
    font-family: "Rubik";
    text-decoration: none;
    color: #fff;
    align-items: center;
    padding: 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 16px;
    line-height: 13px;
    text-transform: capitalize;
    font-weight: 700;
    border-top: 2px solid transparent;
  }

  .navbar-list-items .nav-link.active {
    color: #ffca47;
  }

  .navbar .navbar-list-items .nav-link:active {
    color: #cf0416;
  }

  .navbar .navbar-list-items .nav-link:hover {
    color: #cf0416;
  }

  @media screen and (max-width: 768px) {
    .navbar {
      padding: 1rem;
    }

    .nav-toggler-icon {
      display: block;
      color: #fff;
      font-size: 32px;
    }

    .navbar-list {
      display: none;
    }

    .navbar-list.active {
      display: block;
      position: absolute;
      width: 100vw;
      left: 0;
      text-align: center;
      padding: 3rem 0.8rem;
      background: #0a0a0a;
      z-index: 99;
      margin-top: 1rem;
      margin-bottom: 5rem;
    }

    .navbar-list.active .nav-link {
      color: #fff;
    }

    .navbar-list-items {
      padding: 1.5rem;
    }
  }
`;
