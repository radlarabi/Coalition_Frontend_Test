
import {topNavLinks} from '@/app/constants';

export default function TopNabBar() {
    return (
        <div className="flex h-[73px] m-[18px] bg-white rounded-[70px] font-robot font-semibold">
            <div className="logo mr-auto flex justify-center items-center h-full ml-[30px]" > 
                <img className='h-[48px] w-[210px]' src="/assets/logo.svg" alt=""  />                
            </div>

            <div className="topNavLinks flex justify-center items-center h-[63px] w-[662px]">
                {
                    topNavLinks.map((el, index) => (
                        <div key={index} className={`topNavLinks__item  flex items-center w-full  h-full `}>
                            < div className={`flex items-center h-[40px] w-[120px] justify-center  ${el.name == "Patients" ? "bg-[#01F0D0] rounded-[41px]" : ""}`}>
                                <img className='h-[17px] mr-[9px]' src={el.icon} alt=""  />
                                <div className='text-[14px]'>{el.name}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
            
            <div className='profile ml-auto flex justify-center items-center '>
                <img className='h-[44px] w-[44px]' src='/assets/senior-woman.png' alt=""  />
                <div className='text-[14px] mx-2'>
                    <div className=''>Dr. Jose Simmons</div>
                    <div className='font-thin'>General Practitioner</div>
                </div>
                <div className='flex h-[44px] items-center mx-[0.5rem] px-[0.5rem] border-l-[1px]'>
                    <img className='h-[20px] w-[20px]' src='/assets/settings.svg' alt=""  />
                    <img className='h-[20px] w-[20px]' src='/assets/dots.svg' alt=""  />
                </div>
            </div>
        </div>
    )
}