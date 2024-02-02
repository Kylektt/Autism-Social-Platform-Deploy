import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from "graphql-request";
import BlogContent from "../components/Blog/BlogContent";
import NavBar from "../components/NavBar";
import WhiteFooter from "../components/WhiteFooter";

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
