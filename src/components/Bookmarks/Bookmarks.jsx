import BookMark from "../BookMark/BookMark";


const Bookmarks = ({bookMarks,readingTime}) => {
    return (
        <div className="md: w-1/3 bg-gray-300  ml-4 mt-2">
            <div>
                <h3 className="text-4xl text-center">ReadingTime: {readingTime}</h3>
            </div>
            <h1 className="text-3xl text-center ">bookmarked Blogs: {bookMarks.length}</h1>
            {
                bookMarks.map(bookmark => <BookMark key={bookMarks.id} bookmark ={bookmark}></BookMark>)
            }
        </div>
    );
};

export default Bookmarks;