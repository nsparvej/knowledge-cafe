import Header from "./components/Header/Header"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import { useState } from "react"



function App() {
  
  
  const [bookMarks,setBookMark] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookMark = blog => {
    const newBookMarks = [...bookMarks,blog]
    setBookMark(newBookMarks);
  }

  const handleMarkAssRead = time => {

    setReadingTime(parseInt(readingTime) + parseInt(time))
  }

  return (
    <>
      
      
      <Header></Header>
       <div className="md: flex max-w-7xl mx-auto">
       <Blogs handleAddToBookMark={handleAddToBookMark} handleMarkAssRead={handleMarkAssRead}></Blogs>
       <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>
       </div>
    </>
  )
}

export default App
