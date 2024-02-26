import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn.jsx";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import Protect from "./pages/Protect.jsx";
import Blog from "./pages/Blog.jsx";
import CreateBlog from "./pages/CreateBlog.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import Events from "./pages/Events.jsx";
import WhatIsAutism from "./pages/WhatIsAutism";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/protect" element={<Protect />} />

          <Route path="/blog/:page" element={<Blog />} />
          <Route path="/CreateBlog" element={<CreateBlog />} />

          <Route path="/blogdetail/:slug" element={<BlogDetails />} />

          <Route path="/events" element={<Events />} />

          {/* Updated route for WhatIsAutism */}
          <Route path="/what-is-autism" element={<WhatIsAutism />} />

          {/* Add other routes for articles if needed */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
