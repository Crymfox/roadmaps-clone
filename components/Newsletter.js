import Container from "./Container"

const Newsletter = () => {
    return (
        <div className=" bg-[#0d151f]">
            <Container>
                <div className=" flex flex-col">
                    <h1 className=" md:text-[35px] text-[25px] font-bold text-[#E2E8F0] md:mt-16 mt-11">Stay Informed</h1>
                    <p className=" text-[#A0AEC0] md:text-[16px] text-[15px] font-normal my-3">Subscribe yourself to get updates, new guides, videos and roadmaps in your inbox.</p>
                    <div className=" flex md:flex-row flex-col md:gap-6 gap-5 mt-2 md:mb-20 mb-12">
                        <div>
                            <button className=" border-[#2f855a] border-2 text-[#2f855a] md:text-base text-[14px] font-semibold rounded-md py-2 px-4 hover:border-[#9ae6b4] hover:text-[#9ae6b4] duration-200 xs:w-auto w-full">Subscribe to Updates</button>
                            <p className=" text-[13px] font-normal text-[#718096] mt-1">Free subscription for updates</p>
                        </div>
                        <div>
                            <button className=" bg-[#ecc94b] md:text-base text-[14px] font-semibold rounded-md py-[10px] px-4 text-black hover:bg-[#D69E2E] duration-200 xs:w-auto w-full">Updates & Paid Content</button>
                            <p className=" text-[13px] font-normal text-[#718096] mt-1">Support the project by paying as little as <span className=" font-semibold">5$ per month</span></p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Newsletter