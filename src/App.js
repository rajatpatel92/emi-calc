import { React } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EMICalculator from './EMICalculator';
import TopBar from './TopBar';

const App = () => {
  return (
    <>
      <TopBar></TopBar>
      <br/>
      <Container>
        <Row>
          <Col>
            <EMICalculator></EMICalculator>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
