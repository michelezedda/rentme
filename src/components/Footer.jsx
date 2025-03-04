import appStoreImg from "/media/appstore.png";
import playStoreImg from "/media/playstore.png";

function Footer() {
  return (
    <>
      <div className="text-white bg-neutral-800 p-8 place-items-center">
        <p className="text-xl">{new Date().getFullYear()} &#169; RentMe</p>
        <div className="flex mt-2 gap-2">
          <img src={appStoreImg} alt="app-store" />
          <img src={playStoreImg} alt="play-store" />
        </div>
      </div>
    </>
  );
}

export default Footer;
