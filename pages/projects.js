import styled from 'styled-components';
import { Row, Container, Col, Carousel } from 'react-bootstrap';
import { Typhography, Grid, Flex } from '../styles/globalsStyled';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

const screen = {
  lg: 'min-width: 992px',
};

const ProjectsHeroContainer = styled.section`
  display: grid;
  place-items: center;
  background: url('/images/bg/bg_projects.jpg');
  background-size: 100% 100%;
  @media (${screen.lg}) {
    height: 560px!important;
  }
`;

export default function Projects() {
  const projectsData = [
    {
      title: `Polkadot: Web3 Foundation${"`"}s flagship protocols`,
      image: '/images/items/item_slider_1.png',
      description: 'Polkadot is a scalable sharded chain and the first protocol that provides a secure environtment for cross-chain composability',
      background: '#EEEEEE',
    },
    {
      title: 'Kusama: Canary Network',
      image: '/images/items/item_slider_2.png',
      description: `Kusama is a scalable development network built on nearly the same codebase as Polkadot. It${"`"}s designed for teams who want to move fast and innovate`,
      background: '#E4E4E4',
    },
    {
      title: 'XCMP: Cross-Chain Message Passing',
      image: '/images/items/item_slider_3.png',
      description: 'A subset of Polkadot, XCMP is a decentralized messaging protocol that emphasizes privacy and security',
      background: '#DADADA',
    },
  ];

  useEffect(() => {
    const footerWebsite = document.querySelector('#footerWebsite');
    footerWebsite.classList.remove('bg-black');
    footerWebsite.classList.add('bg-white');
  });

  return (
    <article>
      <ProjectsHeroContainer>
        <Container as={Grid} gap={30}>
          <Typhography as="h1" bold large>Projects</Typhography>
          <Typhography medium color="#eee">
            We support Web 3.0 teams and open-source projects 
            through funding, advocacy, research and collaborations.
          </Typhography>
        </Container>
      </ProjectsHeroContainer>
      
      <section style={{ padding: 120 }}>
        <Row className="g-0 g-md-3">
          {projectsData.map((_project, _projectIndex) => 
            <Col lg={4} key={_projectIndex} className="position-relative border p-0" style={{ background: _project.background }}>
              <figure className="m-0  position-relative" style={{ width: '100%', height: 300, filter: 'grayscale(100%)' }}>
                <Image src={_project.image} alt={_project.title} layout="fill" objectFit="cover" />
              </figure>
              <Grid gap={15} style={{ padding: 30 }}>
                <Typhography as="h2" bold xSmall color="#333">{_project.title}</Typhography>
                <Typhography color="#444">{_project.description}</Typhography>
              </Grid>
              {/* <Link href="#" passHref><a>Read More</a></Link> */}
            </Col>
          )}
        </Row>
{/*         
        <Carousel as={Container} controls={false}>
          {slidersData.map((_slider) => 
            <Carousel.Item key={_slider.slider}>
              <Row className="g-0">
                {_slider.data.map((_data, _dataIndex) => 
                  <Col lg={4} key={_dataIndex} className="position-relative border p-0" style={{ background: _data.background }}>
                    <figure className="m-0  position-relative" style={{ width: '100%', height: 236 }}>
                      <Image src={_data.image} alt={_data.title} layout="fill" />
                    </figure>
                    <Grid gap={15} style={{ padding: 30 }}>
                      <Typhography as="h2" bold xSmall color="#333">{_data.title}</Typhography>
                      <Typhography color="#444">{_data.description}</Typhography>
                    </Grid>
                  </Col>
                )}
              </Row>
            </Carousel.Item>
          )}
        </Carousel> */}
      </section>
    </article>
  );
}