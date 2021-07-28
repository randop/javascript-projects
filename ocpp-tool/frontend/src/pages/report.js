import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

export default function Report() {
    return (
        <Container>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Date/Time</th>
      <th>Test</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>2021-07-28T10:46:02.246Z</td>
      <td>TC_CP_1</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>2</td>
      <td>2021-07-28T10:46:02.246Z</td>
      <td>TC_CP_2</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>3</td>
      <td>2021-07-28T10:46:02.246Z</td>
      <td>TC_CP_3</td>
      <td>Pass</td>
    </tr>
  </tbody>
</Table>
</Container>
    );
}