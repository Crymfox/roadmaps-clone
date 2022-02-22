import Container from "./Container"
import * as details from "./data"
import Link from "./Link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const Videos = () => {
    return (
        <Container>
            <div className=" relative">
                <h1 className=" text-[#38a169] text-[25px] font-bold mt-14 mb-7">Video Explanations</h1>
                {
                    details.videoLinkDetails.map((data, key) => {
                        return (
                            <Link key={key} title={data.title} date={data.date} division={data.division} watch />
                        )
                    })
                }
                <div className=" grid place-items-center mt-[15px]">
                    <div className=" absolute bottom-0 z-10">
                        <button className=" px-5 py-[7px] bg-[#2f855a] text-white text-[11px] rounded-2xl grid relative">
                            <h1 className=" font-extrabold pr-3">VIEW ALL VIDEOS</h1>
                            <div className=" hover:translate-x-1 duration-200 absolute w-full h-full grid place-items-end rounded-2xl">
                                <FontAwesomeIcon icon={faLongArrowAltRight} className=" font-thin mb-[9px] mr-4" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Videos