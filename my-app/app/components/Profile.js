export default function Profile({dataOfJessica}) {
    console.log(dataOfJessica)
    const getStringDate = (date) => {
        const newDate = new Date(date)
        return newDate.toDateString().split(" ")
    }
    // console.log(getStringDate(dataOfJessica.age).splice(1).join(" "))
    const profileDetails = [
        {
            "icon": "/assets/BirthIcon.svg",
            "label": "Data of Birth",
            "value": `${getStringDate(dataOfJessica.age).splice(1).join(" ")}`
        },
        {
            "icon": "/assets/FemaleIcon.svg",
            "label": "Gender",
            "value": `${dataOfJessica.gender}`
        },
        {
            "icon": "/assets/PhoneIcon.svg",
            "label": "Contact Info.",
            "value": `${dataOfJessica.phone_number}`
        },
        {
            "icon": "/assets/PhoneIcon.svg",
            "label": "Emergency Contacts",
            "value": `${dataOfJessica.emergency_contact}`
        },
        {
            "icon": "/assets/InsuranceIcon.svg",
            "label": "Insurance Provider",
            "value": `${dataOfJessica.insurance_type}`
        }
    ]
    
    return (
        <div className="ml-auto w-[30%]">
            <div className=" h-fit bg-white rounded-[1rem] p-5">
                <img className="w-[200px] h-[200px] mx-auto my-8" src={dataOfJessica.profile_picture} />
                <div className="flex justify-center text-[24px] font-semibold" >
                    {dataOfJessica.name}
                </div>
                <div className="my-[32px]">
                    {
                        profileDetails.map((el, index) => {
                            return (
                                <div className="flex my-6" key={index}>
                                    <img className="w-[42px] h-[42px] " src={el.icon} alt={el.label} />
                                    <div className="px-4">
                                        <div className="text-[14px] font-light">{el.label}</div>
                                        <div className="text-[14px] font-semibold">{el.value}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex justify-center">
                    <button className="bg-[#01F0D0] py-[11px] px-[40px] mb-6 rounded-[41px]">
                        Show All Information
                    </button>
                </div>
            </div>
            <div className="my-[32px] p-[20px] bg-white rounded-[1rem]">
                <div className="mb-4 text-[22px] font-semibold">
                    Lab Results
                </div>
                <div className="">
                    {
                        dataOfJessica.lab_results && dataOfJessica.lab_results.map((el, index) => {
                            return (
                                <div key={index} className={`flex justify-between items-center p-2 my-4 h-[40px] ${index % 2 ? "bg-slate-200" : ""}`}>
                                    <div className="text-[13px] font-extralight">{el}</div>
                                    <img src="/assets/download.svg" alt="" className="ml-auto w-[20px] h-[20px]" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}