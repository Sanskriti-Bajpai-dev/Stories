import React, { useEffect, useState } from "react";
import getBlogs from "../../utils/getBlogs";
import BlogCard from "../../Components/Blog-cards/blogs-card.component";
import SearchBar from "../../Components/Search-bar/search-bar.component";
import BlogView from "../../Components/Blog-view/blog-view.component";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogData, setBlogData] = useState(null);
  const [searchField, setSearchField] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const callGetBlogs = async () => {
      const data = await getBlogs(page);
    //   console.log(data);
      setBlogs([...blogs, ...data.data.data]);
    };

    callGetBlogs();
  }, []);

  useEffect(() => {
    // console.log(page)
    const callGetBlogs = async () => {
        const data = await getBlogs(page);
        // console.log(data);
        setBlogs([...data.data.data]);
      };
      setSearchField("")
      callGetBlogs();
  }, [page])

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleNext = () => {
    setPage(prev => prev + 1)
  }

  const handlePrevious = () => {
    setPage(prev => prev - 1)
  }

  // useEffect(() => {
  //     console.log(blogs);
  // }, [blogs])

  // useEffect(() => {
  //     console.log(blogData);
  // }, [blogData])

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="w-screen min-w-[1300px] bg-[#F8F8F8] flex flex-col items-center justify-around pb-5">
      {blogData && <BlogView blogData={blogData} setBlogData={setBlogData} />}
      <div className="min-w-[1200px] mb-9 mt-9 h-1/3 flex">
        <div className="w-1/2 flex justify-between items-center">
          <div className="w-[118px] h-[30px] font-quicksand font-semibold text-2xl">
            All articles
          </div>
        </div>
        <div className="min-w-[900px] flex justify-end items-center">
          <SearchBar handleChange={handleChange} searchField={searchField}/>
        </div>
      </div>
      <div className="min-w-[1250px] border-black gap-4 max-h-[752px] grid grid-cols-3 overflow-y-scroll">
        {filteredBlogs.map((blog, index) => (
          <BlogCard
            title={blog.title}
            desc={blog.short_description}
            thumb={blog.thumb}
            slug={blog.slug}
            key = {index}
            setBlogData={setBlogData}
          />
        ))}
      </div>
      <div className="mt-4 flex">
        {page > 1 && <span
        onClick={handlePrevious}
          className="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          Previous
        </span>}
        <span
          onClick={handleNext}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
          <svg
            aria-hidden="true"
            className="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default HomePage;