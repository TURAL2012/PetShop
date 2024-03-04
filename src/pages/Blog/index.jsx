import React from "react";
import Banner from "../../components/Banner";
import {blogs} from "../../data/Data"
import BlogCard from "../../components/BlogCard";
import './style.scss'

const Blog = () => {
  return (
    <>
      <Banner
        title="Blog"
        bg="https://pawfriends.qodeinteractive.com/wp-content/uploads/2019/08/title-area-blog-img.jpg"
      />
      <section className="blogsection">
        <div className="container">
          <div className="row">
            {blogs.map((item)=>{
              return <BlogCard blog={item}/>
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
