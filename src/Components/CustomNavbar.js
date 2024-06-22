import { NavLink as reactLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { getCurrentUserDetails, isLoggedin, doLogout } from '../auth';
import { useNavigate } from 'react-router-dom';
const CustomNavbar = (args) => {

  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setLogin(isLoggedin());
    setUser(getCurrentUserDetails());
  }, [login]);

  const handleLogout = () => {
    doLogout(() => {
      setLogin(false);
      navigate("/")
      setUser(undefined);
    });
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" className='px-5'>
        <NavbarBrand tag={reactLink} to="/">MyBlogs</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={reactLink} to="/">New Feed</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={reactLink} to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={reactLink} to="/services">Services</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={reactLink} to="/services">Services</DropdownItem>
                <DropdownItem>Contact</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Youtube</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav navbar>
            {login ? (
              <>
                <NavItem>
                  <NavLink tag={reactLink} to="/user/profile-info">ProfileInfo</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={reactLink} to="/user/dashboard">{user?.email}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={handleLogout}>Logout</NavLink>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLink tag={reactLink} to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={reactLink} to="/signup">Signup</NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
