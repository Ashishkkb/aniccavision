import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

interface GraphData {
  data: {
    buses: number;
    cars: number;
    trucks: number;
  };
  label: string;
}

interface Props {
  graphData: GraphData[];
  width?: number;
  height?: number;
}

const StackedBarGraph: React.FC<Props> = ({ graphData }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current || !graphData.length) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: graphData.map((data) => data.label),
        datasets: [
          {
            label: 'Buses',
            data: graphData.map((data) => data.data.buses),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'Cars',
            data: graphData.map((data) => data.data.cars),
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'Trucks',
            data: graphData.map((data) => data.data.trucks),
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [graphData]);

  return <canvas ref={canvasRef} className='max-w-[90%] max-h-[600px] ml-10'></canvas>;
};

export default StackedBarGraph;
