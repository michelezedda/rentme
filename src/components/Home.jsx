import Navbar from "./Navbar";
import Header from "./Header";
import Hero from "./Hero";
import Vehicles from "./vehicles/Vehicles";
import Reviews from "./reviews/Reviews";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container mx-auto max-w-screen-xl">
        <Hero />
        <Vehicles />
      </div>
      <Reviews />
      <Footer />
    </>
  );
}

export default Home;
