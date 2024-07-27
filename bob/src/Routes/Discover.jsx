import React, { useEffect, useState } from 'react';
import './Discover.css'; // Add necessary styles here
import Banner from '../Components/Banner';
import Post from '../Components/Post';
import { Sidebar } from '../Components/Sidebar';

export default function Discover() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ae7ef4b6583942a3a51f8e6bc71c55e0`);
        const data = await response.json();
        if (data.articles) {
          setArticles(data.articles);
        } else {
          throw new Error('No articles found');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className='mt-20 bg-orange-50'>
      <Banner />
      <div className='px-8'>
        <div className='w-full bg-white text-center p-12 shadow-xl'>
          <h1 className='text-2xl text-red-500 font-serif'>Today's Investment Tip</h1>
          <p className='mt-4'>Consider diversifying your investments based on recent market trends.</p>
        </div>
        <div className="flex mt-8">
          <Sidebar />
          <div className='grid grid-cols-3 gap-12 p-20 bg-orange-50 w-screen'>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && articles.length > 0 && (
              articles.slice(0, 9).map((article, index) => (
                <div key={index} className="post-container min-h-[200px]"> {/* Adjust min-h value as needed */}
                  <Post
                    content={{
                      department: article.source.name,
                      title: article.title,
                      author: article.author || "Unknown Author",
                      designation: "News",
                      // info: article.description || "No description available.",
                    }}
                  />
                </div>
              ))
            )}
            {!loading && !error && articles.length === 0 && (
              <p>No articles available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}




// import './Discover.css';
// import Banner from '../Components/Banner';
// import Post from '../Components/Post';
// import { Sidebar } from '../Components/Sidebar';
// export default function Discover() {
 
//     // Adding Dummy Data to pass as props
//     const postData = [
//         {
//             department: "Web Tech",
//             title: "Top 7 JavaScript One liners",
//             author: "Amit Singh",
//             designation: "TCE",
//             info: `This post tells you about best approaches 
//                    to write single line codes in JavaScript. 
//                    Use this post as a quick guide to 
//                      short but important JS codes`,
//         },
//         {
//             department: "DSA",
//             title: "Top Interview DSA Questions",
//             author: "Jatin Sharma",
//             designation: "TCE",
//             info: `No need to worry about technical round interviews 
//                    as this post will guide you step by step to 
//                    prepare for DSA round`,
//         },
//         {
//             department: "Cotent",
//             title: "Best Antiviruses of 2023",
//             author: "Shobhit Sharma",
//             designation: "TCE",
//             info: `Worried about your PC safety? No Problem, 
//                    this post tells you about the best antiviruses 
//                    to choose in 2023`,
//         },
//         {
//             department: "Web Tech",
//             title: "Top 7 JavaScript One liners",
//             author: "Amit Singh",
//             designation: "TCE",
//             info: `This post tells you about best approaches 
//                    to write single line codes in JavaScript. 
//                    Use this post as a quick guide to 
//                      short but important JS codes`,
//         },
//         {
//             department: "DSA",
//             title: "Top Interview DSA Questions",
//             author: "Jatin Sharma",
//             designation: "TCE",
//             info: `No need to worry about technical round interviews 
//                    as this post will guide you step by step to 
//                    prepare for DSA round`,
//         },
//         {
//             department: "Cotent",
//             title: "Best Antiviruses of 2023",
//             author: "Shobhit Sharma",
//             designation: "TCE",
//             info: `Worried about your PC safety? No Problem, 
//                    this post tells you about the best antiviruses 
//                    to choose in 2023`,
//         }
//     ]
//     return (
//         <div className='mt-20 bg-orange-50'>
//             <Banner />
//             <div className='px-8'>
//             <div className='w-full bg-white text-center p-12 shadow-xl'>
//                 <h1 className='text-2xl text-red-500 font-serif'>Today's Investment Tip</h1>
//                 <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aliquam eum vitae a doloremque sequi fuga architecto sit reiciendis incidunt obcaecati possimus necessitatibus, doloribus hic nostrum non recusandae repellendus dolore.</p>
//             </div>
//             <div className="flex mt-8">
//             <Sidebar/>
            
//             <div className='grid grid-cols-3 gap-12 p-20 bg-orange-50 w-screen'>
//                 {postData.map((e) => {
//                     return <Post content={e} />
//                 })}
//             </div>
//             </div>
//             </div>
//         </div>
//     )
// }