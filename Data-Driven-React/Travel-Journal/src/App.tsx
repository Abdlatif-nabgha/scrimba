import Entry from "./components/Entry"
import Header from "./components/Header"
import { TRAVELS } from "./constants"

const App = () => {

  const entries =  TRAVELS.map(travel => (
           <Entry
              key={travel.id} // key is a special string attribute that you need to include when creating list items. It tells React each list item is unique, helping it to keep track of each element.
             image={travel.img.src}
             country={travel.country}
             mapsUrl={travel.googleMapsLink}
             title={travel.title}
             date={travel.dates}
             description={travel.text}
           />
         ));


  return (
    <>
      <Header />
      <div className="mx-10 my-12 p-6">
        {entries}
      </div>
    </>
  )
}

export default App