const Card = ({title, content, color, upcoming}) => {
    if (upcoming) return (
        <div className="rounded-xl bg-zinc-900/20 hover:bg-zinc-900/40 duration-200 m-1 relative">
            <div className="p-4">
                <h1 className={` md:text-[22px] text-[17px] ${color} font-bold pb-2`}>{title}</h1>
                <p className=" text-white/50 font-normal text-[13px]">{content}</p>
            </div>
            <button className="absolute top-0 w-full h-full grid place-items-center rounded-xl">
                <div className=" text-white font-semibold bg-gray-600 px-[10px] py-[5px] rounded-xl">Upcoming</div>
            </button>
        </div>
    )
    return (
        <div className=" rounded-xl bg-white/5 hover:bg-white/10 duration-200 m-1 relative">
            <div className=" p-4">
                <h1 className={` md:text-[22px] text-[17px] ${color} font-bold pb-2`}>{title}</h1>
                <p className="text-white font-normal text-[13px]">{content}</p>
            </div>
            <button className=" top-0 w-full h-full absolute rounded-xl"></button>
        </div>
    )
}

export default Card