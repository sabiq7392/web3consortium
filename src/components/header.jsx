import Link from 'next/link';
import { Navbar, Container, Nav, Button, ButtonGroup } from 'react-bootstrap';
import styled from 'styled-components';
import Flags from 'country-flag-icons/react/3x2'
import { useEffect, useState } from 'react';

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
  const [language, setLanguage] = useState(null);

  const appbar = [
    { name: 'Home', href: '/', isActive: true, },
    { name: 'About', href: '/about', isActive: false, },
    { name: 'Projects', href: '/projects', isActive: false },
    { name: 'Learn Web3', href: '/learn-web-3',  isActive: false },
    { name: 'Join', href: '/why-should-i-join',  isActive: false },
  ];

  return (
    <Navbar variant="dark" expand="lg"  className="bg-black">
      <Container className="d-flex">
        <Navbar.Brand href="/" className="text-white">Web3 <br /> Consortium</Navbar.Brand>
        <div className="order-lg-last">
          <ButtonGroup>
            <Button 
              id="toggleIndonesiaLanguage" 
              className={language === 'ID' ? 'active border' : ''} variant="light" style={{ background: 'rgba(0,0,0,0)', border: 0 }}
            >
              <Flags.ID title="Indonesia" style={{ width: 24, height: 24 }} />
            </Button>
            <Button 
              id="toggleEnglishLanguage" 
              className={language !== 'ID' ? 'active border' : ''} variant="light" style={{ background: 'rgba(0,0,0,0)', border: 0 }}
            >
              <Flags.US title="United States" style={{ width: 24, height: 24 }} />
            </Button>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </ButtonGroup>
        </div>
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

// export async function getStaticProps() {
//   const response = await fetch('http://ip-api.com/json/')
//   const dataUsers = await response.json();
//   // const countryCode = responseJson.location.country;
//   return {
//     props: { dataUsers }
//   }
// }