import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';


const resultData = [
  {
    "id": 1,
    "name": "Rahim",
    "physics": 85,
    "chemistry": 78,
    "math": 92
  },
  {
    "id": 2,
    "name": "Karim",
    "physics": 74,
    "chemistry": 81,
    "math": 69
  },
  {
    "id": 3,
    "name": "Anika",
    "physics": 91,
    "chemistry": 88,
    "math": 95
  },
  {
    "id": 4,
    "name": "Sami",
    "physics": 67,
    "chemistry": 72,
    "math": 64
  },
  {
    "id": 5,
    "name": "Prapty",
    "physics": 89,
    "chemistry": 85,
    "math": 93
  },
  {
    "id": 6,
    "name": "Arif",
    "physics": 76,
    "chemistry": 70,
    "math": 82
  },
  {
    "id": 7,
    "name": "Mitu",
    "physics": 95,
    "chemistry": 92,
    "math": 97
  },
  {
    "id": 8,
    "name": "Nafis",
    "physics": 80,
    "chemistry": 77,
    "math": 84
  },
  {
    "id": 9,
    "name": "Riya",
    "physics": 90,
    "chemistry": 87,
    "math": 91
  },
  {
    "id": 10,
    "name": "Tanvir",
    "physics": 72,
    "chemistry": 68,
    "math": 75
  }
]




const ResultChart = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={resultData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math"></Line>
        <Line dataKey="chemistry" stroke='red'></Line>
      </LineChart>
    </div>
  );
};

export default ResultChart;