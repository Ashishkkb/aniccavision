"use client"

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import MainGraphTest from "../../components/DashboardGraph/MainGraphTest";

const VideoStatistics: React.FC = () => {
    const [vehicleCount, setVehicleCount] = useState<number>(0);
    const [pedestrianCount, setPedestrianCount] = useState<number>(0);

    const fetchVehicleCount = async () => {
        try {
            const response = await fetch('https://manage-sustainable-industry-storm.trycloudflare.com/all_counts');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setVehicleCount(data.vehicle || 0);
            setPedestrianCount(data.pedestrian || 0);
        } catch (error) {
            console.error('Error fetching vehicle counts:', error);
            // You can set a state to show an error message to the user if needed.
        }
    };

    useEffect(() => {
        const intervalId = setInterval(fetchVehicleCount, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="h-98px bg-white w-screen px-6 py-4 border-b-2">
                <Navbar />
            </div>
            <div className='flex flex-col bg-white justify-center'>
                <div className="grid grid-cols-2 mt-10 mx-8 min-h-[600px] p-[2%] bg-white">
                    <div className="bg-white p-4 col-span-1 flex flex-col">
                        <div className='ml-6'>
                            Location: <span className='font-bold'>112 Ave NE & NE 10th St, Bellevue, WA</span>
                        </div>
                        <div className='ml-6 mt-10'>
                            <img alt='video_feed' src={"https://manage-sustainable-industry-storm.trycloudflare.com/video_feed"} className='h-[60vh]' title="Traffic Video Feed" />
                        </div>
                    </div>
                    <div className='mx-10'>
                        <MainGraphTest />
                    </div>
                </div>
                <div className="bg-white w-screen flex flex-row items-center justify-center py-10">
                    <div className='flex flex-col gap-4 justify-center items-center'>
                        <div className='ml-6 font-bold text-lg py-2 mt-4'>Live Metrics</div>
                        <div className='mt-4 grid grid-cols-2 ml-6 gap-4'>
                            <div className='p-6 rounded-md bg-[#F2F8FF]'>
                                Pedestrians: <span className='font-bold'>{pedestrianCount}</span>
                            </div>
                            <div className='p-6 rounded-md bg-[#F2F8FF]'>
                                Vehicles: <span className='font-bold'>{vehicleCount}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoStatistics;
