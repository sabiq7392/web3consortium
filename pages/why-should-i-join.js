import { Flex, Grid, Typhography } from '../styles/globalsStyled';
import Image from 'next/image';
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';

export default function WhyShouldIJoin() {
  const whyShouldIJoinData = [
    {
      title: 'Transparency',
      description: 'Open Data supports public oversight of governments and helps reduce corruption by enabling greater transparency',
      readmore: 'http://opendatatoolkit.worldbank.org/en/starting.html',
      background: '#000000',
    },
    {
      title: 'Public Service Improvement',
      description: 'Open Data gives citizens the raw materials they need to engage their governments and contribute to the improvement of public services.',
      readmore: 'http://opendatatoolkit.worldbank.org/en/starting.html',
      background: '#0F0F0F',
    },
    {
      title: 'Innovation and Economic Value',
      description: 'Public data, and their re-use, are key resources for social innovation and economic growth.',
      readmore: 'http://opendatatoolkit.worldbank.org/en/starting.html',
      background: '#1E1E1E',
    },
    {
      title: 'Efficiency',
      description: 'Open Data makes it easier and less costly for government ministries to discover and access their own data or data from other ministries.',
      readmore: 'http://opendatatoolkit.worldbank.org/en/starting.html',
      background: '#2D2D2D',
    },
  ];

  // useEffect(() => {
  //   const footerWebsite = document.querySelector('#footerWebsite');
  //   footerWebsite.classList.remove('bg-black');
  //   footerWebsite.classList.add('bg-white');
  // });

  return (
    <article>
      <div className="bg-black">
        <Container>
          <Typhography as="h1" xLarge bold style={{ padding: '120px 0' }}>Why should I join?</Typhography>
          <Grid>
            <Row as="section" style={{ padding: '60px 0' }}>
              <Col lg={2} as={Flex} center>
                <Image src="/images/items/item_centralized.png" alt="Centralized" width={200} height={200} />
              </Col>
              <Col lg={10} as={Flex} vCenter gap={30}>
                <BsXCircleFill size={40} color="#EB3B5A" />
                <Typhography as="h2" medium>Today internet is centralized, limiting opportunity</Typhography>
              </Col>
            </Row>
            <Row  as="section" style={{ padding: '60px 0' }}>
              <Col lg={2} as={Flex} center>
                <Image src="/images/items/item_decentralized.png" alt="Decentralized" width={200} height={200} />
              </Col>
              <Col lg={10} as={Flex} vCenter gap={30}>
                <BsCheckCircleFill size={45} color="#20BF6B" />
                <Typhography as="h2" medium>Now we invite the decentralized internet for unlimited, secure and freedom</Typhography>
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
                You help everyone around the world to get unlimited fast and free internet access
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