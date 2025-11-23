import "../styles/components/Slider.css";

const Slider = () => {
  const partners = [
    { name: "Epiroc", logo: "/epiroc.svg" },
    { name: "Manitou", logo: "/manitou.svg" },
    { name: "CHL", logo: "https://chl.kz/img/chl.png" },
  ];

  const allPartners = [...partners, ...partners];

  return (
    <section className="slider-section">
      <div className="slider-container">
        <div className="slider-header">
          <h2 className="slider-title">Наши партнеры</h2>
          <p className="slider-subtitle">
            Работаем с ведущими мировыми производителями
          </p>
        </div>

        <div className="slider-wrapper">
          <div className="slider-track">
            {allPartners.map((partner, index) => (
              <div key={index} className="slider-item">
                <div className="partner-card">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} Logo`}
                    className="partner-logo"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-gradient slider-gradient-left"></div>
        <div className="slider-gradient slider-gradient-right"></div>
      </div>
    </section>
  );
};

export default Slider;