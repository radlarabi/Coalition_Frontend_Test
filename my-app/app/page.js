"use client"

import TopNavBar from "./components/TopNavBar";
import DahsboardContent from "./components/DashboardContent";

export default function Home() {
	
	return (
		<main className="bg-[#F6F7F8] h-fit">
			<TopNavBar />
			<DahsboardContent />
	    </main>
  );
}
