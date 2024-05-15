import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogCard = ({ blogs }) => {
  const filteredBLogs = blogs;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
      {filteredBLogs.map((blog, index) => (
        <Link key={index} className="bg-white shadow-md pb-6 rounded-t-xl flex flex-col gap-4">
          <div>
            <img src={blog.image} alt="" className="w-full rounded-t-xl" />
          </div>
          <div className="px-2 flex flex-col gap-6 grow  ">
            <div className="flex justify-between items-center text-xs">
              <p>{blog.published_date}</p>
              <p className="flex gap-1 items-center">
                <FaUser /> {blog.author}
              </p>
            </div>
            <div className="">
              <h3 className="text-xs md:text-[14px] font-semibold hover:text-orange-500 hover:underline">{blog.title}</h3>
            </div>
            <div className="text-[11px] leading-relaxed">
              <p>{blog.content}</p>
            </div>
            <div className="grow flex items-end">
              <p className="text-xs py-1 px-2 bg-orange-500 rounded-md text-white">{blog.category}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
