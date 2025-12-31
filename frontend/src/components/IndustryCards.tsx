import { useState } from "react";
import "../styles/components/IndustryCards.css";

const IndustryCards = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<null | number>(null);

  const industries = [
    {
      id: 1,
      title: "Горнорудное оборудование",
      icon: "⛏️",
      description:
        `
        Поставка специализированного оборудования для горнодобывающей промышленности, включая буровые установки, 
        погрузчики и транспортное оборудование для эффективной работы в карьерах и шахтах.
        Партнеры: Sumitomo, Davon, Ruixing, Epiroc Ventilation
        `,
      color: "blue",
    },
    {
      id: 2,
      title: "Строительное оборудование",
      icon: "🏗️",
      description:
        `
        Широкий ассортимент строительной техники: погрузчики, экскаваторы, 
        телескопические погрузчики и специализированное оборудование для выполнения строительных работ любой сложности.
        Партнеры: Faresin, Epiroc Навесное оборудование, Epiroc Буровые инструменты, Heli
        `,
      color: "purple",
    },
    {
      id: 3,
      title: "Нефтегазовое оборудование",
      icon: "🛢️",
      description:
        `
        Комплексные решения для нефтегазовой отрасли, включая оборудование для бурения, 
        добычи и транспортировки углеводородов с соблюдением международных стандартов качества.
        `,
      color: "indigo",
    },
    {
      id: 4,
      title: "Запасные части и сервис",
      icon: "⚙️",
      description:
        `
        Полный спектр сервисных услуг и поставка оригинальных запасных частей для всех типов оборудования. 
        Техническая поддержка, ремонт и обслуживание на территории заказчика.
        Партнеры: Dana, Cummins, Volvo Penta, Deutz, Esco
        `,
      color: "pink",
    },
  ];

  return (
    <div className="industry-section">
      <div className="industry-container">
        <div className="industry-header">
          <h2 className="industry-main-title">
            Наши <span className="industry-gradient-text">направления</span>
          </h2>
          <p className="industry-subtitle">
            Специализируемся в ключевых отраслях промышленности
          </p>
        </div>

        <div className="industry-grid">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className={`industry-card ${
                selectedIndustry === industry.id ? "industry-card-active" : ""
              } industry-card-${industry.color}`}
              onClick={() =>
                setSelectedIndustry(
                  selectedIndustry === industry.id ? null : industry.id
                )
              }
            >
              <div className="industry-card-background"></div>

              <div className="industry-card-content">
                <div className="industry-icon">{industry.icon}</div>
                <h3 className="industry-title">{industry.title}</h3>

                <div
                  className={`industry-description ${
                    selectedIndustry === industry.id
                      ? "industry-description-visible"
                      : ""
                  }`}
                >
                  <p>{industry.description}</p>
                </div>

                <div className="industry-arrow">
                  {selectedIndustry === industry.id ? "↑" : "→"}
                </div>
              </div>

              <div className="industry-card-shine"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryCards;
