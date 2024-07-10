import LeftNavBar from "./LeftNavBar";
import DiagnosisHistory from "./DiagnosisHistory";
import Profile from "./Profile";

import { useState, useEffect } from "react";

export default function DahsboardContent () {
	const [apiResult, setApiResult] = useState("")
    const [dataOfJessica, setDataOfJessica] = useState({})

    let auth  = ""
    if (typeof window !== 'undefined') {
		auth = window.btoa(`${process.env.NEXT_PUBLIC_USERNAME}:${process.env.NEXT_PUBLIC_PASSWORD}`);
	}

    useEffect(() => {
		fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
			headers: {
				'Authorization': `Basic ${auth}`
			}
		}).then((res) => {
			if (res.ok)
				return res.json()
			throw res

		}).then((data) => {
                setApiResult(data)
			const jessicaData = data.filter((el) => el.name === "Jessica Taylor")
			if (jessicaData.length != 0)
                setDataOfJessica(jessicaData[0])
			else
				throw new Error("jessicaData not found")
		})
	}, [])

    return(
        <div className="flex mx-[18px] my-[32px]">
            <LeftNavBar apiResult={apiResult}/>
            <DiagnosisHistory apiResult={apiResult} dataOfJessica={dataOfJessica}/>
            <Profile dataOfJessica={dataOfJessica}/>
        </div>
    )
}
