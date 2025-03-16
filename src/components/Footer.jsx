import appStoreImg from "/media/appstore.png";
import playStoreImg from "/media/playstore.png";

function Footer() {
  return (
    <>
      <div className="flex flex-col text-white bg-neutral-800 p-8 gap-4 xl:place-items-center">
        <div>
          <span className="text-4xl font-bold text-orange-600">RentMe</span>
        </div>
        <div className="md:flex md:flex-row">
          <div className="md:flex md:flex-row gap-25">
            <div>
              <h4 className="text-xl text-neutral-400 font-semibold">
                Our programs
              </h4>
              <ul>
                <li>RentMe Car Subscription</li>
                <li>RentMe ride</li>
                <li>Car rental deals</li>
                <li>RentMe app</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl text-neutral-400 font-semibold mt-2">
                RentMe for business
              </h4>
              <ul>
                <li>Register my business</li>
                <li>Mobility for Business Travel</li>
                <li>Business car alternatives</li>
                <li>Travel agencies</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl text-neutral-400 font-semibold mt-2">
                About us
              </h4>
              <ul>
                <li>RentMe group</li>
                <li>Careers</li>
                <li>Cookie-Settings</li>
                <li>Terms & conditions</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex mt-2 gap-2 xl:gap-10">
          <img
            src={appStoreImg}
            alt="app-store"
            className="cursor-pointer
          "
          />
          <img src={playStoreImg} alt="play-store" className="cursor-pointer" />
        </div>
        <p className="text-2xl text-neutral-400 font-semibold">
          &#169; RentMe {new Date().getFullYear()}
        </p>
      </div>
    </>
  );
}

export default Footer;
