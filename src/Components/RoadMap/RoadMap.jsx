import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const customStyles = `
  *{
    font-family: 'Urbanist', sans-serif;
  }

  .neon-glow {
    filter: drop-shadow(0 0 15px rgba(0, 229, 255, 0.9));
  }
  
  .text-neon {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00e5ff, 0 0 40px #00e5ff;
  }
  
  .animate-ping {
    animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  
  @keyframes ping {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }
  
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
  }

  @keyframes flow {
    0% {
      stroke-dashoffset: 1000;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
  
  .roadmap-container {
    background-color: #000;
    min-height: 100vh;
    height: 150vh;
    position: relative;
    overflow: hidden;
  }

  .main-heading-roadmap{
  margin-bottom: 90px;
  color: white;
  font-size: 80px;
  font-weight: bold;
  }

  .roadmap-content {
    position: relative;
    height: 85vh;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .milestone-point {
    position: absolute;
    transition: all 0.5s ease-out;
    z-index: 5;
    transform-origin: center;
  }
  
  .milestone-marker {
    position: relative;
    transition: all 0.3s ease-in-out;
  }
  
  .marker-ping {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    position: absolute;
    left: -12px;
    top: -12px;
  }
  
  .marker-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    left: -20px;
    // top: -20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.7);
    border: 3px solid;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
    z-index: 10;
  }
  
  .info-card {
    position: absolute;
    width: 200px;
    transform: translateX(-50%);
    text-align: center;
    transition: all 0.3s ease-in-out;
    z-index: 9;
  }
  
  .info-card:hover {
    transform: translateX(-50%) scale(1.05);
    z-index: 11;
  }
  
  .card-content {
    border-radius: 8px;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.85);
    border: 2px solid;
    box-shadow: 0 0 12px;
  }
  
  .flowing-dash {
    stroke-dasharray: 20 15;
    animation: flow 20s linear infinite;
  }

  .highway {
    animation: neonPulse 2s infinite alternate;
  }

  @keyframes neonPulse {
    from {
      filter: drop-shadow(0 0 8px rgba(0, 229, 255, 0.8));
    }
    to {
      filter: drop-shadow(0 0 15px rgba(0, 229, 255, 1));
    }
  }

  .stars {
    position: absolute;
    width: 1px;
    height: 1px;
    background: white;
    z-index: 1;
  }

  .roadmap-title {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    font-size: clamp(3rem, 8vw, 8rem);
    font-weight: bold;
    color: white;
    z-index: 10;
    text-align: center;
    width: 100%;
  }

  /* Enhanced Media queries for better responsiveness */
  @media (max-width: 992px) {
    .roadmap-content {
      height: 100vh;
    }
    
    .info-card {
      width: 180px;
    }
    
    .card-content {
      padding: 8px;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 768px) {
    .roadmap-content {
      height: 130vh;
      padding: 10px;
    }

    .main-heading-roadmap{
  margin-bottom: 20px;
  color: white;
  font-size: 40px;
  font-weight: bold;
  }
    
    .info-card {
      width: 150px;
    }
    
    .card-content {
      padding: 8px;
      font-size: 0.8rem;
    }
    
    .marker-icon {
      width: 30px;
      height: 30px;
      left: -15px;
      top: -15px;
      border-width: 2px;
    }
    
    .marker-ping {
      width: 20px;
      height: 20px;
      left: -10px;
      top: -10px;
    }
    
    .milestone-mobile-adjust {
      transform: translateY(20px) !important;
    }
  }

  @media (max-width: 576px) {
    .roadmap-content {
      padding: 5px;
    }
    
    .info-card {
      width: 120px;
    }
    
    .card-content {
      padding: 5px;
      font-size: 0.7rem;
      border-width: 1px;
    }
    
    .marker-icon {
      width: 24px;
      height: 24px;
      left: -12px;
      top: -12px;
      border-width: 2px;
    }
    
    .marker-ping {
      width: 16px;
      height: 16px;
      left: -8px;
      top: -8px;
    }
    
    /* Adjustments to prevent content overlap on small screens */
    .row-adjust-spacing {
      margin-top: 20px;
    }
    
    .milestone-mobile-stack {
      position: relative !important;
      left: 50% !important;
      top: auto !important;
      margin-bottom: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .info-card-mobile {
      position: relative;
      top: auto !important;
      left: auto !important;
      transform: none;
      margin-top: 10px;
      width: 100%;
      max-width: 150px;
    }
    
    .info-card-mobile:hover {
      transform: scale(1.05);
    }
    
    /* Alternative layout for very small screens */
    .mobile-stack-view {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px 10px;
    }
    
    .svg-container-mobile {
      height: auto;
      max-height: 40vh;
      overflow: hidden;
      margin-bottom: 20px;
    }
  }

  /* Specific orientation adjustments */
  @media (max-width: 576px) and (orientation: portrait) {
    .milestone-adjust-portrait {
      transform: translateY(-15px) !important;
    }
  }
  
  @media (max-width: 576px) and (orientation: landscape) {
    .roadmap-content {
      height: 180vh;
    }
  }
`;

