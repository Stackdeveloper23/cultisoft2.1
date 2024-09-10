
import { Container, Row, Col } from 'react-bootstrap';
import StatCard from '../StatCard';
import { useEffect, useState } from 'react';
import Config from '../../Config';

function GraficCards() {
  const [userCount, setUserCount] = useState(0);
  const [compraCount, setCompraCount] = useState(0);
  const [productCount, setProductCount] = useState(0); // Estado para almacenar el conteo de usuarios
  const [isLoading, setIsLoading] = useState(true); // Estado para manejar el estado de carga

  useEffect(() => {
    // Llamada a la API para obtener el conteo de usuarios
    const fetchUserCount = async () => {
      try {
        const response = await Config.getUserCount();
        console.log('respuesta api:', response.data)
        // Asegúrate de que response.data.total sea un valor adecuado
        setUserCount(response.data); // Maneja posibles valores indefinidos
        setIsLoading(false); // Marca la carga como completada
      } catch (error) {
        console.error('Error al obtener el conteo de usuarios:', error);
        setIsLoading(false); // Marca la carga como completada, incluso si hay un error
      }
    };

    fetchUserCount();
  }, []);

  useEffect(() => {
    // Llamada a la API para obtener el conteo de usuarios
    const fetchCompraCount = async () => {
      try {
        const response = await Config.getComprasCount();
        console.log('respuesta api:', response.data)
        // Asegúrate de que response.data.total sea un valor adecuado
        setCompraCount(response.data); // Maneja posibles valores indefinidos
        setIsLoading(false); // Marca la carga como completada
      } catch (error) {
        console.error('Error al obtener el conteo de usuarios:', error);
        setIsLoading(false); // Marca la carga como completada, incluso si hay un error
      }
    };

    fetchCompraCount();
  }, []);

  useEffect(() => {
    // Llamada a la API para obtener el conteo de usuarios
    const fetchProductsCount = async () => {
      try {
        const response = await Config.getProductsCount();
        console.log('respuesta api:', response.data)
        // Asegúrate de que response.data.total sea un valor adecuado
        setProductCount(response.data); // Maneja posibles valores indefinidos
        setIsLoading(false); // Marca la carga como completada
      } catch (error) {
        console.error('Error al obtener el conteo de productos:', error);
        setIsLoading(false); // Marca la carga como completada, incluso si hay un error
      }
    };

    fetchProductsCount();
  }, []);

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



  return (
    <Container fluid style={{ padding: '20px' }}>
      <Row>
        <Col xs={12} sm={6} md={6} lg={4}>
          <StatCard
            title="Usuarios Total"
            value={isLoading ? 'Loading...' : `${userCount}`}
            percentage=""
            chartType="line"
            data={userChartData}
            options={commonOptions}
            backgroundColor="#6f42c1"
          />
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <StatCard
            title="Compras realizadas"
            value={isLoading ? 'Loading...' : `${compraCount}`}
            percentage=""
            chartType="line"
            data={incomeChartData}
            options={commonOptions}
            backgroundColor="#007bff"
          />
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <StatCard
            title="Productos total"
            value={isLoading ? 'Loading...' : `${productCount}`}
            percentage=""
            chartType="line"
            data={conversionRateChartData}
            options={commonOptions}
            backgroundColor="#fd7e14"
          />
        </Col>
       
      </Row>
    </Container>
  );
}

export default GraficCards;
