
import { Container, Row, Col } from 'react-bootstrap';
import StatCard from './StatCard';

function GraficCards() {
  const commonOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
      },
    },
  };

  const userChartData = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      {
        data: [60, 50, 70, 65, 60, 55, 50],
        borderColor: 'rgba(255,255,255,0.8)',
        backgroundColor: 'rgba(255,255,255,0.2)',
        fill: true,
      },
    ],
  };

  const incomeChartData = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      {
        data: [2000, 2200, 1800, 2300, 2400, 2200, 2100],
        borderColor: 'rgba(255,255,255,0.8)',
        backgroundColor: 'rgba(255,255,255,0.2)',
        fill: true,
      },
    ],
  };

  const conversionRateChartData = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      {
        data: [2, 2.5, 2, 3, 2.8, 2.9, 3.1],
        borderColor: 'rgba(255,255,255,0.8)',
        backgroundColor: 'rgba(255,255,255,0.2)',
        fill: true,
      },
    ],
  };

  const sessionChartData = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      {
        data: [10, 15, 9, 12, 8, 14, 13],
        backgroundColor: 'rgba(255,255,255,0.6)',
      },
    ],
  };

  return (
    <Container fluid style={{ padding: '20px' }}>
      <Row>
        <Col xs={12} sm={6} md={6} lg={3}>
          <StatCard
            title="Users"
            value="26K"
            percentage="-12.4%"
            chartType="line"
            data={userChartData}
            options={commonOptions}
            backgroundColor="#6f42c1"
          />
        </Col>
        <Col xs={12} sm={6} md={6} lg={3}>
          <StatCard
            title="Income"
            value="$6.200"
            percentage="40.9%"
            chartType="line"
            data={incomeChartData}
            options={commonOptions}
            backgroundColor="#007bff"
          />
        </Col>
        <Col xs={12} sm={6} md={6} lg={3}>
          <StatCard
            title="Conversion Rate"
            value="2.49%"
            percentage="84.7%"
            chartType="line"
            data={conversionRateChartData}
            options={commonOptions}
            backgroundColor="#fd7e14"
          />
        </Col>
        <Col xs={12} sm={6} md={6} lg={3}>
          <StatCard
            title="Sessions"
            value="44K"
            percentage="-23.6%"
            chartType="bar"
            data={sessionChartData}
            options={commonOptions}
            backgroundColor="#dc3545"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default GraficCards;
