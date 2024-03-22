import Image from "next/image";
import VideoStatistics from './components/Dashboard/index';
import MainGraphTest from "./components/DashboardGraph/MainGraphTest";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F2F8FF]">
      <VideoStatistics />
    </main>
  );
}
