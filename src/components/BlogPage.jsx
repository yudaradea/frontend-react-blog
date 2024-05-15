import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `https://backend-blog-maleskerja.netlify.app/.netlify/functions/api/blogs`;

      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }
    fetchBlogs();
  }, []);

  return (
    <div>
      {/* Category Sections */}
      <div>Page Category</div>

      {/* Content blogs sections */}
      <div>
        <BlogCard blogs={blogs} />
      </div>

      {/* Pagination */}
      <div>Pagination</div>
    </div>
  );
};

export default BlogPage;
