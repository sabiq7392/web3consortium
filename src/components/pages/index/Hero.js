import { HeroContainer } from '../../../../styles/styledIndex';
import { Row, Col, Container } from 'react-bootstrap';
import Image from 'next/image';
import { Grid, Typhography } from '../../../../styles/globalsStyled';

export default function Hero() {
  return (
    <HeroContainer>
      <Row as={Container} className="m-0 p-0">
        <Col lg={6} as={Grid} center>
          <Grid gap={30} style={{ background: 'rgba(0,0,0,0.5)', padding: 30 }}>
            <Typhography as="h1" large bold>Free Data Movement</Typhography>
            <Typhography small color="#ccc">
              Access to more data can change individuals and societies for better. 
              We live in a world where corporations make a profit of a product where the raw input has largely been paid by the tax payers.
            </Typhography>
            <Typhography>
              <span style={{ fontSize: 72, fontWeight: 'bold' }}>2000+</span> <br /> <span >Has signed the pledge</span>
            </Typhography>
          </Grid>
        </Col>
        <Col lg={6} as={Grid} center ariaLabel="image of free data movement">
          <Image src="/images/items/item_earth_3d.svg" alt="Free Data Movement" width={500} height={500} />
        </Col>
      </Row>
    </HeroContainer>
  );
}