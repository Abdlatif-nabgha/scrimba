
const NavBar = () => {
  return (
    <header className="h-24 bg-[#21222a] px-7 py-8">
       <nav className="flex items-center h-full">
          <img className="w-10 mr-2" src="/react.svg" alt="react logo" />
          <span className="text-[#61dafb] text-[1.4rem] text-xl font-bold">ReactFacts</span>
       </nav>
    </header>
  )
}

export default NavBar;