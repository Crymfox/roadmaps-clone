import Navbar from '../components/Navbar'
import Roadmap from '../components/Roadmap'
import Videos from '../components/Videos'
import Guides from '../components/Guides'
import Credits from '../components/Credits'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import ShowMenu from '../components/ShowMenu'
import { useState } from 'react'

export default function Home() {
  const [state, setState] = useState("invisible")
  return (
    <div>
      <ShowMenu options={() => setState(" invisible")} status={state} />
      <div className="bg-[#06020c] relative z-0 pb-20">
        <div className=' absolute w-full -z-10'><div className={` -top-30 blur-[100px] mx-auto rounded-full md:h-96 h-[320px] md:w-96 w-[320px] bg-[radial-gradient(var(--tw-gradient-stops))] from-cyan-400/30 via-cyan-200/10 to-transparent`}></div></div>
        <main className="top-0 w-full z-10">
          <Navbar options={() => setState(" z-50")}/>
          <Roadmap/>
        </main>
      </div>
      <Videos/>
      <Guides/>
      <div className={` mt-24 md:mb-16 mb-12 bg-gray-200 w-full h-[1px]`}></div>
      <Credits/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}