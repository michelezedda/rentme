import Navbar from "./Navbar";
import Header from "./Header";
import Hero from "./Hero";
import Vehicles from "./Vehicles";
import Reviews from "./Reviews";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container mx-auto lg:px-4 max-w-screen-lg">
        <Hero />
        <Vehicles />
        <Reviews />
      </div>
      <Footer />
    </>
  );
}

export default Home;
