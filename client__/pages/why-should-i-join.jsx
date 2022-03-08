import { Flex, Grid, Typhography } from '../styles/MameStyled/Mame.styled';
import Image from 'next/image';
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import { EnglishTranslate, IndonesiaTranslate } from '../src/utils/Language';

export default function WhyShouldIJoin() {
  const whyShouldIJoinData = [
    {
      title: <>
        <EnglishTranslate>Transparency</EnglishTranslate>
        <IndonesiaTranslate>Transparan</IndonesiaTranslate>
      </>,
      description: <>
        <EnglishTranslate>Open Data supports public oversight of governments and helps reduce corruption by enabling greater transparency</EnglishTranslate>
        <IndonesiaTranslate>Open Data mendukung pengawasan publik terhadap pemerintah dan membantu mengurangi korupsi dengan memungkinkan transparansi yang lebih besar</IndonesiaTranslate>
      </>,
      readmore: 'http://opendatatoolkit.worldbank.org/en/starting.html',
      background: '#000000',
    },
    {
      title: <>
        <EnglishTranslate>Public Service Improvement</EnglishTranslate>
        <IndonesiaTranslate>Peningkatan Pelayanan Publik</IndonesiaTranslate>
      </>,
      description: <>
        <EnglishTranslate>Open Data gives citizens the raw materials they need to engage their governments and contribute to the improvement of public services.</EnglishTranslate>
        <IndonesiaTranslate>Open Data memberi warga bahan baku yang mereka butuhkan untuk melibatkan pemerintah mereka dan berkontribusi pada peningkatan layanan publik.</IndonesiaTranslate>
      </>,
      readmore: 'http://opendatatoolkit.worldbank.org/en/starting.html',
      background: '#0F0F0F',
    },
    {
      title: <>
        <EnglishTranslate>Innovation and Economic Value</EnglishTranslate>
        <IndonesiaTranslate>Inovasi dan Nilai Ekonomi</IndonesiaTranslate>
      </>,
      description: <>
        <EnglishTranslate>Public data, and their re-use, are key resources for social innovation and economic growth.</EnglishTranslate>
        <IndonesiaTranslate>Data publik, dan penggunaannya kembali, adalah sumber daya utama untuk inovasi sosial dan pertumbuhan ekonomi.</IndonesiaTranslate>
      </>,
      readmore: 'http://opendatatoolkit.worldbank.org/en/starting.html',
      background: '#1E1E1E',
    },
    {
      title: <>
        <EnglishTranslate>Efficiency</EnglishTranslate>
        <IndonesiaTranslate>Efisien</IndonesiaTranslate>
      </>,
      description: <>
        <EnglishTranslate>Open Data makes it easier and less costly for government ministries to discover and access their own data or data from other ministries.</EnglishTranslate>
        <IndonesiaTranslate>Open Data memudahkan dan lebih murah bagi kementerian pemerintah untuk menemukan dan mengakses data mereka sendiri atau data dari kementerian lain.</IndonesiaTranslate>
      </>,
      readmore: 'http://opendatatoolkit.worldbank.org/en/starting.html',
      background: '#2D2D2D',
    },
  ];

  return (
    <article>
      <div className="bg-black">
        <Container>
          <Typhography as="h1" xLarge bold style={{ padding: '120px 0' }}>
            <EnglishTranslate>Why should I join?</EnglishTranslate>
            <IndonesiaTranslate>Kenapa saya harus bergabung?</IndonesiaTranslate>
          </Typhography>
          <Grid>
            <Row as="section" style={{ padding: '60px 0' }}>
              <Col lg={2} as={Flex} center>
                <Image src="/images/items/item_centralized.png" alt="Centralized" width={200} height={200} />
              </Col>
              <Col lg={10} as={Flex} vCenter gap={30}>
                <BsXCircleFill size={40} color="#EB3B5A" />
                <Typhography as="h2" medium>
                  <EnglishTranslate>Today internet is centralized, limiting opportunity</EnglishTranslate>
                  <IndonesiaTranslate>Hari ini internet terpusat, membatasi peluang</IndonesiaTranslate>
                </Typhography>
              </Col>
            </Row>
            <Row  as="section" style={{ padding: '60px 0' }}>
              <Col lg={2} as={Flex} center>
                <Image src="/images/items/item_decentralized.png" alt="Decentralized" width={200} height={200} />
              </Col>
              <Col lg={10} as={Flex} vCenter gap={30}>
                <BsCheckCircleFill size={45} color="#20BF6B" />
                <Typhography as="h2" medium>
                  <EnglishTranslate>Now we invite the decentralized internet for unlimited, secure and freedom</EnglishTranslate>
                  <IndonesiaTranslate>Sekarang kami mengundang internet terdesentralisasi untuk tidak terbatas, aman, dan bebas</IndonesiaTranslate>
                </Typhography>
              </Col>
            </Row>
          </Grid>
        </Container>
        <Grid center style={{ background: 'url("/images/bg/bg_coding.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: 450, marginTop: 120 }}>
          <Container as={Flex} vCenter gap={30}>
            <BsCheckCircleFill size={45} color="#20BF6B" />
            <Grid gap={15}>
              <Typhography as="strong" medium bold>#FREEDATAMOVEMENT</Typhography>
              <Typhography as="h2" medium>
                <EnglishTranslate>You help everyone around the world to get unlimited fast and free internet access</EnglishTranslate>
                <IndonesiaTranslate>Anda membantu semua orang di seluruh dunia untuk mendapatkan akses internet cepat dan gratis tanpa batas</IndonesiaTranslate>
              </Typhography>  
            </Grid>
          </Container>
        </Grid>
        <Container style={{ padding: '120px 0' }}>
          <Row className="g-0">
            {whyShouldIJoinData.map((_WhyShouldIJoin, _WhyShouldIJoinIndex) => 
              <Col lg={6} style={{ background: _WhyShouldIJoin.background }} key={_WhyShouldIJoinIndex}>
                <Grid as="section" >
                  <Grid as={Container} gap={15} style={{ padding: 60 }}>
                    <Flex justifyContent="space-between">
                      <Typhography as="h2" small semibold>{_WhyShouldIJoin.title}</Typhography>
                      <BsCheckCircleFill size={25} color="#20BF6B" />
                    </Flex>
                    <Typhography small lineHeight="175%" color="#ccc">{_WhyShouldIJoin.description}</Typhography>
                  </Grid>
                </Grid>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </article>
  );
}