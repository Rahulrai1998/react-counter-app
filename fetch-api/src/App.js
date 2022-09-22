import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Pagination from "./components/pagination";

function App() {
  const [data, setData] = useState([]);
  const [currentPage , setCurrentPage] = useState(1)
  const [postsPerPage , setPostsPerPage] = useState(15)

  const fetchAPI = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  useEffect(() => {
    fetchAPI();
  }, []);


  const indexOfLastPost = currentPage*postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost,indexOfLastPost)


  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <div>
      {/* <button onClick={fetchAPI}>click</button> */}
      {/* <br/>
      {JSON.stringify(data)} */}


      

      <ul>
        {currentPosts.map(item => (
          <li  className="list">{item.name}</li>
        ))}
      </ul>
      <Pagination  postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/>
    </div>
  );
}

export default App;
