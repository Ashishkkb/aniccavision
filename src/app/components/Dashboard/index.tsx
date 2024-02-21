import React from 'react';
import Navbar from './Navbar';

const VideoStatistics: React.FC = () => {
    return (
        <>
            <div className="h-98px bg-white w-screen px-6 py-4 border-b-2">
                <Navbar />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-10 mx-8 min-h-[600px]">
                <div className="bg-white p-4 col-span-2 flex flex-col">
                    <div className='ml-6'>
                        Location: <span className='font-bold'>Anil Kumble Circle</span>
                    </div>
                    <div className='ml-6 mt-10'>
                        <iframe width="1000" height="500" src="https://www.youtube.com/embed/kJuqyyqxPV4?si=uni434GcH6AGqpSb&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
                <div className="bg-white p-4 col-span-1 flex flex-col gap-4">
                    <div className='ml-6 font-bold text-lg border-b-2 py-2'>Metrics</div>
                    <div className='mx-8 mt-4'>
                        <div className='w-[467px] h-[216px] bg-[#F2F8FF] p-6 flex flex-col'>
                            <div className='border-b-4 font-bold py-2'>Live Vehicle Count</div>
                            <div className='mx-auto mt-8 text-5xl font-bold'>188</div>
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
