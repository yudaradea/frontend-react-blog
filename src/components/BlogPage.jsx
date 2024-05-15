import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pagesSize = 12; //blog per pages
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `https://backend-blog-maleskerja.netlify.app/.netlify/functions/api/blogs?pages=${currentPage}&limit=${pagesSize}`;

      // filter by category
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }
    fetchBlogs();
  }, [currentPage, pagesSize, selectedCategory]);

  // Page Changing
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // page category
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div>
      {/* Category Sections */}
      <div>Page Category</div>

      {/* Content blogs sections */}
      <div>
        <BlogCard
          blogs={blogs}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          pagesSize={pagesSize}
        />
      </div>

      {/* Pagination */}
      <div>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          blogs={blogs}
          pagesSize={pagesSize}
        />
      </div>
    </div>
  );
};

export default BlogPage;
