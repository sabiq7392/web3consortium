import { Container, Row, Col } from 'react-bootstrap';
import { Grid, Typhography } from '../styles/MameStyled/Mame.styled';
import styled from 'styled-components';

export const LearnWeb3Container = styled.div`
  background: url("/images/bg/bg_web_3_0.svg");
  background-repeat: no-repeat;
  background-position-y: 100px;
  height: 350px;
`;

export default function LearnWeb3() {
  const learnWeb3Data = [
    { title: 'Open', description: `It${"’"}s ${"’"}open${"’"} in the sense that it${"’"}s made with open-source software developed by an open and available community of developers and accomplished in full view of the public.`, image: '/images/items/item_open_3d.svg', background: '#151515' },
    { title: 'Trustless', description: 'The network offers freedom to users to interact publicly and privately without an intermediary exposing them to risks, hence “trustless” data.', image: '', background: '#222' },
    { title: 'Permissionless', description: 'Anyone, including users and providers, can engage without the need for permission from a controlling organization.', image: '', background: '#252525' },
    { title: 'Ubiquitous', description: 'Web 3.0 will make the Internet available to all of us, at any time and from any location. At some point, Internet-connected devices will no longer be limited to computers and smartphones, as they are in web 2.0. Because of the IoT (Internet of Things), technology will enable the development of a multitude of new types of intelligent gadgets.', image: '', background: '#333' }
  ];

  return (
    <article className="bg-black">
      <LearnWeb3Container as={Container}>
        <Typhography as="h1" large bold style={{ paddingTop: 150 }}>WEB 3.0</Typhography>
      </LearnWeb3Container>

      <Grid>
        <section style={{ background: '#111', padding: '60px 0', marginBottom: 60 }}>
          <Container>
            <Row className="g-5">
              <Col lg={7} className="d-grid" style={{ gap: 30 }}>
                <Typhography as="h2" medium bold>What exactly is</Typhography>
                <Typhography xSmall lineHeight="175%" color="#ccc">
                  is the third iteration of the Internet that interconnects data in a decentralized way to deliver a faster and more personalized user experience. It is built using artificial intelligence, machine learning and the semantic web, and uses the blockchain security system to keep your information safe and secure.
                </Typhography>
              </Col>
              <Col lg={5}>
                <iframe className="w-100 h-100" src="https://www.youtube.com/embed/nHhAEkG1y2U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </Col>
            </Row>
          </Container>
        </section>
        <article>
          <div id="whyShouldWeMigrateToWeb3" className="bg-black" style={{ position: 'sticky', top: 0 }} >
            <Container>
              <Typhography large as="h2" bold style={{ border: '5px solid white', padding: 30 }}>Why should we migrate to web 3.0?</Typhography>
            </Container>
          </div>
          {learnWeb3Data.map((_learnWeb3, _learnWeb3Index) =>
            <section key={_learnWeb3Index} style={{ background: _learnWeb3.background, padding: '60px 0', marginTop: _learnWeb3Index === 0 ? 60 : '' }}>
              <Container>
                <Row className="g-5">
                  <Col lg={8} className="d-flex flex-column order-1 order-lg-0" style={{ gap: 30 }}>
                    <Typhography as="h3" medium bold>{_learnWeb3.title}</Typhography>
                    <Typhography lineHeight="175%" small color="#ccc">{_learnWeb3.description}</Typhography>
                  </Col>
                  <Col lg={4} className="d-flex justify-content-center justify-content-lg-end p-0 order-0 order-md-1">
                    {/* <Image src="/images/items/item_open.svg" alt={_learnWeb3.title} width={300}height={300} /> */}
                  </Col>
                </Row>
              </Container>
            </section>
          )}
        </article>
      </Grid>
    </article>
  );
}