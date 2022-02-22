import Container from "./Container"

const Navbar = ({options}) => {
  return (
    <Container>  
      <nav className=" text-white flex items-center py-4 gap-4">
        <button className="mr-auto font-semibold text-lg flex gap-2">
          <svg width="32" height="32" viewBox="0 0 283 283" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 39C0 17.46 17.46 0 39 0h205c21.539 0 39 17.46 39 39v205c0 21.539-17.461 39-39 39H39c-21.54 0-39-17.461-39-39V39Z" fill="black"></path><path fill="white" d="M121.215 210.72c-1.867.56-4.854 1.12-8.96 1.68-3.92.56-8.027.84-12.32.84-4.107 0-7.84-.28-11.2-.84-3.174-.56-5.88-1.68-8.12-3.36-2.24-1.68-4.014-3.92-5.32-6.72-1.12-2.987-1.68-6.813-1.68-11.48v-84c0-4.293.746-7.933 2.24-10.92 1.68-3.173 4.013-5.973 7-8.4 2.986-2.427 6.626-4.573 10.92-6.44 4.48-2.053 9.24-3.827 14.28-5.32a106.176 106.176 0 0 1 15.68-3.36 95.412 95.412 0 0 1 16.24-1.4c8.96 0 16.053 1.773 21.28 5.32 5.226 3.36 7.84 8.96 7.84 16.8 0 2.613-.374 5.227-1.12 7.84-.747 2.427-1.68 4.667-2.8 6.72-3.92 0-7.934.187-12.04.56-4.107.373-8.12.933-12.04 1.68-3.92.747-7.654 1.587-11.2 2.52-3.36.747-6.254 1.68-8.68 2.8v95.48Zm45.172-22.4c0-7.84 2.426-14.373 7.28-19.6 4.853-5.227 11.48-7.84 19.88-7.84 8.4 0 15.026 2.613 19.88 7.84 4.853 5.227 7.28 11.76 7.28 19.6 0 7.84-2.427 14.373-7.28 19.6-4.854 5.227-11.48 7.84-19.88 7.84-8.4 0-15.027-2.613-19.88-7.84-4.854-5.227-7.28-11.76-7.28-19.6Z"></path></svg>
          <span className=" pt-[2px] md:relative md:visible xs:absolute xs:invisible visible relative">roadmap.sh</span>
        </button>
        <button className=" navLink">Roadmaps</button>
        <button className=" navLink">Guides</button>
        <button className=" navLink">Videos</button>
        <button className=" navLink">Thanks</button>
        <button className=" bg-gradient-to-l px-3 py-1 hover:bg-gradient-to-r rounded ml-2 from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 navLink">Subscribe</button>
        <button onClick={options} className={` xs:-z-50 xs:absolute xs:invisible z-0 relative visible`}><svg viewBox="0 0 24 24" focusable="false" className=" w-7 h-7" aria-hidden="true"><path fill="currentColor" d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path></svg></button>
      </nav>
    </Container>
  )
}

export default Navbar
