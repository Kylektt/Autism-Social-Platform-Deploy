import HeroSection from "../components/Home/HeroSection";
import InfoBlockSection from "../components/Home/InfoBlockSection";
import VideoSection from "../components/Home/VideoSection";
import WhiteFooter from "../components/WhiteFooter";
import Newsletter from "../components/Newsletter";
import QuotesComponent from "../components/QuotesComponent";
import NavBar from "../components/NavBar"; 


function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <InfoBlockSection />
      <VideoSection />
      <QuotesComponent />
      <Newsletter />
      <WhiteFooter />
    </>
  );
}

export default Home;
