// Desc: This is the main entry point for the application
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn.jsx";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import Protect from "./pages/Protect.jsx";
import Blog from "./pages/Blog.jsx";
import CreateBlog from "./pages/CreateBlog.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import Events from "./pages/Events.jsx";
import WhatIsAutism from "./components/WhatIsAutism/WhatIsAutismPage.jsx"; // Import the new component
import AutismSpectrumArticle from "./articles/AutismSpectrumArticle.jsx"; // Import the new component
import WhatIsAutismArticle from "./articles/WhatIsAutismArticle.jsx"; // Import the new component
import CharacteristicsOfAutismArticle from "./articles/CharacteristicsOfAutismArticle.jsx"; // Import the new component
import AspergersSyndromeArticle from "./articles/AspergersSyndromeArticle.jsx"; // Import the new component
import PositiveSelfIdentityArticle from "./articles/PositiveSelfIdentityArticle.jsx"; // Import the new component
import NeurodiversityMovementArticle from "./articles/NeurodiversityMovementArticle.jsx"; // Import the new component
import PrevalenceOfAutismArticle from "./articles/PrevalenceOfAutismArticle.jsx"; // Import the new component
import HistoryOfAutismArticle from "./articles/HistoryOfAutismArticle.jsx"; // Import the new component
import CausesOfAutismArticle from "./articles/CausesOfAutismArticle.jsx"; // Import the new component
import FactsAndMisconceptionsArticle from "./articles/FactsAndMisconceptionsArticle.jsx"; // Import the new component
import BroachingAutismSubjectArticle from "./articles/BroachingAutismSubjectArticle.jsx"; // Import the new component

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
          
          <Route path="/what-is-autism" element={<WhatIsAutism />} />
            <Route path="/what-is-autism-article" element={<WhatIsAutismArticle />} />
            <Route path="/autism-spectrum-article" element={<AutismSpectrumArticle />} />
            <Route path="/characteristics-of-autism-article" element={<CharacteristicsOfAutismArticle />} />
            <Route path="/aspergers-syndrome-article" element={<AspergersSyndromeArticle />} />
            <Route path="/positive-self-identity-article" element={<PositiveSelfIdentityArticle />} />
            <Route path="/neurodiversity-movement-article" element={<NeurodiversityMovementArticle />} />
            <Route path="/prevalence-of-autism-article" element={<PrevalenceOfAutismArticle />} />
            <Route path="/history-of-autism-article" element={<HistoryOfAutismArticle />} />
            <Route path="/causes-of-autism-article" element={<CausesOfAutismArticle />} />
            <Route path="/facts-and-misconceptions-article" element={<FactsAndMisconceptionsArticle />} />
            <Route path="/broaching-autism-subject-article" element={<BroachingAutismSubjectArticle />} />
            {/* Add more routes as needed */}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
