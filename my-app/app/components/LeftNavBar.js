export default function LeftNavBar({apiResult}) {

    return (
        <div className="mr-auto w-[30%] bg-white rounded-[1rem] p-[20px]">
            <div className="flex">
                <div className="text-[22px] mr-auto font-semibold">Patients</div>
                <img className="ml-auto" src="/assets/search.svg" alt=""  />
            </div>
            <div>
                {
                    apiResult && apiResult.map((el, index) => {
                        return (
                            <div key={index} className={`flex items-center ${el.name == "Jessica Taylor" ? "bg-[#D8FCF7] h-[75px] px-1" : "my-[20px]"}`}>
                                <div className="mr-auto flex">
                                    <img className="w-[48px] h-[48px] rounded-full" src={el.profile_picture} alt="" />
                                    <div className="mx-[12px]">
                                        <div className="text-[14px] font-semibold">{el.name}</div>
                                        <div className="flex">
                                            <div className="text-[12px] font-extralight">{el.gender},</div>
                                            <div className="ml-1 text-[12px] font-extralight">{el.age}</div>
                                        </div>
                                    </div>
                                </div>
                                <img src="/assets/rotateDots.svg" alt="" className="ml-auto" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}