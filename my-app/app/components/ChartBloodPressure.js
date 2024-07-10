"use client"

import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function ChartBloodPressure({apiResult}) {
	const getSystolic  = (arr) => {
		let res = []
		if (!arr)
			return res
		arr.slice(0, 6).forEach(el => {
			res.push(el.blood_pressure.systolic.value)
		})
		
		return res.reverse();
	}
	
	const getDiastolic  = (arr) => {
		let res = []
		if (!arr)
			return res
		arr.forEach(el => {
			res.push(el.blood_pressure.diastolic .value)
		})
		
		return res.reverse();
	}
	const chartRef = useRef(null);
	const chartInstance = useRef(null)


	useEffect(() => {
		let arrData = getSystolic(apiResult.diagnosis_history);
		let arrData1 = getDiastolic(apiResult.diagnosis_history);

		
		const chartData = {
			labels: ['Oct, 2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024'],
			datasets: [
				{
					label: 'Systolic',
					data: arrData,
					fill: false,
					borderColor: 'rgb(230, 111, 210)',
					tension: 0.4
				},
				{
					label: 'Systolic',
					data: arrData1,
					fill: false,
					borderColor: 'rgb(140, 111, 230)',
					tension: 0.4
				}
			]
		};
	
		if (chartInstance.current) {
			chartInstance.current.destroy();
		}
		
		const ctx = chartRef.current.getContext('2d');
		if (ctx) {
			chartInstance.current = new Chart(ctx, {
				type: 'line',
				data: chartData,
			});
		}
	
	}, [apiResult.diagnosis_history]);
	


	return (
		<canvas className="w-full h-full" id="canvasid" ref={chartRef}/>
  );
}
