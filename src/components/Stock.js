import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from 'axios';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Stock() {
  const [stock, setStock] = useState(null);

  const params = useParams();
  const symbol = params.symbol;
  const apikey = '1f562ca14f5ace31eb07689ccc0b045c';
  const url = `https://financialmodelingprep.com/api/v4/financial-reports-dates?symbol=${symbol}&apikey=${apikey}`;

  const getStockData = async () => {
    try {
      const res = await axios.get(url);
      console.log(res.data);
      setStock(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStockData();
  }, []);

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{stock.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroup.Item>Symbol: {stock.symbol}</ListGroup.Item>
          <ListGroup.Item>Date: {stock.date}</ListGroup.Item>
          <ListGroup.Item>Period: {stock.period}</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}

export default Stock;

