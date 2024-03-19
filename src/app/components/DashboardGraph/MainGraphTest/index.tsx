"use client"

import { useState, useEffect } from 'react';
import StackedBarGraph from "../StackedGraph";
import DatePicker from "react-datepicker";
import Image from "next/image";
import calendar from "../../../../../public/assets/CalendarBlank.svg";
import "react-datepicker/dist/react-datepicker.css";

interface GraphData {
  data: {
    buses: number;
    cars: number;
    trucks: number;
  };
  label: string;
}

interface ACTIVE {
  daily: boolean;
  weekly: boolean;
  monthly: boolean;
}

const MainGraphTest: React.FC = () => {
  const [graphData, setGraphData] = useState<GraphData[]>([]);
  const [active, setActive] = useState<ACTIVE>({
    'daily': true,
    'weekly': false,
    'monthly': false
  });
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  useEffect(() => {
    // Commented out the API call for now
    function formatDate(date: Date) {
      let d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
  
      return [year, month, day].join('-');
    }

    const newStartDate = formatDate(startDate);
    const newEndDate = formatDate(endDate);
    const status = active.daily? 'DAILY': active.weekly? 'WEEKLY': 'MONTHLY';

    // const fetchData = async () => {
    //   const response = await fetch(`http://127.0.0.1:8000/vehicle_count?status=${status}`, {
    //     method: "GET",
    //     body: {
    //       "from_date": newStartDate.toString(), 
    //       "end_date": newEndDate
    //     }
    //   });
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
      <div className='flex items-center justify-between p-2 max-w-[90%] mx-auto'>
        <h1 className='font-[700] text-[24px] leading-[32.4px]'>Historic Metrics</h1>
        <div className='bg-[#f2f2f2] rounded-md p-1 w-fit'>
          <button onClick={() => {
            setActive(() => {
              return {
                weekly: false,
                monthly: false,
                daily: true
              }
            });
          }} className={`${active.daily ? 'bg-white text-[#017EFA]' : 'text-[#939393]'} transition duration-300 ease-in-out font-[700] px-4 py-2 rounded-md`}>Daily</button>
          <button onClick={() => {
            setActive(() => {
              return {
                daily: false,
                monthly: false,
                weekly: true
              }
            });
          }} className={`${active.weekly ? 'bg-white text-[#017EFA]' : 'text-[#939393]'} transition duration-300 ease-in-out mx-2 font-[700] px-4 py-2 rounded-md`}>Weekly</button>
          <button onClick={() => {
            setActive(() => {
              return {
                daily: false,
                weekly: false,
                monthly: true
              }
            });
          }} className={`${active.monthly ? 'bg-white text-[#017EFA]' : 'text-[#939393]'} transition duration-300 ease-in-out font-[700] px-4 py-2 rounded-md`}>Monthly</button>
        </div>
        <div className='flex justify-between items-center'>
          <DatePicker 
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          customInput={<CustomDateComponent type='From' onClick={onclick} date={startDate.toLocaleDateString()} />}
          />
          <DatePicker 
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          customInput={<CustomDateComponent type='To' onClick={onclick} date={startDate.toLocaleDateString()} />}
          />
        </div>
      </div>
      <div className='bg-[#E7E6E6] max-w-[90%] mx-auto mt-2 h-[1px]'></div>
      <div className='flex my-4 max-w-[90%] mx-auto justify-between'>
        <div className='rounded-md w-fit flex items-center border-[#B6B6B6] border-2 p-2 bg-[#f2f2f2]'>
          <p className='font-[400] text-[18.5px]'>
            Total no. of Vehicles:
            <span className='ml-2 font-bold'>188</span>
          </p>
          <div className='bg-black h-[40px] mx-4 w-[2px]'></div>
          <div className='flex items-center'>
            <p className='font-[400] text-[18.5px]'>
              Vehicles Type:
            </p>
            <div className='border-[#B6B6B6] ml-2 flex items-center rounded-md border p-2'>
              <p>
                Buses:
                <span className='ml-2 font-bold'>188</span>
              </p>
              <div className='bg-black h-[30px] mx-4 w-[2px]'></div>
              <p>
                Cars:
                <span className='ml-2 font-bold'>188</span>
              </p>
              <div className='bg-black h-[30px] mx-4 w-[2px]'></div>
              <p>
                Trucks:
                <span className='ml-2 font-bold'>188</span>
              </p>
            </div>
          </div>
        </div>
        <div className='border-[#B6B6B6] flex items-center justify-center rounded-md border-2 p-2 bg-[#f2f2f2]'>
          <p className='font-[400] text-[18.5px]'>
            Wrong Directions: 
            <span className='font-bold ml-2'>
              656
            </span>
          </p>
        </div>
      </div>
      <StackedBarGraph graphData={graphData} />
    </div>
  );
};

export default MainGraphTest;

function CustomDateComponent ({ date, onClick, type }: { date: string, onClick: any, type: string }) {
  return (
    <div onClick={onClick} className='flex flex-col ml-2 justify-center items-center'>
      <Image src={calendar} alt='calendar' />
      <div className='bg-[#f2f2f2] rounded-md p-2'>
        <span className='font-bold'>{ type }:</span> { date }
      </div>
    </div>
  )
}