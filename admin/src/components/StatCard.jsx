
import { Line, Bar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import { Chart, registerables } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// Registrar todos los componentes necesarios de Chart.js
Chart.register(...registerables);

const StatCard = ({ title, value, percentage, chartType, data, options, backgroundColor }) => {
  return (
    <Card style={{ backgroundColor: backgroundColor, color: 'white', borderRadius: '12px', minWidth: '50px' }}>
      <Card.Body>
        <Card.Title>
          {value} <span style={{ fontSize: '0.8em', color: percentage > 0 ? 'lightgreen' : 'lightcoral' }}>{percentage > 0 ? `(+${percentage} ↑)` : `(${percentage} ↓)`}</span>
        </Card.Title>
        <Card.Text>{title}</Card.Text>
        {chartType === 'line' && <Line data={data} options={options} />}
        {chartType === 'bar' && <Bar data={data} options={options} />}
      </Card.Body>
    </Card>
  );
};

export default StatCard;