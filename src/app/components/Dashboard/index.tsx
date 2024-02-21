"use client"

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';


const VideoStatistics: React.FC = () => {
    
    const [videoFeedUrl, setVideoFeedUrl] = useState('http://traffic.aniccadatatest.com/video_feed');
    const [vehicleCount, setVehicleCount] = useState<number>(0);

    useEffect(() => {
            const fetchVehicleCount = async () => {
                try {
                    const response = await fetch('http://traffic.aniccadatatest.com/vehicle_count');
                    const data = await response.json();
                    setVehicleCount(data.count);
                } catch (error) {
                    console.error('Error fetching vehicle count:', error);
                }
            };

            fetchVehicleCount();
            const intervalId = setInterval(fetchVehicleCount, 500);

            return () => clearInterval(intervalId);

    }, []);

    return (
        <>
            <div className="h-98px bg-white w-screen px-6 py-4 border-b-2">
                <Navbar />
            </div>
            <div className="flex flex-row mt-10 mx-8 min-h-[600px] w-[98%] p-[2%]">
                <div className="bg-white p-4 w-[65%] col-span-2 flex flex-col">
                    <div className='ml-6'>
                        Location: <span className='font-bold'>Anil Kumble Circle</span>
                    </div>
                    <div className='ml-6 mt-10 w-[60vw] h-[60vh]'>
                    {/* <Image alt='video_feed' width={200} height={100} src={"http://traffic.aniccadatatest.com/video_feed"} className='w-[60vw] h-[60vh]' title="Traffic Video Feed" /> */}
                        <iframe width={800} height={500} src={videoFeedUrl} className='scale-[160%] ml-56 mt-32' title="Traffic Video Feed" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
                <div className="bg-white w-[30%] col-span-1 flex flex-col items-center justify-top pt-10">
                    <div className=' font-bold text-lg border-b-2 py-2'>Metrics</div>
                    <div className='mt-4'>
                        <div className='w-[467px] h-[216px] bg-[#F2F8FF] p-6 flex flex-col'>
                            <div className='border-b-4 font-bold py-2'>Live Vehicle Count</div>
                            <div className='mx-auto mt-8 text-5xl font-bold'>{vehicleCount}</div>
                        </div>
                    </div>
                    <div className='ml-6 font-bold text-lg py-2 mt-4'>Vehicles Classification</div>
                    <div className='mt-4 grid grid-cols-2 ml-6 gap-4'>
                        <div className='p-6 rounded-md bg-[#F2F8FF]'>
                            Buses: <span className='font-bold'>12</span>
                        </div>
                        <div className='p-6 rounded-md bg-[#F2F8FF]'>
                            Cars: <span className='font-bold'>137</span>
                        </div>
                        <div className='p-6 rounded-md bg-[#F2F8FF]'>
                            Trucks: <span className='font-bold'>39</span>
                        </div>
                        <div className='p-6 rounded-md bg-[#F2F8FF]'>
                            Bikes: <span className='font-bold'>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoStatistics;
