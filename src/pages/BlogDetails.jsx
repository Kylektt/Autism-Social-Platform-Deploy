import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogContent from "../components/Blog/BlogContent";
import WhiteFooter from "../components/WhiteFooter";
import NavBar from "../components/NavBar"; 
// import { request } from "graphql-request";

const BlogDetails = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  console.log(slug);

  return (
    <>
      <NavBar />
      <BlogContent />
      <WhiteFooter />
    </>
  );
};

export default BlogDetails;
