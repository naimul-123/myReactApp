import React, { useEffect, useState } from 'react';

const Api = (props) => {
    const {url}= props;
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const jsonData = await response.json();
                setData(jsonData.posts);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (data) {
        return (
            <div className='bg-anti-flash-white hover:bg-medium-slate-blue-10 hover:border-medium-slate-blue flex flex-col md:flex-row items-center justify-between md:items-start gap-4 p-4 lg:p-12 rounded-lg lg:rounded-3xl'>
                {data.map(post=> (
                    <div key={post.id}>
                    <div className="indicator">
                        <span className= {`indicator-item badge ${post.isActive? "bg-success" : "bg-red" }`} ></span> 
                        <div className="grid w-32 h-32 bg-white place-items-center rounded-2xl">
                         <img src={post.image} className="rounded-2xl" alt=""/>  
                        </div>
                    </div>
        <div className="space-y-3 w-full md:w-4/5">
          <div className="flex gap-3 text-pine-tree-80 font-medium font-inter text-sm">
            <p>#{post.category}</p>
            <p>Author : <span>{post.author.name}</span></p>
          </div>
          <h3 className="font-bold text-xl text-pine-tree post-title">{post.title}</h3>
          <p className="font-inter text-base text-pine-tree-60">{post.description}</p>
          <hr className="border-dashed"/> 
          <div className="flex justify-between my-7">
            <div className="flex gap-4 text-2xl">
              <p><i className="fa-regular fa-message"></i> <span>{post.comment_count}</span></p>
              <p><i className="fa-regular fa-eye"></i> <span className = "post-view-count">{post.view_count}</span></p>
              <p><i className="fa-regular fa-clock"></i> <span>{post.posted_time}</span> min</p>
            </div>
            <div className="bg-success rounded-full p-px text-white text-center w-7 h-7" >
              <button className = "postbtn">
                <i className="fa-solid fa-envelope-open"></i>
              </button>
              
            </div>
          </div>
          </div>
          
      
        
</div>
                ))}
                </div>
);
}
}

export default Api;