

const Entry = ( { image, country, mapsUrl, title, date, description }: 
    {image: string, country: string, mapsUrl: string, title: string, date: string, description: string} 
                ) => {
  return (
    <article className="flex gap-4 py-6 border-b border-[#E5E5E5]">
        <div className="w-40 h-56 object-cover ">
            <img className="h-full w-full object-cover rounded-md" src={image} alt={country} />
        </div>
       <div className="">
            <div className="flex items-center gap-2 text-sm uppercase tracking-wide">
                <img className="w-2" src="/location.png" alt="location icon" />
                <span className="uppercase font-bold text-xs">{country}</span>
                <a className="underline text-gray-500  visited:text-[#918E9B]" href={mapsUrl}>
             View on Google Maps
            </a>
            </div>
            <h2 className="mt-2 mb-4 text-2xl font-bold">{title}</h2>
            <p className="font-bold text-sm mb-2 mt-2">{date}</p>
            <p className="leading-6 text-sm multiline-clamp-3 max-w-[60ch]">{description}
            </p>
       </div>
    </article>
  )
}

export default Entry