import { Line } from 'react-chartjs-2';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { Chart, registerables } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// Registrar todos los componentes necesarios de Chart.js
Chart.register(...registerables);

const TrafficGrafic = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Visits',
        data: [150, 200, 100, 150, 100, 200, 150],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Unique',
        data: [100, 150, 200, 100, 150, 100, 200],
        borderColor: 'rgba(75,192,75,1)',
        backgroundColor: 'rgba(75,192,75,0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false,
        min: 50,
        max: 200,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Container fluid style={{ backgroundColor: '#212529', color: 'white', padding: '20px', borderRadius: '8px' }}>
      <Row>
        <Col md={8}>
          <h4>Traffic</h4>
          <p>January - July 2023</p>
        </Col>
        <Col md={4} className="text-end">
          <ButtonGroup aria-label="Basic example">
            <Button variant="outline-light">Day</Button>
            <Button variant="outline-light">Month</Button>
            <Button variant="outline-light">Year</Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Line data={data} options={options} />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={4}>
          <p>Visits</p>
          <h5>29,703 Users (40%)</h5>
        </Col>
        <Col md={4}>
          <p>Unique</p>
          <h5>24,093 Users (20%)</h5>
        </Col>
        <Col md={4}>
          <p>New Users</p>
          <h5>22,123 Users (80%)</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default TrafficGrafic;
