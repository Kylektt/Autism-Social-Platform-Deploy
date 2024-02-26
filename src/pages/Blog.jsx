import React from "react";
import BlogPageSection from "../components/Blog/BlogPageSection";
import WhiteFooter from "../components/WhiteFooter";
import NavBar from "../components/NavBar"; 

function Blog() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-between h-dvh">
        <BlogPageSection />
        <WhiteFooter />
      </div>
    </>
  );
}

export default Blog;
