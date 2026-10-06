import Image from "next/image";


const MainNews = ({news}) => {
    const firstNews = news[0]
    
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image 
    height={600}
    width={600}
      src={firstNews.imageUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstNews.title}</h2>
   <p>{firstNews.description}</p>
   
  </div>
</div>
        </div>
    );
};

export default MainNews;