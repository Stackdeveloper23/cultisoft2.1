
import { Bar } from 'react-chartjs-2';
import { Container, Row, Col } from 'react-bootstrap';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
const Grafico = () => {
  // Datos y opciones del gráfico
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h3 className="text-center">Monthly Sales</h3>
          <Bar data={data} options={options} />
        </Col>
      </Row>
    </Container>
  );
};

export default Grafico;
    