import { Container, Row, Col } from "react-bootstrap";
import { Grid, Typhography, Flex } from "../../../../styles/globalsStyled";

export default function OpenData() {
  const openData = [
    { title: 'Available', description: 'the data should be in whole, downloadable from the Internet, with no costs apart from reproduction fees', background: '#111', col: 6 },
    { title: 'Accessible', description: 'the data should be provided in a convenient form that can be modified', background: '#151515', col: 6 },
    { title: 'Reusable', description: 'this should be expressed under terms provided with the data', background: '#222', col: 6 },
    { title: 'Redistributable', description: 'the data can be combined with data from other research', background: '#252525', col: 6 },
    { title: 'Unrestricted', description: ' everyone can use, modify, and share the data, regardless of how they use the data (e.g. for commercial, non-commercial, or educational purposes)', background: '#333', col: 12 }
  ];

  return (
    <article className="d-grid bg-black" style={{ gap: 60, padding: '114px 0' }}>
      <Container>
        <Typhography as="h2" large bold>What is Open Data ?</Typhography>
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
    </article>
  );
}