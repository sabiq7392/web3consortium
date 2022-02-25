import Link from 'next/link';
import { useState } from 'react';
import { Navbar, NavDropdown, Container, Nav, Button } from 'react-bootstrap';
import { AnchorBorderedWhite, Flex } from '../../styles/globalsStyled';
import MediaScreen from '../utils/MediaScreen';
import styled from 'styled-components';

const CustomNavbarNav = styled.ul`
  @media (max-width: 991px) {
    padding: 2rem 0 !important;
  }
`;

const CustomNavLink = styled.a`
  @media (max-width: 991px) {
    padding: 1rem 1rem !important;
    width: 100%;
    :hover {
      background: #333;
      filter: brightness(120%);
    }
  }
`;

export default function Header() {
  const appbar = [
    { name: 'Home', href: '/', isActive: true, },
    { name: 'About', href: '/about', isActive: false, },
    { name: 'Projects', href: '/projects', isActive: false },
    { name: 'Learn Web3', href: '/learn-web-3',  isActive: false },
    { name: 'Join', href: '/why-should-i-join',  isActive: false },
  ];

  const [ active, setActive ] = useState(false);

  return (
    <Navbar variant="dark" expand="lg"  className="bg-black">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="/" className="text-white">Web3 <br /> Consortium</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav as={CustomNavbarNav} className="ms-auto d-flex justify-content-start align-items-lg-center align-items">
            {appbar.map((_menu, _menuIndex) => 
              <Link href={_menu.href} key={_menuIndex} passHref>
                <Nav.Link as={CustomNavLink} className={` ${_menu.isActive ? 'active' : ''}`} >
                  {_menu.name === 'Join' ? <Button variant="dark" className="border rounded-0 px-5 py-2">{_menu.name}</Button> : _menu.name}
                </Nav.Link>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}