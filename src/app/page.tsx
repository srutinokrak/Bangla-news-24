import MainNews from "@/components/MainNews";

import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";


interface IOtherSection{
  curationId: string
  title: string
  articles: {
    id: string
    title: string
    description: string
    category: string
    imageUrl: string
    imageAlt: string
  }[]
};

export default async function Home() {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections')
  const data = await res.json()
  const sections = data.data
  const mainNews = sections[0].articles
  
  const otherSections: IOtherSection[] = sections.slice(1)
  // console.log(otherSections);
 
  return (
    <div >
      

      <div className = "grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5">

        {/* news section */}
        <div className=" col-span-1 md:col-span-2">
          <MainNews news={mainNews}/>

          <div className="grid gap-5 mt-8">
            {otherSections.map(os=> <div className="" key={os.curationId}>
             <h1 className="text-xl font-bold border-b-2 pb-1 border-red-700">{os.title}</h1>
             
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 ">
               {
               os.articles.map(news => 
               <NewsCard key={news.id} news={news}/>)
             }
          </div>
             
             </div>)}
          </div>
        </div>

        {/* most read section */}
        <div className=" col-span-1 ">

          <MostRead />
        </div>
      </div>
    </div>
  );
}
