import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";


const Blog = ({ blog ,handleAddToBookMark,handleMarkAssRead}) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`cover picture of the title ${title}`}
      />
      <div className="flex justify-between space-y-4">
        <div className="flex gap-4">
          <img className="h-14" src={author_img} alt="" />
          <div>
            <h1 className="text-2xl">{author}</h1>
            <h3 className="text-1xl">{posted_date}</h3>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button onClick={()=>handleAddToBookMark(blog)} className="ml-2 text-red-600 text-2xl">
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h1 className="text-3xl mb-6 mt-4">title: {title}</h1>
      <p>
        {hashtags.map((hash) => (
          <span key={blog.id}>
            <a href="#">{hash}</a>
          </span>
        ))}
      </p>
      <button onClick={()=>handleMarkAssRead(reading_time)}
       className="mt-4 text-purple-600 font-bold underline">mark as red</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
handleAddToBookMark:PropTypes.func
};

export default Blog;
