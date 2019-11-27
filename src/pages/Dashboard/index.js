import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/lessons/1">Ir para a lição 1</Link>
    </div>
  );
}
