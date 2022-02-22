const ShowMenu = ({options, status}) => {
    return (
        <div className={`fixed w-full h-full bg-[#171923] ${status}`}>
            <div className=" flex justify-end">
                <button onClick={options} className=" w-5 h-5 mr-5 mt-8 text-white">
                        <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path fill="currentColor" d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"></path></svg>
                </button>
            </div>
            <div className=" h-full grid place-items-center">
            <div className=" text-white grid place-items-center gap-6 mb-16 text-xl static">
                <button className=" hover:underline">Roadmaps</button>
                <button className=" hover:underline">Guides</button>
                <button className=" hover:underline">Videos</button>
                <button className=" hover:underline">Thanks</button>
                <button className=" hover:underline">Subscribe</button>
            </div>
            </div>
      </div>
    )
}

export default ShowMenu