import { useState } from "react"
import Images from "../components/Images";
import Lightbox from 'yet-another-react-lightbox';
import { slides } from './data';
import 'yet-another-react-lightbox/styles.css';
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Gallery = () => {

  const [index, setIndex] = useState(-1);
  return (
    <>
      <Navbar/>
      <Images
        data={slides}
        onClick={(currentIndex) => setIndex(currentIndex)}
      />

      <Lightbox
        plugins={[Download, Fullscreen, Zoom,]}

        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
      <Footer/>
    </>
  )
}
export default Gallery