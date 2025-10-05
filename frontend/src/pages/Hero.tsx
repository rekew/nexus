import "../styles/pages/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-icon">🚀</span>
          <span>Основана в 2024 году</span>
        </div>

        <h1 className="hero-title">
          Ваш надежный партнер в сфере{" "}
          <span className="hero-title-gradient">промышленных поставок</span>
        </h1>

        <p className="hero-description">
          TOO «Nexus Solution» — торговая компания на рынке Республики
          Казахстан, специализирующаяся на поставках оборудования, запасных
          частей и сервисных услуг для ключевых отраслей промышленности.
        </p>

        <div className="hero-industries">
          <span className="industry-tag">Сельскохозяйственная</span>
          <span className="industry-tag">Горнорудная</span>
          <span className="industry-tag">Строительная</span>
          <span className="industry-tag">Нефтегазовая</span>
        </div>

        <div className="hero-buttons">
          <button className="btn btn-primary">
            Запросить коммерческое предложение
            <span className="btn-arrow">→</span>
          </button>
          <button className="btn btn-secondary">Наши услуги</button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">25+</div>
            <div className="stat-label">Сотрудников</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">7</div>
            <div className="stat-label">Городов</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">3S</div>
            <div className="stat-label">Метод работы</div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-card">
          <div className="method-card">
            <h3 className="method-title">Метод 3S</h3>
            <div className="method-items">
              <div className="method-item">
                <div className="method-icon method-icon-blue">S</div>
                <div className="method-text">
                  <div className="method-name">Sales</div>
                  <div className="method-desc">Продажи</div>
                </div>
              </div>
              <div className="method-item">
                <div className="method-icon method-icon-purple">S</div>
                <div className="method-text">
                  <div className="method-name">Spare Parts</div>
                  <div className="method-desc">Запасные части</div>
                </div>
              </div>
              <div className="method-item">
                <div className="method-icon method-icon-pink">S</div>
                <div className="method-text">
                  <div className="method-name">Service</div>
                  <div className="method-desc">Сервис</div>
                </div>
              </div>
            </div>
          </div>

          <div className="offices-card">
            <div className="offices-header">
              <span className="offices-icon">📍</span>
              <h4>Наши офисы</h4>
            </div>
            <div className="offices-list">
              <div className="office-item office-main">
                <span className="office-marker">📍</span>
                Алматы
              </div>
              <div className="office-item">Нур-Султан</div>
              <div className="office-item">Костанай</div>
              <div className="office-item">Уральск</div>
              <div className="office-item">Кокшетау</div>
              <div className="office-item">Караганды</div>
              <div className="office-item">Актобе</div>
            </div>
          </div>
        </div>

        <div className="floating-badge">
          <div className="badge-year">2024</div>
          <div className="badge-text">Год основания</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
