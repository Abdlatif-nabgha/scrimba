
const Main = () => {
  return (
  <main className="py-16 px-8 bg-[url('/react.svg')] bg-no-repeat bg-right bg-contain ">
       
        <h2 className="text-4xl font-bold mb-5">Fun facts about React</h2>
        <ul className="list-disc list-inside mt-12 max-w-2xl">
            <li className="marker:text-[#61dafb] font-semibold">Was first released in 2013</li>
            <li className="marker:text-[#61dafb]">Was originally created by Jordan Walke</li>
            <li className="marker:text-[#61dafb]">Has well over 200K stars on GitHub</li>
            <li className="marker:text-[#61dafb]">Is maintained by Meta</li>
            <li className="marker:text-[#61dafb]">Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
  )
}

export default Main