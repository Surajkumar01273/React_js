import { useContext, useEffect } from 'react';
import Routercom from './header/Router';
// import Pagination from './components/Pagination';
import { AppContext } from './context/AppContext';

function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <>
      <div className='w-full h-screen'>
        <Routercom />
          {/* <Pagination /> */}
      </div>
    </>
  );
}

export default App;
