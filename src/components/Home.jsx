import Navbar from "./Navbar";
import Header from "./Header";
import Vehicles from "./Vehicles";
import Reviews from "./Reviews";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container mx-auto px-4 max-w-screen-lg">
        <Vehicles />
        <Reviews />
      </div>
      <Footer />
    </>
  );
}

export default Home;
