import styled from 'styled-components';
import { Row, Container, Col } from 'react-bootstrap';
import { Typhography, Grid, Flex } from '../styles/MameStyled/Mame.styled';
import Image from 'next/image';
import { useEffect } from 'react';
import { EnglishTranslate, IndonesiaTranslate } from '../src/utils/Language';

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
      title: <>
        <EnglishTranslate>Polkadot: Web3 Foundation${"`"}s flagship protocols</EnglishTranslate>
        <IndonesiaTranslate>Polkadot: Protokol unggulan Web3 Foundations</IndonesiaTranslate>
      </>,
      image: '/images/items/item_slider_1.png',
      description: <>
        <EnglishTranslate>Polkadot is a scalable sharded chain and the first protocol that provides a secure environtment for cross-chain composability</EnglishTranslate>
        <IndonesiaTranslate>Polkadot adalah sharded chain yang dapat diskalakan dan protokol pertama yang menyediakan lingkungan yang aman untuk komposisi lintas-rantai</IndonesiaTranslate>
      </>,
      background: '#EEEEEE',
    },
    {
      title: <>
        <EnglishTranslate>Kusama: Canary Network</EnglishTranslate>
        <IndonesiaTranslate>Kusama: Jaringan Canary</IndonesiaTranslate>
      </>,
      image: '/images/items/item_slider_2.png',
      description: <>
        <EnglishTranslate>Kusama is a scalable development network built on nearly the same codebase as Polkadot. It${"`"}s designed for teams who want to move fast and innovate</EnglishTranslate>
        <IndonesiaTranslate>Kusama adalah jaringan pengembangan terukur yang dibangun di atas basis kode yang hampir sama dengan Polkadot. Ini dirancang untuk tim yang ingin bergerak cepat dan berinovasi</IndonesiaTranslate>
      </>,
      background: '#E4E4E4',
    },
    {
      title: <>
        <EnglishTranslate>XCMP: Cross-Chain Message Passing</EnglishTranslate>
        <IndonesiaTranslate>XCMP: Pengiriman Pesan Lintas Rantai</IndonesiaTranslate>
      </>,
      image: '/images/items/item_slider_3.png',
      description: <>
        <EnglishTranslate>A subset of Polkadot, XCMP is a decentralized messaging protocol that emphasizes privacy and security</EnglishTranslate>
        <IndonesiaTranslate>Bagian dari Polkadot, XCMP adalah protokol perpesanan terdesentralisasi yang menekankan privasi dan keamanan</IndonesiaTranslate>
      </>,
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
          <Typhography as="h1" bold large>
            <EnglishTranslate>Projects</EnglishTranslate>
            <IndonesiaTranslate>Projek</IndonesiaTranslate>
          </Typhography>
          <Typhography medium color="#eee">
            <EnglishTranslate>We support Web 3.0 teams and open-source projects through funding, advocacy, research and collaborations.</EnglishTranslate>
            <IndonesiaTranslate>Kami mendukung tim Web 3.0 dan proyek sumber terbuka melalui pendanaan, advokasi, penelitian, dan kolaborasi.</IndonesiaTranslate>
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
      </section>
    </article>
  );
}