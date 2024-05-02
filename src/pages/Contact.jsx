import map from "../assets/images/map.jpg";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto flex flex-col gap-10">
        <div>
          <h2 className="font-brush text-3xl text-primary">Our Services</h2>
        </div>
        <div>
          <h1 className="font-nunito uppercase text-4xl tracking-widest">
            Contact
          </h1>
        </div>
        <div className="flex justify-around gap-10 items-center text-center mx-20">
          <div className="px-12 py-12 border border-primary rounded w-2/6">
            <p className="font-brush text-3xl">Address</p>
            <p className="font-nunito font-semibold text-lg">Anywhere, 44533</p>
          </div>
          <div className="px-12 py-12 border border-primary rounded w-2/6">
            <p className="font-brush text-3xl">Call Us</p>
            <p className="font-nunito font-semibold text-lg">+91 8324443533</p>
          </div>
          <div className="px-12 py-12 border border-primary rounded w-2/6">
            <p className="font-brush text-3xl">Mail Us</p>
            <p className="font-nunito font-semibold text-lg">
              example@gmail.com
            </p>
          </div>
        </div>
        <div className="flex justify-around gap-20 mx-20">
          <div>
            <img className="max-w-96" src={map} alt="map" />
          </div>
          <div className="flex flex-col gap-10 mt-10 w-full">
            <div className="flex gap-5">
              <input
                className="border border-primary px-4 py-2 rounded text-sm w-1/2"
                type="text"
                placeholder="Name"
              />
              <input
                className="border border-primary px-4 py-2 rounded text-sm w-1/2"
                type="email"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                className="border border-primary px-4 py-2 rounded text-sm w-full"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div>
              <input
                className="border border-primary px-4 py-2 rounded text-sm h-40 w-full"
                type="text"
                placeholder="Message"
              />
            </div>
            <div className="mb-10">
              <Button />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
