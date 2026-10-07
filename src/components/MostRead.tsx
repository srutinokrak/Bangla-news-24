
interface MostReadNews {
    id:string
    title:string
   
}

const MostRead = async() => {
   const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read')
   const data = await res.json()

 const news:MostReadNews[] = data.data
   console.log(news);   
    return (
        <div className="card p-4 bg-base-100
        border  border-gray-300">
            <h1 className='font-bold text-2xl text-red-700 mb-4'>সর্বাধিক পঠিত</h1>

            <div className="grid gap-2 mt-2">
                {news.map((n , i)=> <div className ="flex gap-3 items-center  " key={n.id}> 
                   <p className="font-bold text-2xl text-red-700" >{i+1}</p> <h2 className="hover:text-red-700">{n.title}</h2>
                </div>)}
            </div>
        </div>
    );
};

export default MostRead;