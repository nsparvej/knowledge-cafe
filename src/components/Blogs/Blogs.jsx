import { useEffect, useState } from "react";
import Blog from "../blog/Blog";

// eslint-disable-next-line react/prop-types
const Blogs = ({handleAddToBookMark,handleMarkAssRead}) => {
  const [blogs, setBlog] = useState([]);
   
  useEffect(() => {
    fetch("/public/Blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  return (
    <div className="md: w-2/3">
      <h1>Blogs: {blogs.length}</h1>

     {
        blogs.map(blog => <Blog handleAddToBookMark={handleAddToBookMark} handleMarkAssRead={handleMarkAssRead} blog={blog} key={blog.id}></Blog>)
     }
    </div>
  );
};

export default Blogs;
