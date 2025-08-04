import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Vehicles from "./components/vehicles/Vehicles";
import Reviews from "./components/reviews/Reviews";
import Footer from "./components/Footer";

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
