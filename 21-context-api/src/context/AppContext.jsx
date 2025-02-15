import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

// setp 1

export const AppContext = createContext();

function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);


    //Fetch  blog data

    async function fetchBlogPosts(page = 1, tag=null, category){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`
        };
        if(category){
            url += `&category=${category}`
        }
        
        
        try{
            const result = await fetch(url);
            const data = await result.json();
            setPage(data.page);
            setPosts(data.posts);
            setTotalPage(data.totalPages);
            

        }
        catch(error){
            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPage(null);
            

        }
        setLoading(false)
    }

    // Handle nex and previous button are ckicked.

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }


    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPage,
        setTotalPage,
        fetchBlogPosts,
        handlePageChange
    }

    // step2

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;

