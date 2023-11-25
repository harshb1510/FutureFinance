import HoverCarousel from "hover-carousel";
import "./Slider.css";

const Slider = () => {
    const images = [
        "/photos/Banking1.jpg",
        "/photos/Banking2.jpg",
        "/photos/Banking3.jpg",
        "/photos/Banking4.jpg",
        "/photos/Banking5.jpg"
       ];
  return (
    <section className="carouselWrapper">
    <div className="carousel-item ">
      <HoverCarousel  images={images} className="Carousel-images" />
    </div>
    </section>
  )
}

export default Slider
