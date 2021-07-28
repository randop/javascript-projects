import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';

import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';
import { CellMeasurer, CellMeasurerCache } from 'react-virtualized/dist/commonjs/CellMeasurer';

export default function Simulator() {
    const cache = new CellMeasurerCache({
        defaultHeight: 40,
        fixedWidth: false
    });

    const list = [
        '[05:10:01 PM] Test Item 1',
        '[05:10:01 PM] Test Item 2',
        '[05:10:01 PM] Test Item 3',
        '[05:10:01 PM] Test Item 4',
        '[05:10:01 PM] Test Item 5',
        '[05:10:01 PM] Test Item 6',
        '[05:10:01 PM] Test Item 7',
        '[05:10:01 PM] Test Item 8',
        '[05:10:01 PM] Test Item 9',
        '[05:10:01 PM] Test Item 10',
        '[05:10:01 PM] Test Item 11',
        '[05:10:01 PM] Test Item 12',
        '[05:10:01 PM] Test Item 13',
        '[05:10:01 PM] Test Item 14',
        '[05:10:01 PM] Test Item 15',
        '[05:10:01 PM] Test Item 16',
        '[05:10:01 PM] Test Item 17',
        '[05:10:01 PM] Test Item 18',
        '[05:10:01 PM] Test Item 19',
        '[05:10:01 PM] Test Item 20',
        '[05:10:01 PM] Test Item 21',
        '[05:10:01 PM] Test Item 22',
        '[05:10:01 PM] Test Item 23',
        '[05:10:01 PM] Test Item 24',
        '[05:10:01 PM] Test Item 25',
        '[05:10:01 PM] Test Item 26',
        '[05:10:01 PM] Test Item 27',
        '[05:10:01 PM] Test Item 28',
        '[05:10:01 PM] Test Item 29',
        '[05:10:01 PM] Test Item 30',
    ];

    const payloads = [
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
        '[05:10:01 PM]',
    ];

    const data = [2, "XXXXX", "BootNotification", {"chargePointVendor": "VendorX", "chargePointModel": "SingleSocketCharger"}];
      

    function rowRenderer({key, index, style}) {
        return (
          <div key={key} style={style}>
            <pre>{list[index]}</pre>
          </div>
        );
      }

      function payloadRowRenderer ({ index, isScrolling, key, parent, style }) {
        return (
            <CellMeasurer
              cache={cache}
              columnIndex={0}
              key={key}
              parent={parent}
              rowIndex={index}
            >
              {({ measure, registerChild }) => (
                // 'style' attribute required to position cell (within parent List)
                <div ref={registerChild} style={style}>
                  <Card body><pre>{payloads[index]} {JSON.stringify(data, undefined, 2)}</pre></Card>            
                </div>
              )}
            </CellMeasurer>
          );
      }  

    return (
        <Container>
            <Row>
                <Col>

                
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon3">
      Charge Point URL
    </InputGroup.Text>
    <FormControl id="cp-url" aria-describedby="basic-addon3" />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon3">
      Central System URL
    </InputGroup.Text>
    <FormControl id="cs-url" aria-describedby="basic-addon3" />
  </InputGroup>

                </Col>
                <Col>
                <Row>
                <Col>
                <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon3">
      Test Case
    </InputGroup.Text>
    <Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
  </InputGroup>
  <InputGroup className="mb-3">                       
  <Form.Control as="textarea" rows={2} />
  </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>     
                        
                            <Button variant="primary">Run</Button>                            
                        
                        </Col>
                    </Row>
                </Col>                
            </Row>
            <Row>
                <Col><hr /></Col>
                </Row>
            <Row>
                <Col>
                    <Row>
                        <Col>Payloads</Col>
                    </Row>
                    <Row>
                        <Col>
                        <div style={{ flex: '1 1 auto', minHeight: '500px' }}>
                        <AutoSizer>
    {({height, width}) => (
      <List
        height={height}
        rowCount={list.length}
        deferredMeasurementCache={cache}
        rowHeight={cache.rowHeight}
        rowRenderer={payloadRowRenderer}
        width={width}
      />
    )}
  </AutoSizer>
  </div>
                        </Col>
                    </Row>
                </Col>
                
                <Col>
                    <Row>
                        <Col>Logs</Col>
                    </Row>
                    <Row>
                        <Col>
                        <div style={{ flex: '1 1 auto', minHeight: '500px' }}>
                        <AutoSizer>
    {({height, width}) => (
      <List
        height={height}
        rowCount={list.length}
        rowHeight={20}
        rowRenderer={rowRenderer}
        width={width}
      />
    )}
  </AutoSizer>
  </div>
                        </Col>
                    </Row>
                </Col>

            </Row>
        </Container>
    );
}