const InfinityRoadmap = () => {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [visiblePoints, setVisiblePoints] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Roadmap data with precise positioning to match image
  const roadmapData = [
    {
      id: 1,
      date: "2024",
      title: "JOURNEY STARTED",
      description: "",
      color: "#00e5ff",
      x: 15,
      y: 13,
      placement: "top", // left box
      mobileX: 10,
      mobileY: 10,
    },
    {
      id: 2,
      date: "FEBUARY",
      title: "Crypto Token Deployed",
      description: "",
      color: "#00e5ff",
      x: 33,
      y: 12,
      placement: "top", // left box
      mobileX: 30,
      mobileY: 10,
    },
    {
      id: 3,
      date: "MARCH",
      title: "Pre-Sale Launched",
      description: "",
      color: "#00e5ff",
      x: 50,
      y: 30,
      placement: "top", // left box
      mobileX: 50,
      mobileY: 25,
    },
    {
      id: 4,
      date: "APRIL",
      title: "NFT Market place launched",
      description: "",
      color: "#00e5ff",
      x: 70,
      y: 12,
      placement: "top", // bottom box
      mobileX: 70,
      mobileY: 10,
    },
    {
      id: 5,
      date: "JUNE",
      title: "Debit Card",
      description: "",
      color: "#0084ff",
      x: 87,
      y: 15,
      placement: "top", // top box
      mobileX: 90,
      mobileY: 15,
    },
    {
      id: 6,
      date: "JULY",
      title: "Games Play to earn",
      description: "",
      color: "#0084ff",
      x: 87,
      y: 46,
      placement: "right", // top box
      mobileX: 90,
      mobileY: 35,
    },
    {
      id: 7,
      date: "SEPTEMBER",
      title: "listing on exchanges",
      description: "",
      color: "#0084ff",
      x: 85,
      y: 74,
      placement: "bottom", // bottom box
      mobileX: 85,
      mobileY: 65,
    },
    {
      id: 8,
      date: "OCTOBER",
      title: "A/C open with Top 100 coin",
      description: "",
      color: "#0084ff",
      x: 67,
      y: 71,
      placement: "bottom", // top box
      mobileX: 70,
      mobileY: 65,
    },
    {
      id: 9,
      date: "DECEMBER 2025",
      title: "Metaverse launched",
      description: "",
      extraDescription: "",
      color: "#b000ff",
      x: 50,
      y: 62,
      placement: "bottom", // right box
      mobileX: 50,
      mobileY: 65,
    },
    {
      id: 11,
      date: "MARCH 2026",
      title: "E-commerce",
      description: "",
      color: "#ff0084",
      x: 33,
      y: 75,
      placement: "bottom", // right box
      mobileX: 30,
      mobileY: 65,
    },
    {
      id: 10,
      date: "APRIL 2026",
      title: "Burning Portal of Token",
      description: "",
      color: "#b000ff",
      x: 15,
      y: 75,
      placement: "bottom", // bottom box
      mobileX: 10,
      mobileY: 65,
    },
    {
      id: 12,
      date: "MAY 2026",
      title: "V-meet App Launched",
      description: "",
      color: "#ff0084",
      x: 13,
      y: 50,
      placement: "left", // right box
      mobileX: 10,
      mobileY: 35,
    },
  ];

  // Generate random stars for background
  const generateStars = () => {
    const stars = [];
    const starCount =
      windowSize.width < 576 ? 50 : windowSize.width < 768 ? 100 : 150;

    for (let i = 0; i < starCount; i++) {
      const size = Math.random() * (windowSize.width < 576 ? 1.5 : 2);
      stars.push({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${Math.random() * 5}s`,
        opacity: Math.random(),
      });
    }
    return stars;
  };

  const stars = generateStars();

  // Handle window resizing for responsiveness
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setWindowSize({ width, height });
      setIsMobile(width <= 576);
      setIsTablet(width > 576 && width <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation sequence
  useEffect(() => {
    setTimeout(() => setAnimationPhase(1), 500);
    setTimeout(() => setAnimationPhase(2), 1500);

    setTimeout(() => {
      setAnimationPhase(3);

      // Animate milestone points sequentially
      roadmapData.forEach((_, index) => {
        setTimeout(() => {
          setVisiblePoints((prev) => [...prev, index]);
        }, index * 200);
      });
    }, 3000);
  }, []);

  // SVG paths for the infinity roadmap - adjusted for different screen sizes
  const getInfinityPath = () => {
    if (windowSize.width <= 576) {
      // Simplified path for mobile
      return "M 100,300 C 100,200 150,150 250,150 C 350,150 400,250 500,250 C 600,250 650,150 750,150 C 850,150 900,200 900,300 C 900,400 850,450 750,450 C 650,450 600,350 500,350 C 400,350 350,450 250,450 C 150,450 100,400 100,300 Z";
    } else if (windowSize.width <= 768) {
      // Modified path for tablet
      return "M 110,325 C 110,225 180,175 275,175 C 370,175 425,275 550,275 C 675,275 730,175 825,175 C 920,175 990,225 990,325 C 990,425 920,475 825,475 C 730,475 675,375 550,375 C 425,375 370,475 275,475 C 180,475 110,425 110,325 Z";
    } else {
      // Default path for larger screens
      return "M 120,350 C 120,250 200,200 300,200 C 400,200 450,300 600,300 C 750,300 800,200 900,200 C 1000,200 1080,250 1080,350 C 1080,450 1000,500 900,500 C 800,500 750,400 600,400 C 450,400 400,500 300,500 C 200,500 120,450 120,350 Z";
    }
  };

  // Calculate the right viewBox for the SVG based on screen size
  const getViewBox = () => {
    if (windowSize.width <= 576) {
      return "0 0 1000 600"; // Adjusted for mobile
    } else if (windowSize.width <= 768) {
      return "0 0 1100 650"; // Adjusted for tablet
    } else {
      return "0 0 1200 700"; // Default
    }
  };

  // Helper to adjust card position based on screen size
  const getCardPosition = (point) => {
    if (windowSize.width <= 576) {
      // Mobile adjustments - simplified positioning to avoid overlaps
      switch (point.placement) {
        case "top":
          return { top: "-80px", left: "50%" };
        case "right":
          return { top: "0", left: "calc(50% + 50px)" };
        case "bottom":
          return { top: "80px", left: "50%" };
        case "left":
        default:
          return { top: "0", left: "calc(50% - 50px)" };
      }
    } else if (windowSize.width <= 768) {
      // Tablet adjustments
      switch (point.placement) {
        case "top":
          return { top: "-90px", left: "50%" };
        case "right":
          return { top: "0", left: "calc(50% + 60px)" };
        case "bottom":
          return { top: "90px", left: "50%" };
        case "left":
        default:
          return { top: "0", left: "calc(50% - 60px)" };
      }
    } else {
      // Default (desktop) positioning
      switch (point.placement) {
        case "top":
          return { top: "-100px", left: "50%" };
        case "right":
          return { top: "0", left: "calc(50% + 70px)" };
        case "bottom":
          return { top: "100px", left: "50%" };
        case "left":
        default:
          return { top: "0", left: "calc(50% - 70px)" };
      }
    }
  };

  // Get point coordinates based on screen size
  const getPointCoordinates = (point) => {
    if (windowSize.width <= 576) {
      return {
        x: point.mobileX || point.x,
        y: point.mobileY || point.y,
      };
    }
    return { x: point.x, y: point.y };
  };

  // Render mobile view for very small screens
  const renderMobileStackView = () => {
    if (windowSize.width <= 480) {
      return (
        <div
          className="mobile-stack-view"
          style={{ display: animationPhase >= 3 ? "flex" : "none" }}
        >
          {roadmapData.map((point, index) => (
            <div
              key={point.id}
              className="d-flex align-items-center mb-4"
              style={{
                opacity: visiblePoints.includes(index) ? 1 : 0,
                transition: `opacity 0.5s ease ${index * 0.1}s`,
              }}
            >
              <div
                className="marker-icon me-3"
                style={{
                  position: "relative",
                  left: 0,
                  top: 0,
                  borderColor: point.color,
                  boxShadow: `0 0 15px ${point.color}`,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill={point.color}
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
              </div>
              <div
                className="card-content"
                style={{
                  width: "180px",
                  textAlign: "left",
                  borderColor: point.color,
                  boxShadow: `0 0 12px ${point.color}`,
                }}
              >
                <div className="fw-bold" style={{ color: point.color }}>
                  {point.date}
                </div>
                <div className="text-white my-1">{point.title}</div>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const infinityPath = getInfinityPath();
  const viewBox = getViewBox();

  return (
    <>
      {/* Injecting custom CSS */}
      <style>{customStyles}</style>

      <div className="roadmap-container d-flex flex-column align-items-center justify-content-center">
        <h1 className="main-heading-roadmap">RoadMap</h1>
        {/* Background stars */}
        {stars.map((star, index) => (
          <div
            key={index}
            className="stars animate-pulse"
            style={{
              left: star.left,
              top: star.top,
              width: star.width,
              height: star.height,
              opacity: star.opacity,
              animationDelay: star.animationDelay,
            }}
          />
        ))}

        {/* Initial loading animation */}
        {animationPhase === 0 && (
          <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
            <div className="display-4 text-white fw-bold d-flex flex-column align-items-center">
              <div
                className="rounded-circle border border-4 border-info animate-ping mb-4"
                style={{
                  width: isMobile ? "4rem" : "6rem",
                  height: isMobile ? "4rem" : "6rem",
                }}
              ></div>
              <span
                className="text-info animate-pulse"
                style={{ fontSize: isMobile ? "1.5rem" : "2rem" }}
              >
                LOADING ROADMAP
              </span>
            </div>
          </div>
        )}

        {/* Main content container */}
        <div className="roadmap-content">
          {/* Render mobile stack view for very small screens */}
          {renderMobileStackView()}

          {/* SVG Infinity Highway */}
          <svg
            viewBox={viewBox}
            preserveAspectRatio="xMidYMid meet"
            className="position-absolute start-50 top-50 translate-middle w-100 svg-container-mobile"
            style={{
              opacity: animationPhase >= 2 ? 1 : 0,
              transition: "opacity 1s ease-in-out",
              zIndex: 2,
              display: windowSize.width <= 480 ? "none" : "block",
            }}
          >
            <defs>
              <linearGradient
                id="roadGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#00e5ff" />
                <stop offset="35%" stopColor="#0084ff" />
                <stop offset="70%" stopColor="#b000ff" />
                <stop offset="100%" stopColor="#ff0084" />
              </linearGradient>

              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur
                  stdDeviation={isMobile ? "5" : "10"}
                  result="blur"
                />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Highway base - infinity path */}
            <path
              d={infinityPath}
              fill="none"
              stroke="url(#roadGradient)"
              strokeWidth={isMobile ? "40" : isTablet ? "50" : "60"}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="highway"
              filter="url(#glow)"
              style={{
                strokeDasharray: animationPhase >= 2 ? "0" : "5000",
                strokeDashoffset: animationPhase >= 2 ? "0" : "5000",
                transition: "stroke-dashoffset 2.5s ease-in-out",
              }}
            />

            {/* Highway center dashed line */}
            <path
              d={infinityPath}
              fill="none"
              stroke="rgba(255,255,255,0.9)"
              strokeWidth={isMobile ? "2" : "4"}
              strokeLinecap="round"
              strokeDasharray={isMobile ? "10 10" : "15 15"}
              className="flowing-dash"
              style={{
                opacity: animationPhase >= 2 ? 1 : 0,
                transition: "opacity 1s ease-in-out",
              }}
            />
          </svg>

          {/* Milestone markers */}
          {windowSize.width > 480 &&
            roadmapData.map((point, index) => {
              const { x, y } = getPointCoordinates(point);
              const cardPosition = getCardPosition(point);

              return (
                <div
                  key={point.id}
                  className={`milestone-point ${
                    windowSize.width <= 576 ? "milestone-mobile-adjust" : ""
                  }`}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    opacity: visiblePoints.includes(index) ? 1 : 0,
                    transform: `translate(-50%, -50%) scale(${
                      visiblePoints.includes(index) ? 1 : 0
                    })`,
                    transition: `all 0.5s ease ${index * 0.1}s`,
                  }}
                >
                  {/* Marker */}
                  <div className="milestone-marker">
                    <div
                      className="marker-ping animate-ping"
                      style={{ backgroundColor: point.color }}
                    ></div>
                    <div
                      className="marker-icon"
                      style={{
                        borderColor: point.color,
                        boxShadow: `0 0 15px ${point.color}`,
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={windowSize.width < 576 ? "16" : "20"}
                        height={windowSize.width < 576 ? "16" : "20"}
                        fill={point.color}
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>
                    </div>
                  </div>

                  {/* Info Card with fixed positioning to match the image */}
                  <div
                    className={`info-card ${
                      windowSize.width <= 576 ? "info-card-mobile" : ""
                    }`}
                    style={{
                      opacity: visiblePoints.includes(index) ? 1 : 0,
                      transitionDelay: `${0.3 + index * 0.1}s`,
                      ...cardPosition,
                    }}
                  >
                    <div
                      className="card-content"
                      style={{
                        borderColor: point.color,
                        boxShadow: `0 0 ${isMobile ? "8px" : "12px"} ${
                          point.color
                        }`,
                      }}
                    >
                      <div className="fw-bold" style={{ color: point.color }}>
                        {point.date}
                      </div>
                      <div className="text-white my-1">{point.title}</div>
                      {point.description && (
                        <div className="text-white-50 small">
                          {point.description}
                        </div>
                      )}
                      {point.extraDescription && (
                        <div className="text-white-50 small">
                          {point.extraDescription}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default InfinityRoadmap;
