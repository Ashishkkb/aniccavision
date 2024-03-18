"use client"

import { useState, useEffect } from 'react';
import StackedBarGraph from "../StackedGraph";

interface GraphData {
    data: {
      buses: number;
      cars: number;
      trucks: number;
    };
    label: string;
}

const MainGraphTest: React.FC = () => {
  const [graphData, setGraphData] = useState<GraphData[]>([]);

  useEffect(() => {
    // Commented out the API call for now
    // const fetchData = async () => {
    //   const response = await fetch('http://127.0.0.1:8000/vehicle_count?status=DAILY');
    //   const data = await response.json();
    //   setGraphData(data.graph_data);
    // };

    // fetchData();

    // Demo data
    const demoData: GraphData[] = [
      {
        data: { buses: 6, cars: 174, trucks: 5 },
        label: "2024-03-14 00:00:00 - 2024-03-14 02:00:00"
      },
      {
        data: { buses: 1, cars: 81, trucks: 2 },
        label: "2024-03-14 02:00:00 - 2024-03-14 04:00:00"
      },
      {
        data: { buses: 1, cars: 81, trucks: 2 },
        label: "2024-03-14 02:00:00 - 2024-03-14 04:00:00"
        
      },
      {
        data: { buses: 1, cars: 81, trucks: 2 },
        label: "2024-03-14 02:00:00 - 2024-03-14 04:00:00"
        
      },
      {
        data: { buses: 1, cars: 81, trucks: 2 },
        label: "2024-03-14 02:00:00 - 2024-03-14 04:00:00"
        
      },
      
      // Add more demo data as needed
    ];

    setGraphData(demoData);
  }, []);

  return (
    <div>
      <h1>Daily Vehicle Count</h1>
      <StackedBarGraph graphData={graphData} />
    </div>
  );
};

export default MainGraphTest;
