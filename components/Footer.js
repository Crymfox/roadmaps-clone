import Container from "./Container"

const Footer = () => {
    return (
        <div className=" bg-[#06020c]">
            <Container>
                <div className=" flex">
                    <div className=" flex md:flex-row flex-col text-base text-[#a0aec0] md:gap-8 gap-2 mb-10 md:mt-10 mt-8 md:w-auto w-full">
                        <button className=" hover:text-white duration-200 font-semibold flex justify-start">Roadmaps</button>
                        <div className={` bg-[#222529] md:w-0 w-full md:absolute md:invisible h-[0.25px]`}></div>
                        <button className=" hover:text-white duration-200 font-semibold flex justify-start">Guides</button>
                        <div className={` bg-[#222529] md:w-0 w-full md:absolute md:invisible h-[0.25px]`}></div>
                        <button className=" hover:text-white duration-200 font-semibold flex justify-start">Videos</button>
                        <div className={` bg-[#222529] md:w-0 w-full md:absolute md:invisible h-[0.25px]`}></div>
                        <button className=" hover:text-white duration-200 font-semibold flex justify-start">About</button>
                        <div className={` bg-[#222529] md:w-0 w-full md:absolute md:invisible h-[0.25px]`}></div>
                        <button className=" hover:text-white duration-200 font-semibold flex justify-start">YouTube</button>
                    </div>
                </div>
                <div className=" flex gap-2">
                    <button className=" flex font-semibold text-base text-[#a0aec0] gap-2 hover:text-white duration-200">
                        <svg width="25" height="25" viewBox="0 0 283 283" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 39C0 17.46 17.46 0 39 0h205c21.539 0 39 17.46 39 39v205c0 21.539-17.461 39-39 39H39c-21.54 0-39-17.461-39-39V39Z" fill="black"></path><path fill="white" d="M121.215 210.72c-1.867.56-4.854 1.12-8.96 1.68-3.92.56-8.027.84-12.32.84-4.107 0-7.84-.28-11.2-.84-3.174-.56-5.88-1.68-8.12-3.36-2.24-1.68-4.014-3.92-5.32-6.72-1.12-2.987-1.68-6.813-1.68-11.48v-84c0-4.293.746-7.933 2.24-10.92 1.68-3.173 4.013-5.973 7-8.4 2.986-2.427 6.626-4.573 10.92-6.44 4.48-2.053 9.24-3.827 14.28-5.32a106.176 106.176 0 0 1 15.68-3.36 95.412 95.412 0 0 1 16.24-1.4c8.96 0 16.053 1.773 21.28 5.32 5.226 3.36 7.84 8.96 7.84 16.8 0 2.613-.374 5.227-1.12 7.84-.747 2.427-1.68 4.667-2.8 6.72-3.92 0-7.934.187-12.04.56-4.107.373-8.12.933-12.04 1.68-3.92.747-7.654 1.587-11.2 2.52-3.36.747-6.254 1.68-8.68 2.8v95.48Zm45.172-22.4c0-7.84 2.426-14.373 7.28-19.6 4.853-5.227 11.48-7.84 19.88-7.84 8.4 0 15.026 2.613 19.88 7.84 4.853 5.227 7.28 11.76 7.28 19.6 0 7.84-2.427 14.373-7.28 19.6-4.854 5.227-11.48 7.84-19.88 7.84-8.4 0-15.027-2.613-19.88-7.84-4.854-5.227-7.28-11.76-7.28-19.6Z"></path></svg>
                        roadmap.sh
                    </button>
                    <span className=" text-[#a0aec0] font-normal text-base">cloned by</span>
                    <button className=" text-[13px] font-semibold text-white bg-[#3182ce] hover:bg-[#2b6cb0] duration-150 py-[2px] px-[6px] rounded-[4px]">@crymfox</button>
                </div>
                <p className=" text-[14px] font-normal text-[#718096] py-4 fp:w-[500px] w-auto">Community created roadmaps, articles, resources and journeys to help you choose your path and grow in your career.</p>
                <div className=" flex text-[14px] text-[#718096] gap-3 md:pb-20 pb-16">
                    <span>© roadmap.sh</span>·
                    <button className=" text-[#a0aec0] font-normal hover:text-white duration-200">FAQs</button>·
                    <button className=" text-[#a0aec0] font-normal hover:text-white duration-200">Terms</button>·
                    <button className=" text-[#a0aec0] font-normal hover:text-white duration-200">Privacy</button>
                </div>
            </Container>
        </div>
    )
}

export default Footer