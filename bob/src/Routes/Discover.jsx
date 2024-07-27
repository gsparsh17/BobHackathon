import React, { useEffect, useState } from 'react';
import './Discover.css'; // Add necessary styles here
import Banner from '../Components/Banner';
import Post from '../Components/Post';
import { Sidebar } from '../Components/Sidebar';

const apikey = 'ae7ef4b6583942a3a51f8e6bc71c55e0';

export default function Discover() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apikey}`);
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
  }, [apikey]);

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
