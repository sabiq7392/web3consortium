import Link from 'next/link';
import { CgArrowLongRight } from 'react-icons/cg';
import styled from 'styled-components';
import { Row, Col, Container, Button }  from 'react-bootstrap';
import { Typhography, Grid, Div } from '../styles/MameStyled/Mame.styled';
import Image from 'next/image';
import { EnglishTranslate, IndonesiaTranslate } from '../src/utils/Language';
import { ethers } from 'ethers';
import { useEffect } from 'react';

const screen = {
  lg: 'min-width: 992px',
}

const Hero = styled.section`
  display: grid;
  place-items: center;
  background: url('/images/bg/bg_hero.png');
  background-size: 100% 100%;
  @media (${screen.lg}) {
    height: 100vh!important;
  }
`;

const AnchorWithIcons = styled.a`
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  color: white;
  svg {
    transition: 200ms;
  }
  :hover {
    svg {
      transform: translateX(20px);
    }
  }
`;

const OpenData = styled.article`
  display: grid;
  background-color: black;
  gap: 60px;
  padding: 114px 0;
`;


export default function Home() {
  const openData = [
    { 
      title: <>
        <EnglishTranslate>Available</EnglishTranslate>
        <IndonesiaTranslate>Tersedia</IndonesiaTranslate>
      </>,
      description: <>
        <EnglishTranslate>the data should be in whole, downloadable from the Internet, with no costs apart from reproduction fees</EnglishTranslate>
        <IndonesiaTranslate>data harus utuh, dapat diunduh dari Internet, tanpa biaya selain biaya reproduksi</IndonesiaTranslate>
      </>, 
      background: '#111', col: 6 },
    { title: <>
        <EnglishTranslate>Accessible</EnglishTranslate>
        <IndonesiaTranslate>Dapat diakses</IndonesiaTranslate>
      </>, 
      description: <>
        <EnglishTranslate>the data should be provided in a convenient form that can be modified</EnglishTranslate>
        <IndonesiaTranslate>data harus disediakan dalam bentuk yang nyaman yang dapat dimodifikasi</IndonesiaTranslate>
      </>, 
      background: '#151515', col: 6 },
    { title: <>
        <EnglishTranslate>Reusable</EnglishTranslate>
        <IndonesiaTranslate>dapat digunakan kembali</IndonesiaTranslate>
      </>, 
      description: <>
        <EnglishTranslate>this should be expressed under terms provided with the data</EnglishTranslate>
        <IndonesiaTranslate>ini harus dinyatakan dalam istilah yang disediakan dengan data</IndonesiaTranslate>
      </>, 
      background: '#222', col: 6 },
    { title: <>
        <EnglishTranslate>Redistributable</EnglishTranslate>
        <IndonesiaTranslate>Dapat didistribusikan kembali</IndonesiaTranslate>
      </>, 
      description: <>
        <EnglishTranslate>the data can be combined with data from other research</EnglishTranslate>
        <IndonesiaTranslate>data tersebut dapat digabungkan dengan data dari penelitian lain</IndonesiaTranslate>
      </>, 
      background: '#252525', col: 6 },
    { title: <>
        <EnglishTranslate>Unrestricted</EnglishTranslate>
        <IndonesiaTranslate>Tidak dibatasi</IndonesiaTranslate>
      </>, 
      description: <>
        <EnglishTranslate>everyone can use, modify, and share the data, regardless of how they use the data (e.g. for commercial, non-commercial, or educational purposes)</EnglishTranslate>
        <IndonesiaTranslate>setiap orang dapat menggunakan, memodifikasi, dan membagikan data, terlepas dari bagaimana mereka menggunakan data tersebut (misalnya untuk tujuan komersial, non-komersial, atau pendidikan)</IndonesiaTranslate>
      </>, 
      background: '#333', col: 12 }
  ];

  useEffect(() => {
    const connect = () => {
      console.log('provider hai');
    };

    connect();
  }, []);

  return (
    <article>
      <Button>Test Eth</Button>
      <Hero>
        <Row as={Container} className="m-0 p-0">
          <Col lg={6} as={Grid} center>
            <Grid gap={30} style={{ background: 'rgba(0,0,0,0.5)', padding: 30 }}>
              <Typhography as="h1" large bold>Free Data Movement</Typhography>
              <Typhography small color="#ccc">
                <EnglishTranslate>
                  Access to more data can change individuals and societies for better. 
                  We live in a world where corporations make a profit of a product where the raw input has largely been paid by the tax payers.
                </EnglishTranslate>
                <IndonesiaTranslate>
                  Akses ke lebih banyak data dapat mengubah individu dan masyarakat menjadi lebih baik. Kita hidup di dunia di mana
                  perusahaan mendapat untung dari suatu produk di mana input mentah sebagian besar dibayar oleh pembayar pajak
                </IndonesiaTranslate>
              </Typhography>
              <Typhography>
                <span style={{ fontSize: 72, fontWeight: 'bold' }}>2000+</span> <br /> 
                <EnglishTranslate >Has signed the pledge</EnglishTranslate>
                <IndonesiaTranslate>Telah menandatangani ikrar</IndonesiaTranslate>
              </Typhography>
            </Grid>
          </Col>
          <Col lg={6} as={Grid} center ariaLabel="image of free data movement">
            <Image src="/images/items/item_earth_3d.svg" alt="Free Data Movement" width={500} height={500} />
          </Col>
        </Row>
      </Hero>

      <OpenData>
        <Container>
          <Typhography as="h2" large bold>
            <EnglishTranslate>What is Open Data ?</EnglishTranslate>
            <IndonesiaTranslate>Apa itu Open Data ?</IndonesiaTranslate>
          </Typhography>
        </Container>
        <Container>
          <Row className="g-0">
            {openData.map((_openData, _openDataIndex) => 
              <Col lg={_openData.col} style={{ background: _openData.background }} key={_openDataIndex}>
                <Grid as="section" >
                  <Grid as={Container} gap={15} style={{ padding: 30 }}>
                    <Typhography as="h3" medium semibold>{_openData.title}</Typhography>
                    <Typhography small lineHeight="175%" color="#ccc">{_openData.description}</Typhography>
                  </Grid>
                </Grid>
              </Col>
            )}
          </Row>
        </Container>
      </OpenData>

      <Div className="bg-black text-center" css={{ padding: '114px 0' }}>
        <Link href="/learn-web-3" passHref>
          <AnchorWithIcons>
            <EnglishTranslate>Learn More About Web 3 </EnglishTranslate>
            <IndonesiaTranslate>Pelajari Lebih Lanjut Tentang Web 3</IndonesiaTranslate>
            <CgArrowLongRight />
          </AnchorWithIcons>
        </Link>
      </Div>
      <Div className="bg-black text-center" css={{ padding: '114px 0' }}>
        <Link href="/why-should-i-join" passHref>
          <AnchorWithIcons>
            <EnglishTranslate>Interested in joining the team researching, supporting and launching these projects?</EnglishTranslate>
            <IndonesiaTranslate>Tertarik untuk bergabung dengan tim yang meneliti, mendukung, dan meluncurkan proyek-proyek ini?</IndonesiaTranslate>
            <CgArrowLongRight />
          </AnchorWithIcons>
        </Link>
      </Div>
    </article>
  )
}
