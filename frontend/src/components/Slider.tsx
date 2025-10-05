import "../styles/components/Slider.css";

const Slider = () => {
  const images: string[] = [
    "/epiroc.svg",
    "/manitou.svg",
    "/zetor.svg",
    "https://chl.kz/img/chl.png",
    "https://www.petlas.com/themes/petlas/assets/img/Logo.png",
    "/epiroc.svg",
    "/manitou.svg",
    "/zetor.svg",
    "https://chl.kz/img/chl.png",
    "https://www.petlas.com/themes/petlas/assets/img/Logo.png",
    "/epiroc.svg",
    "/manitou.svg"
  ];

  return (
    <section className="slider">
      <div className="slide-track">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Partner Logo ${index}`} />
        ))}
      </div>
    </section>
  );
};

export default Slider;
