import Image from "next/image";


const NewsDetails = async({params}:{params:{newsId: string}}) => {
    const {newsId} = await params

   const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`)

   const data = await res.json()
   const news = data.data    
//    console.log(data, "From dynamic");
//    console.log(news);

//    const publishedDate = new Date(news.firstPublished)
    return (
        <div className="justify-between items-center">
            <h1 className="font-bold text-2xl mb-4 mt-2">{news?.title}</h1>
            {/* <time dateTime={news.firstPublished}>
                {publishedDate.toLocaleDateString("bn-BD",{
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                })

                }
            </time> */}
            <Image
            height={600}
            width={600}
            src={news?.imageUrl}
            alt={news?.imageAlt || "news image"} 
            />

            <p >{news?.text}</p>
        </div>
    );
};

export default NewsDetails;