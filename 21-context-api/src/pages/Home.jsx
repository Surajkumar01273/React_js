import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from '../components/Spinner';
import Pagination from '../components/Pagination';

function Home() {
  const { loading, posts } = useContext(AppContext);

  return (
    <>
    <div className='w-11/12 max-w-4xl p-4 mx-auto pb-[100px] md:my-16 flex flex-col gap-6'>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div className='text-center text-lg font-semibold'>
          <p>No Posts Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div 
            className='bg-white shadow-md rounded-lg p-4 flex flex-col gap-2' 
            key={post.id}
          >
            <p className='font-bold text-lg md:text-xl'>{post.title}</p>
            <p className='text-gray-600 text-sm md:text-base'>
              by <span className='font-semibold'>{post.author}</span> on <span className='italic'>{post.category}</span>
            </p>
            <p className='text-xs md:text-sm text-gray-500'>Posted on {post.date}</p>
            <p className='text-sm md:text-base leading-relaxed'>{post.content}</p>
            <div className='flex flex-wrap gap-2'>
              {post.tags.map((tag, index) => (
                <span
                  className='text-blue-600 text-xs md:text-sm bg-blue-100 px-2 py-1 rounded-lg' 
                  key={index}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
    <Pagination />
    </>
  );
}

export default Home;
