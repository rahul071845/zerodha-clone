import { useState } from "react";
import "../styles/Apps.css";

const Apps = () => {
  const [activeApp, setActiveApp] = useState(null);

  const tradingApps = [
    {
      name: "Kite Connect API",
      description: "Build your own trading applications and algorithms",
      category: "Development",
      logo: "/logos/kite-connect.png" // Add your logo files
    },
    {
      name: "Smallcase",
      description: "Invest in ready-made portfolios of stocks and ETFs",
      category: "Investing",
      logo: "/logos/smallcase.png"
    },
    {
      name: "Sensibull",
      description: "Options trading platform with advanced strategies",
      category: "Options",
      logo: "/logos/sensibull.png"
    },
    {
      name: "Streak",
      description: "Algorithmic trading without coding",
      category: "Trading",
      logo: "/logos/streak.png"
    },
    {
      name: "TickerTape",
      description: "Market analysis and stock screening tools",
      category: "Research",
      logo: "/logos/tickertape.png"
    }
  ];

  const categories = [...new Set(tradingApps.map(app => app.category))];

  return (
    <div className="apps-container">
      <header className="apps-header">
        <h1>Explore Trading Apps</h1>
        <p className="subtitle">
          Integrate powerful tools and platforms to enhance your trading experience
        </p>
      </header>

      <div className="apps-content">
        <div className="apps-grid">
          {tradingApps.map((app, index) => (
            <div 
              key={index}
              className={`app-card ${activeApp === index ? 'active' : ''}`}
              onClick={() => setActiveApp(index === activeApp ? null : index)}
            >
              <div className="app-logo">
                <img src={app.logo} alt={`${app.name} logo`} />
              </div>
              <div className="app-info">
                <h3>{app.name}</h3>
                <span className="category">{app.category}</span>
                {activeApp === index && (
                  <div className="app-details">
                    <p>{app.description}</p>
                    <button className="connect-button">
                      Connect {app.name}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="apps-sidebar">
          <h3>Categories</h3>
          <ul className="category-list">
            {categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
          
          <div className="disclaimer">
            <h4>About App Integrations</h4>
            <p>
              These third-party applications may require separate accounts.
              We only facilitate the connection to your trading account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;