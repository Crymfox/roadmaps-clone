const Link = ({title, date, division, watch}) => {
    if (watch) return (
        <>
            <div className=" flex relative">
                <div className={`hover:translate-x-3 duration-200 flex z-10 w-full text-[#4a5568]/100 hover:text-[#4299e1]/100`}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className={` mr-[7px] w-[18px] h-[18px] text-[#9c9c9c]/100 mt-[2px]`}><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 20.007V3.993zm7.622 4.422a.4.4 0 0 0-.622.332v6.506a.4.4 0 0 0 .622.332l4.879-3.252a.4.4 0 0 0 0-.666l-4.88-3.252z"></path></g></svg>
                    <h1 className={` font-medium md:text-[15px] text-[14px] duration-100 w-full`}>{title}</h1>
                    <button className=" top-0 w-full h-full absolute"></button>
                </div>
                <div className=" grid justify-items-end absolute w-full xs:visible invisible">
                    <h1 className={` font-medium md:text-xs text-[11px] text-[#718096]/100 ml-auto mt-[3px]`}>{date}</h1>
                </div>
            </div>
            <div className={` my-2 bg-gray-200/100 w-full h-[0.25px]`}></div>
        </>
    )
    
    return (
        <>
            <div className=" flex xs:flex-row flex-col cursor-pointer relative">
                <div className={`hover:translate-x-3 duration-200 flex z-10 w-full xs:pb-0 pb-6 text-[#4a5568]/100 hover:text-[#4299e1]/100`}>
                    <h1 className={` font-medium md:text-[15px] text-[14px] duration-100 w-full`}>{title}</h1>
                    <button className=" top-0 w-full h-full absolute"></button>
                </div>
                <div className=" xs:grid xs:justify-items-end absolute w-full">
                    <h1 className={` font-medium md:text-xs text-[11px] text-[#718096]/100 ml-auto mt-6 xs:mt-[3px]`}>{date}</h1>
                </div>
            </div>
            <div className={` my-2 bg-gray-200/100 w-full h-[0.25px]`}></div>
        </>
    )
}

export default Link