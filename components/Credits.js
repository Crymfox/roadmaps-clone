import Container from "./Container"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Credits = () => {
    return (
        <Container>
            <div className=" flex flex-col md:mb-24 mb-16">
                <h1 className=" md:text-[35px] text-[25px] font-bold text-[#1a202c] mx-auto">Open Source</h1>
                <p className=" md:text-base text-[15px] text-center font-normal text-[#1a202c] my-4">The project is OpenSource, <button className=" border-b-[1px] font-semibold">6th most starred project on GitHub</button> and is visited by hundreds of thousands of developers every month.</p>
                <div className=" flex mx-auto my-1 relative">
                    <button className=" font-bold text-base py-[3px] pr-[10px] pl-[8px] border-[1px] border-[#d5d5d5] rounded-[4px] text-[#333] bg-gradient-to-b from-[#fcfcfc] to-[#eee] hover:from-[#eee] hover:to-[#e0e0e0]">
                        <FontAwesomeIcon icon={ faGithub }/>
                        <span className=" pl-1">Star</span>
                    </button>
                    <div className=" w-2 overflow-hidden inline-block mt-[10px] ml-[70.5px] absolute">
                        <div className=" h-3 bg-[#fafafa] border-[1px] border-[#d4d4d4] -rotate-45 transform origin-top-right"></div>
                    </div>
                    <button className=" py-[3px] pr-[10px] pl-[8px] ml-2 font-bold text-base text-[#333] rounded-[4px] border-[1px] border-[#d4d4d4] bg-[#fafafa] hover:text-[#0366d6]">
                        184,283
                    </button>
                </div>
                <p className=" md:text-base text-[15px] text-center font-normal text-[#1a202c] mt-7 mb-4">
                A considerable amount of my time is spent doing unpaid community work on things that I hope will help humanity in some way. Your sponsorship helps me continue to produce more open-source and free educational material consumed by hundreds of thousands of developers every month.
                </p>
                <button className=" mx-auto font-bold text-base py-[3px] pr-[10px] pl-[8px] border-[1px] border-[#d5d5d5] rounded-[4px] text-[#333] bg-gradient-to-b from-[#fcfcfc] to-[#eee] hover:from-[#eee] hover:to-[#e0e0e0]">
                    <FontAwesomeIcon icon={ faGithub }/>
                    <span className=" pl-1">Sponsor @kamranahmedse</span>
                </button>
            </div>
        </Container>
    )
}

export default Credits