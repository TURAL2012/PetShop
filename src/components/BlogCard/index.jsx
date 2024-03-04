import React from 'react'

const BlogCard = ({blog}) => {
  return (
 <>
 <div className="col-12">
    <div className="blog-box">
        <img src={blog.image} alt="" />
        <h1>{blog.title}</h1>
        <p>{blog.description}</p>
        <a href="#" style={{textDecoration: "none", color: "#F04336"}}>Read More <i className="fa-solid fa-paw fa-rotate-90" style={{color: "#F04336"}}></i></a>
    </div>
 </div>
 
 </>
    )
}

export default BlogCard