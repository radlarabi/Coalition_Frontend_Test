
import ChartBloodPressure from "./ChartBloodPressure";

export default function DiagnosisHistory({apiResult, dataOfJessica}) {

    return (
        <div className="w-[66%]">
            <div className=" h-fit bg-white mx-[33px] rounded-[1rem] p-[20px]">
                <div className="text-[22px] font-medium mb-[40px]">
                    Diagnosis History
                </div>
                <div className="flex p-[1rem] bg-[#F4F0FE] rounded-xl mb-5">
                    <div className="w-full">
                        <ChartBloodPressure apiResult={dataOfJessica}/>
                    </div>
                    <div>
                        <div className="ml-auto w-[200px] h-fit pb-[1rem] border-b">
                            <div className="flex items-center">
                                <div className="h-[14px] w-[14px] bg-[#E66FD2] rounded-full mr-2"></div>
                                <div className="">Systolic</div>
                            </div>
                            
                            <div className="text-[22px] font-semibold my-2">
                                {dataOfJessica.diagnosis_history && dataOfJessica.diagnosis_history[0].blood_pressure.systolic.value}
                            </div>
                            
                            <div className="flex">
                                <img src="/assets/ArrowUp.svg" alt="" />
                                <div className="text-[12px] font-extralight ml-2">
                                    {dataOfJessica.diagnosis_history && dataOfJessica.diagnosis_history[0].blood_pressure.systolic.levels}
                                </div>
                            </div>
                        </div>

                        <div className="ml-auto w-[200px] h-fit pt-[1rem]">
                            <div className="flex items-center">
                                <div className="h-[14px] w-[14px] bg-[#8C6FE6] rounded-full mr-2"></div>
                                <div className="">Diastolic</div>
                            </div>
                            
                            <div className="text-[22px] font-semibold my-2">
                                {dataOfJessica.diagnosis_history && dataOfJessica.diagnosis_history[0].blood_pressure.diastolic.value}
                            </div>
                            
                            <div className="flex">
                                <img src="/assets/ArrowDown.svg" alt="" />
                                <div className="text-[12px] font-extralight ml-2">
                                    {dataOfJessica.diagnosis_history && dataOfJessica.diagnosis_history[0].blood_pressure.diastolic.levels}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="h-[240px] w-[30%] bg-[#E0F3FA] rounded-xl p-4">
                        <img src="/assets/respiratory_rate.svg" alt="" className="w-[96px] h-[96px] mb-4" />
                        <div className="text-[16px]" >
                            Respiratory Rate
                        </div>
                        <div className="text-[30px] font-semibold" >
                            {dataOfJessica.diagnosis_history && dataOfJessica.diagnosis_history[0].respiratory_rate.value} bpm
                        </div>
                        <div className="text-[13px] font-light mt-3" >
                            {dataOfJessica.diagnosis_history && dataOfJessica.diagnosis_history[0].respiratory_rate.levels}
                        </div>
                    </div>

                    <div className="h-[240px] w-[30%] bg-[#FFE6E9] rounded-xl p-4">
                        <img src="/assets/temperature.svg" alt="" className="w-[96px] h-[96px] mb-4" />
                        <div className="text-[16px]" >
                            Temperature
                        </div>
                        <div className="text-[30px] font-semibold" >
                            {dataOfJessica.diagnosis_history && dataOfJessica.diagnosis_history[0].temperature.value} °F
                        </div>
                        <div className="text-[13px] font-light mt-3" >
                            {dataOfJessica.diagnosis_history && dataOfJessica.diagnosis_history[0].temperature.levels}
                        </div>
                    </div>

                    <div className="h-[240px] w-[30%] bg-[#FFE6F1] rounded-xl p-4">
                        <img src="/assets/HeartBPM.svg" alt="" className="w-[96px] h-[96px] mb-4" />
                        <div className="text-[16px]" >
                            Heart Rate
                        </div>
                        <div className="text-[30px] font-semibold" >
                            {dataOfJessica.diagnosis_history && dataOfJessica.diagnosis_history[0].heart_rate.value} bpm
                        </div>
                        <div className="text-[13px] font-light mt-3 flex" >
                            <img src="/assets/ArrowDown.svg" alt=""  className="mr-2"/>
                            {dataOfJessica.diagnosis_history && dataOfJessica.diagnosis_history[0].heart_rate.levels}
                        </div>
                    </div>
                </div>
            
            </div>

            <div className=" h-fit bg-white mx-[33px] mt-[32px] rounded-[1rem] p-[20px]" >
                <div className="text-[24px] font-semibold mb-[40px]">
                    Diagnostic List
                </div>
                <div className="p-4 bg-[#F6F7F8] rounded-[24px] flex text-[14px] font-semibold">
                    <div className="w-[230px]">Problem/Diagnosis</div>
                    <div className="">Description</div>
                    <div className="ml-[auto] w-[100px]">Status</div>
                </div>
                <div className="mt-[30px]">
                    {
                        dataOfJessica.diagnostic_list && dataOfJessica.diagnostic_list.map((el, index) => {
                            return(
                                <div key={index} className="p-4 flex text-[14px] font-light border-b">
                                    <div className="w-[230px]">{el.name}</div>
                                    <div className="">{el.description}</div>
                                    <div className="ml-[auto] w-[100px]">{el.status}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}

