import Navbar from "./Navbar";
import Header from "./Header";
import Hero from "./Hero";
import Vehicles from "./Vehicles";
import Reviews from "./Reviews";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="container mx-auto max-w-screen-lg">
        <Navbar />
        <Header />
        <Hero />
        <Vehicles />
        <Reviews />
        <Footer />
      </div>
    </>
  );
}

export default Home;
