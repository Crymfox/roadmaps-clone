import Container from "./Container"
import Card from "./Card"
import * as details from "./data"

const Roadmap = () => {
    return (
        <Container>
            <div className=" text-white my-9">
                <h1 className=" font-bold md:text-3xl text-[22px] mb-4">Hey there! 👋</h1>
                <p className=" mb-2 md:text-[16px] text-[14px]">
                    <span className=" font-medium">roadmap.sh</span> is a community effort to create roadmaps, guides and other educational content to help <br/>guide the developers in picking up the path and guide their learnings.
                </p>
                <p className=" md:text-[16px] text-[14px]">
                    We also have a <button className=" underline font-semibold">YouTube channel</button> which we hope you are going to love.
                </p>
            </div>
            <div className=" grid xs:grid-cols-2 md:grid-cols-3 gap-2">
                {
                    details.availableCardDetails.map((data, key) => {
                        return (
                            <Card key={key} title={data.title} content={data.content} color={data.color} />
                        )
                    })
                }
                {
                    details.upcomingCardDetails.map((data, key) => {
                        return (
                            <Card key={key} title={data.title} content={data.content} color={data.color} upcoming />
                        )
                    })
                }
            </div>
        </Container>
    )
}

export default Roadmap