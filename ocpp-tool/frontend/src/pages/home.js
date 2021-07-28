import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export default function Home() {
    return (
        <Container>
            <Row>
                <Col>

                <Form>

                <Card>
                <Card.Body>
                <Card.Title><strong>Charge Point</strong></Card.Title>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Charge Point URL</Form.Label>
    <Form.Control type="text" placeholder="(e.g. ws://localhost/ocpp)" />    
  </Form.Group>
  </Card.Body>
  </Card>

  <Card>
                <Card.Body>
                <Card.Title><strong>Central System</strong></Card.Title>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Central System URL</Form.Label>
    <Form.Control type="text" placeholder="(e.g. ws://server/ocpp)" />
  </Form.Group>    
  </Card.Body>
  </Card>
</Form>

                </Col>
            </Row>
        </Container>
    );
}