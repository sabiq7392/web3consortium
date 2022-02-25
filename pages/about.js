import styled from 'styled-components';
import { Col, Row, Container } from 'react-bootstrap';
import { Typhography, Grid, Flex } from '../styles/globalsStyled';
import Image from 'next/image';
import { useEffect } from 'react';

const screen = {
  lg: 'min-width: 992px',
};

const AboutHeroContainer = styled.section`
  display: grid;
  place-items: center;
  background: url('/images/bg/bg_team.png');
  background-size: 100% 100%;
  padding-top: 60px;
  @media (${screen.lg}) {
    height: 100vh!important;
  }
`;

export default function About() {
  const councilData = [
    {
      name: 'Dr. Isabel',
      image: '/images/people/person_dr_isabel.jpg',
      title: 'Founder',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex `,
    },
    {
      name: 'Andrew',
      image: '/images/people/person_andrew.jpg',
      title: 'Advisor',
      description: <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex bore et dolore magna aliqua. <br /> <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
      </span>
    },
    {
      name: 'Reto Tinker',
      image: '/images/people/person_reto_tinker.jpg',
      title: 'Advisor',
      description: <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex <br /> <br /> bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      </span>,
    },
  ];

  useEffect(() => {
    const footerWebsite = document.querySelector('#footerWebsite');
    footerWebsite.classList.remove('bg-black');
    footerWebsite.classList.add('bg-white');
  });
  
  return (
    <article>
      <AboutHeroContainer>
        <Row as={Container} className="m-0 p-0">
          <Col lg={6} as={Grid} center>
            <Grid gap={30} style={{ background: 'rgba(0,0,0,0.5)', padding: 30 }}>
              <Typhography as="h1" large bold>About</Typhography>
              <Typhography small color="#ccc">
                our mission is to nurture cutting-edge applications for decentralized web software protocols.
              </Typhography>
              <Typhography small color="#ccc">
              our passion is delivering Web 3.0, a decentralized and fair internet where users control their own data, identity and destiny.              </Typhography>
            </Grid>
          </Col>
          <Col lg={6} as={Grid} center ariaLabel="image of free data movement">
            <Image src="/images/items/item_about_3d.svg" alt="Free Data Movement" width={500} height={500} />
          </Col>
        </Row>
      </AboutHeroContainer>

      <section className="bg-black">
        <Container style={{ padding: '120px 0' }}>
          <Grid gap={30} style={{ border: '4px solid #555', padding: 60 }}>
            <Typhography as="h2" semibold large><span style={{ color: '#1E92BA' }}>Web3 Consortium</span> believes in an internet where:</Typhography>
            <Grid as="ul" gap={15}>
              <Typhography as="li" color="#ccc" medium>Users own their own data, not corporations</Typhography>
              <Typhography as="li" color="#ccc" medium>Global digital transactions are secure</Typhography>
              <Typhography as="li" color="#ccc" medium>Online exchanges of information and value are decentralized</Typhography>
            </Grid>
          </Grid>
        </Container>
      </section>

      <article className="bg-white">
        <Container as={Grid} gap={60} style={{ padding: '120px 0' }}>
          <header>
            <Typhography as="small" large color="#737373">Web3 Consortium</Typhography>
            <Typhography as="h2" large bold color="#333">Council</Typhography>
          </header>
          <Row className="g-5">
            {councilData.map((_council, _councilIndex) =>
              <Col key={_councilIndex} lg={4} as="section">
                <Grid gap={30}>
                  <Grid as="header" gap={30}>
                    <Grid justifyContent="start" className="m-0">
                      <Image className="rounded-circle" src={_council.image} alt={_council.name} objectFit="cover" quality={100} width={300} height={300} />  
                    </Grid>
                    <Grid gap={15}>
                      <Typhography as="h3" small bold color="#333">{_council.name}</Typhography>               
                      <Typhography as="small" small color="#aaa">{_council.title}</Typhography>               
                    </Grid>   
                  </Grid>
                  <Typhography color="#504E4E" lineHeight="175%">{_council.description}</Typhography>
                </Grid>
              </Col>
            )}
          </Row>
        </Container>
      </article>
    </article>
  );
}