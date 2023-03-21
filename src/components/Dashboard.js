import { useState } from 'react';

import data from '../data/data';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [stocks, setStocks] = useState(data);

  return (
    <>
      <h1>Most Active Stocks</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => {
            const { name, lastPrice, change, symbol } = stock;
            return (
              <tr key={symbol}>
                <td>
                  <Link to={`/stocks/${symbol}`}>{name}</Link>
                </td>
                <td>{lastPrice}</td>
                <td>{change}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Dashboard;
