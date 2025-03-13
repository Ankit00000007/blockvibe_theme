import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ZigZag from "../../Images/how-it-works/vector-shape-3.webp";
// import BackgroundImage from "../../Images/hero_new.webp";
import logoSmall from "../../Images/logo-only.png"; 
import ethIcon from "../../Images/eth.svg"; 
import bvtIcon from "../../Images/logo-only.png";
import VideoImg from "../../Images/video-thumbnail.webp";
import Icon1 from "../../Images/item-img-1.webp";
import Icon2 from "../../Images/item-img-2.webp";
import Icon3 from "../../Images/item-img-3.webp";
import Icon4 from "../../Images/item-img-4.webp";
import Tokenomics from "../../Components/Tokenomics/Tokenomics";
import spons1 from "../../Images/spons1.svg";
import spons2 from "../../Images/spons2.svg";
import spons3 from "../../Images/spons3.svg";
import spons4 from "../../Images/spons4.svg";
import spons5 from "../../Images/spons5.png";
import spons6 from "../../Images/spons6.png";
import spons7 from "../../Images/spons7.png";
// import StarBackground from "../../Components/StarAnimate/StarAnimate";
import Iconic1 from "../../Images/fact1.webp";
import Iconic2 from "../../Images/fact2.webp";
import Iconic3 from "../../Images/fact3.webp";
import Iconic4 from "../../Images/fact4.webp";
import Iconic5 from "../../Images/fact5.webp";
import LeftBtn from "../../Images/bg/btn-bg-left.svg";
import RightBtn from "../../Images/bg/btn-bg-right.svg";
import ConnectBtn from "../../Images/btn-bg-2.webp";
import InsideCard from "../../Images/card-banner1.webp";
import InsideCard1 from "../../Images/card-banner2.webp";
import InsideCard2 from "../../Images/card-banner3.webp";
import InsideCard3 from "../../Images/card-banner4.webp";
import InsideCard4 from "../../Images/card-banner5.webp";
import Future1 from "../../Images/future-icon1.webp";
import Future2 from "../../Images/future-icon2.webp";
import Future3 from "../../Images/future-icon3.webp";
import FutureCard from "../../Images/future-1.svg"
import FutureMeta from "../../Images/future-metaverse.webp";
// import RoadMap from "../../Images/roadmap1.png";
import RoadMap from "../../Components/RoadMap/RoadMap";
import SwapIcon1 from "../../Images/icons-coin/bnb.webp";
import SwapIcon2 from "../../Images/icons-coin/eth.svg";
import SwapIcon3 from "../../Images/icons-coin/matic.webp";
import SwapIcon4 from "../../Images/icons-coin/tether.svg";
import SwapIcon5 from "../../Images/icons-coin/usdc.png";
import SwapIcon6 from "../../Images/icons-coin/visa.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import GamingPod from "../../Components/GamingPod/GamingPod";


const Home = () => {
  const [sendAmount, setSendAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState(0);
  const cardsSliderRef = useRef(null);

  const [showPopup, setShowPopup] = useState(false);

  const [carousel3dCurrentIndex, setCarousel3dCurrentIndex] = useState(0);
  const [carousel3dIsDragging, setCarousel3dIsDragging] = useState(false);
  const [carousel3dDragStartX, setCarousel3dDragStartX] = useState(0);
  const [carousel3dScrollPosition, setCarousel3dScrollPosition] = useState(0);
  const [carousel3dPopupVisible, setCarousel3dPopupVisible] = useState(false);
  const carousel3dContainerRef = useRef(null);

  

  const carousel3dCityData = [
    {
      name: "Texico",
      image: Iconic1,
      description:
        "Texico is a futuristic metropolis that blends luxury with technology in a way never seen before. This high-tech city boasts premium resorts, exclusive events, and interactive gaming experiences, making it the perfect destination for those who want the best of cutting-edge gaming and luxurious entertainment. Texico is the place where the future of gaming begins.",
      className: "pulng__card--currency pulng__card--featured",
    },
    {
      name: "Maris",
      image: Iconic2,
      description:
        "Maris is the epitome of elegance and sophistication. Known for its high-stakes tables, prestigious VIP events, and breathtaking views, this luxurious city offers an exclusive gaming experience. Whether hosting private events or owning a luxury lounge property, Maris is the ultimate escape for those seeking prestige and opulence.",
      className: "pulng__card--affiliate",
    },
    {
      name: "Mew Fork",
      image: Iconic3,
      description:
        "Mew Fork is a renowned gaming capital where high-stakes action meets endless entertainment. Known for its luxurious resorts, vibrant nightlife, and exclusive VIP gaming experiences, this city offers everything from world-class lounges to high-energy poker tables. Immerse yourself in the heart of excitement and own or rent a piece of the action in the Blockvibe Metaverse.",
      className: "pulng__card--access",
    },
    {
      name: "Jokyo",
      image: Iconic4,
      description:
        "Jokyo is the pinnacle of luxury gaming in the Metaverse. Combining traditional lounge charm with cutting-edge technology, this city offers exclusive high-roller rooms and world-class amenities. For those seeking the ultimate gaming experience, Hyper Macau provides an unrivaled platform for players who demand the best in the Metaverse.",
      className: "pulng__card--rewards",
    },
    {
      name: "Ticago",
      image: Iconic5,
      description:
        "Welcome to Ticago, the coastal gaming paradise that brings the best of land-based lounge to the virtual world. Featuring seaside views, classic boardwalks, and a mix of thrilling gaming options, this city is the ultimate destination for those who want to relax and raise the stakes at the same time. Experience the perfect blend of gaming and leisure.",
      className: "pulng__card--discount",
    },
  ];

  const triggerCarousel3dPopup = () => {
    setCarousel3dPopupVisible(true);
  };

  const hideCarousel3dPopup = () => {
    setCarousel3dPopupVisible(false);
  };

  const carousel3dJumpToSlide = (index) => {
    setCarousel3dCurrentIndex(index);
  };

  const carousel3dAdvanceSlide = () => {
    setCarousel3dCurrentIndex(
      (prevIndex) => (prevIndex + 1) % carousel3dCityData.length
    );
  };

  const carousel3dRetreatSlide = () => {
    setCarousel3dCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carousel3dCityData.length) % carousel3dCityData.length
    );
  };

  const carousel3dBeginDrag = (e) => {
    setCarousel3dIsDragging(true);
    setCarousel3dDragStartX(
      e.pageX - carousel3dContainerRef.current.offsetLeft
    );
    setCarousel3dScrollPosition(carousel3dContainerRef.current.scrollLeft);
  };

  const carousel3dEndDrag = () => {
    setCarousel3dIsDragging(false);
  };

  const carousel3dProcessDrag = (e) => {
    if (!carousel3dIsDragging) return;
    e.preventDefault();
    const carousel3dCurrentX =
      e.pageX - carousel3dContainerRef.current.offsetLeft;
    const carousel3dDragDistance =
      (carousel3dCurrentX - carousel3dDragStartX) * 2;
    if (carousel3dDragDistance > 50) {
      carousel3dRetreatSlide();
      setCarousel3dIsDragging(false);
    } else if (carousel3dDragDistance < -50) {
      carousel3dAdvanceSlide();
      setCarousel3dIsDragging(false);
    }
  };

  useEffect(() => {
    const carousel3dKeyboardNavigation = (e) => {
      if (e.key === "ArrowRight") {
        carousel3dAdvanceSlide();
      } else if (e.key === "ArrowLeft") {
        carousel3dRetreatSlide();
      }
    };

    window.addEventListener("keydown", carousel3dKeyboardNavigation);
    return () => {
      window.removeEventListener("keydown", carousel3dKeyboardNavigation);
    };
  }, []);

  const calculateCarousel3dCardStyle = (index) => {
    // Calculate position for each card based on carousel3dCurrentIndex
    const carousel3dPositionDiff = index - carousel3dCurrentIndex;
    const carousel3dTotalCards = carousel3dCityData.length;
    const carousel3dNormalizedIndex =
      ((carousel3dPositionDiff % carousel3dTotalCards) + carousel3dTotalCards) %
      carousel3dTotalCards;

    let carousel3dDepth = 0;
    let carousel3dSideShift = 0;
    let carousel3dRotation = 0;
    let carousel3dVisibility = 0;
    let carousel3dStackOrder = 0;

    // Cards in front (active card)
    if (carousel3dNormalizedIndex === 0) {
      carousel3dDepth = 150;
      carousel3dVisibility = 1;
      carousel3dStackOrder = carousel3dTotalCards;
    }
    // Cards to the left
    else if (carousel3dNormalizedIndex <= carousel3dTotalCards / 2) {
      carousel3dRotation = carousel3dNormalizedIndex * 40;
      carousel3dDepth = 150 - carousel3dNormalizedIndex * 50;
      carousel3dSideShift = -carousel3dNormalizedIndex * 200;
      carousel3dVisibility = 1 - carousel3dNormalizedIndex * 0.2;
      carousel3dStackOrder = carousel3dTotalCards - carousel3dNormalizedIndex;
    }
    // Cards to the right
    else {
      const carousel3dReverseIndex =
        carousel3dTotalCards - carousel3dNormalizedIndex;
      carousel3dRotation = -carousel3dReverseIndex * 40;
      carousel3dDepth = 150 - carousel3dReverseIndex * 50;
      carousel3dSideShift = carousel3dReverseIndex * 200;
      carousel3dVisibility = 1 - carousel3dReverseIndex * 0.2;
      carousel3dStackOrder = carousel3dTotalCards - carousel3dReverseIndex;
    }

    return {
      transform: `translateX(${carousel3dSideShift}px) translateZ(${carousel3dDepth}px) rotateY(${carousel3dRotation}deg)`,
      opacity: carousel3dVisibility,
      zIndex: carousel3dStackOrder,
    };
  };

  const handleCardClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

 useEffect(() => {
   AOS.init({
     // initialize AOS
     duration: 1000, 
     once: true, 
     mirror: false,
   });
 }, []); 

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setSendAmount(value);
    // Simulate token calculation (1 ETH = 10000 BVT for example)
    setReceiveAmount(value ? parseFloat(value) * 10000 : 0);
  };

  


   const reward = [
     {
       name: "Refer Reward",
       image: InsideCard4,
     },
     {
       name: "Discount On Fee",
       image: InsideCard3,
     },
     {
       name: "In Currency",
       image: InsideCard2,
     },
     {
       name: "Affiliate Program",
       image: InsideCard,
     },
     {
       name: "Exclusive Access",
       image: InsideCard1,
     },
   ];

 

  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "What is BLOCKVIBE?",
      answer:
        "BLOCKVIBE is a revolutionary blockchain platform designed to connect creators and users in a decentralized ecosystem. It provides innovative solutions for digital asset management and community engagement through cutting-edge blockchain technology.",
    },
    {
      question: "What makes BLOCKVIBE different from others?",
      answer:
        "BLOCKVIBE stands out with its unique consensus mechanism, superior transaction speeds, and user-friendly interface. Unlike other platforms, BLOCKVIBE prioritizes community governance, sustainability, and seamless integration with existing systems while maintaining the highest security standards.",
    },
    {
      question: "What is the BLOCKVIBE token?",
      answer:
        "The BLOCKVIBE token is the native utility token of the BLOCKVIBE ecosystem. It serves multiple functions including governance voting, transaction fee payments, staking rewards, and exclusive access to platform features and services. The token follows a deflationary model with a fixed supply.",
    },
    {
      question:
        "What are the benefits of participating in the BLOCKVIBE presale?",
      answer:
        "Participating in the BLOCKVIBE presale offers several advantages including discounted token prices, early access to platform features, potential bonus rewards, staking opportunities with higher APY rates, and the ability to participate in governance decisions from the beginning of the project.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

const [showModal, setShowModal] = useState(false);
const youtubeVideoUrl = "https://youtu.be/lEC3B9loyJc";

const openVideoModal = () => {
  setShowModal(true);
  // Prevent scrolling when modal is open
  document.body.style.overflow = "hidden";
};

const closeVideoModal = () => {
  setShowModal(false);
  // Restore scrolling when modal is closed
  document.body.style.overflow = "auto";
};

const getVideoId = (url) => {
  try {
    const urlObj = new URL(url);
    return urlObj.searchParams.get("v") || url.split("/").pop();
  } catch {
    return url.split("/").pop();
  }
};

  // const [sendAmountt, setSendAmountt] = useState("");
  // const [receiveAmountt, setReceiveAmountt] = useState("");
  const [animationStarted, setAnimationStarted] = useState(false);
  const [showContentt, setShowContentt] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Function to check if element is in viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    };

    // Function to handle scroll events
    const handleScroll = () => {
      if (
        sectionRef.current &&
        !animationStarted &&
        isInViewport(sectionRef.current)
      ) {
        setAnimationStarted(true);

        // Show the content after 3 seconds
        setTimeout(() => {
          setShowContentt(true);
        }, 4000);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Check initial position in case section is already in view
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationStarted]);

  // const handleAmountChangee = (e) => {
  //   setSendAmountt(e.target.value);
  //   setReceiveAmountt(e.target.value * 1000); // Example calculation
  // };

  return (
    <>
      <div className="app-container">
        <div className="background-container"></div>

        <div className="content" data-aos="fade-up">
          <main className="main-content">
            <div className="hero-section" data-aos="fade-right">
              <h1 className="hero-title">
                <span className="orange-text">RENT . MINT . </span>
                <span className="orange-outline">PLAY . OWN</span>
              </h1>

              <h2 className="hero-subtitle">
                GROWTH IN THE WEB 3.0
                <br />
                ERA
              </h2>

              <div className="btn-para-wrapper">
                <div className="para-wrap">
                  <p className="hero-description">
                    BlockVibe is at the forefront of the Web 3.0 and Artificial
                    Intelligence (AI) revolution, seamlessly integrating
                    cutting-edge technologies to redefine wealth management, NFT
                    creation, decentralized gaming, and digital business
                    operations. Our mission is to empower individuals and
                    businesses with advanced AI tools and blockchain solutions,
                    paving the way for financial independence and innovation in
                    the digital age.
                  </p>
                </div>

                <div className="log-btn-container">
                  <a className="log-in-btn1" href="/#how-to-buy">
                    <img
                      alt="Left button background"
                      loading="lazy"
                      width="1600"
                      height="1600"
                      decoding="async"
                      data-nimg="1"
                      className="button-image-left"
                      style={{ color: "transparent" }}
                      src={LeftBtn}
                    />
                    <span className="log-btn-text">Log In</span>
                  </a>
                  <a className="log-in-btn1" href="/#how-to-buy">
                    <img
                      alt="Left button background"
                      loading="lazy"
                      width="1600"
                      height="1600"
                      decoding="async"
                      data-nimg="1"
                      className="button-image-left"
                      style={{ color: "transparent" }}
                      src={RightBtn}
                    />
                    <span className="log-btn-text">Register</span>
                  </a>
                </div>
              </div>

              {/* <div className="cta-buttons">
                <button className="log-in-btn">Log In</button>
                <button className="register-btn">Register</button>
              </div> */}
            </div>
          </main>
        </div>
      </div>
      {/* >>>>>>>>>>>><<<<<<<<<<<<< */}

      <div ref={sectionRef} className="presale-container">
        {/* Show animation only after scrolling to this section and before content appears */}
        {animationStarted && !showContentt && (
          <div className="intro-animation">
            <div className="animation-circle"></div>
            <div className="animation-logo">BLOCKVIBE PRE SALE</div>
            <div className="animation-particles">
              {[...Array(20)].map((_, i) => (
                <div key={i} className={`particle particle-${i}`}></div>
              ))}
            </div>
          </div>
        )}

        {/* Original content - hidden until animation completes */}
        <div
          className={`presale-section ${showContentt ? "visible" : "hidden"}`}
        >
          <div
            className="presale-left"
            data-aos="fade-up"
          >
            <h1 className="presale-title">PRESALE IS LIVE</h1>

            <div className="steps-container">
              <div className="step-wrapper">
                <div className="step-number-container">
                  <div className="step-dot"></div>
                  <div className="step-line"></div>
                </div>

                <div className="step-box">
                  <div className="step-header">CONNECT WALLET</div>
                  <div className="step-content">
                    <div className="step-text">
                      Use any Decentralised Wallet to connect your wallet in
                      seconds.
                    </div>
                    <div className="step-number">1</div>
                  </div>
                </div>
              </div>

              <div className="step-wrapper">
                <div className="step-number-container">
                  <div className="step-dot"></div>
                  <div className="step-line"></div>
                </div>

                <div className="step-box">
                  <div className="step-header">CHOOSE YOUR PAYMENT METHOD</div>
                  <div className="step-content">
                    <div className="step-text">
                      You can buy BLOCKVIBE with USDT, ETH, MATIC and BNB.
                    </div>
                    <div className="step-number">2</div>
                  </div>
                </div>
              </div>

              <div className="step-wrapper">
                <div className="step-number-container">
                  <div className="step-dot"></div>
                </div>

                <div className="step-box">
                  <div className="step-header">CONFIRM TRANSACTION</div>
                  <div className="step-content">
                    <div className="step-text">
                      Congratulations! BLOCKVIBE Token Credited to your Wallet.
                    </div>
                    <div className="step-number">3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="presale-right"
            data-aos="fade-down"
          >
            <div className="purchase-widget">
              <div className="widget-header">
                <div className="token-info">
                  <img
                    src={logoSmall}
                    alt="BlockVibe Logo"
                    className="token-logo"
                  />
                  <span className="token-name">Buy BLOCKVIBE</span>
                </div>
              </div>

              <div className="widget-prices">
                <div className="price-container">
                  <span className="price-label">Current Price</span>
                  <span className="price-value">$000.16</span>
                </div>
                <div className="price-container">
                  <span className="price-label">Listing Price</span>
                  <span className="price-value">$0.020</span>
                </div>
              </div>

              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "70%" }}></div>
                </div>
                <div className="progress-amount">
                  $1,183,672.74 / $1,600,000
                </div>
              </div>

              <div className="price-increase">
                <span>Next Price Increase By</span>
                <span className="increase-percent">↑ 10.14%</span>
              </div>

              <div className="payment-methods">
                <button className="method-button active">
                  <span className="method-icon">
                    <img src={SwapIcon4} />
                  </span>
                  <span className="method-name">USDT</span>
                </button>
                <button className="method-button">
                  <span className="method-icon">
                    <img src={SwapIcon5} />
                  </span>
                  <span className="method-name">USDC</span>
                </button>
                <button className="method-button eth-button">
                  <span className="method-icon">
                    <img src={SwapIcon2} />
                  </span>
                  <span className="method-name">ETH</span>
                </button>
                <button className="method-button">
                  <span className="method-icon">
                    <img src={SwapIcon6} />
                  </span>
                  <span className="method-name">CARD</span>
                </button>
                <button className="method-button">
                  <span className="method-icon">
                    <img src={SwapIcon1} />
                  </span>
                  <span className="method-name">BNB</span>
                </button>
                <button className="method-button">
                  <span className="method-icon">
                    <img src={SwapIcon3} />
                  </span>
                  <span className="method-name">MATIC</span>
                </button>
              </div>

              <div className="exchange-container">
                <div className="exchange-column">
                  <div className="exchange-header">
                    <span>You send</span>
                    <span className="min-amount">↓ 0.00000</span>
                  </div>
                  <div className="exchange-input-container">
                    <input
                      type="text"
                      className="exchange-input"
                      placeholder="at least 0.001"
                      value={sendAmount}
                      onChange={handleAmountChange}
                    />
                    <div className="currency-indicator">
                      <img src={ethIcon} alt="ETH" className="currency-icon" />
                      <span className="currency-name">ETH</span>
                    </div>
                  </div>
                </div>

                <div className="exchange-column">
                  <div className="exchange-header">
                    <span>You'll receive</span>
                  </div>
                  <div className="exchange-input-container">
                    <input
                      type="text"
                      className="exchange-input"
                      value={receiveAmount}
                      disabled
                    />
                    <div className="currency-indicator">
                      <img src={bvtIcon} alt="BVT" className="currency-icon" />
                      <span className="currency-name">BVT</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="connect-wallet-wrap">
                <a className="log-in-btn1 swap-btn" href="/#how-to-buy">
                  <img
                    alt="Left button background"
                    loading="lazy"
                    width="1600"
                    height="1600"
                    decoding="async"
                    data-nimg="1"
                    className="button-image-left swap-btn-img"
                    style={{ color: "transparent" }}
                    src={ConnectBtn}
                  />
                  <span className="log-btn-text">Connect Wallet</span>
                </a>
              </div>

              <div className="wallet-address">
                <span className="address-text">
                  [0xfF7Edd411E7e7ad0A9F2BFEbdBDhF7055F176]
                </span>
                <span className="copy-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>

              <div className="warning-text">
                Don't pay directly to this address
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* >>>>>>>>>>>><<<<<<<<<<<<<< */}
      <div className="bv-main-container">
        <div className="bv-inner-container">
          {/* Header */}
          <header className="bv-header">
            <h1 className="bv-main-title">
              WHAT IS <span className="bv-highlight-text">BLOCKVIBE?</span>
            </h1>
          </header>

          {/* Main Content Box */}
          <div className="bv-content-wrapper">
            {/* Main Title */}
            <div className="my-flex-bv" data-aos="flip-left">
              <div>
                <h2 className="bv-subtitle bv-highlight-text">
                  INNOVATIVE TECHNOLOGY, GLOBAL ACCESSIBILITY, USER-CENTRIC
                  APPROACH OR IN HAND, SUSTAINABLE AND SCALABLE
                </h2>

                {/* Description */}
                <p className="bv-description-text">
                  BlockVibe is not just a platform; it is a movement toward
                  financial freedom, digital ownership, and technological
                  empowerment. Join us and become part of the decentralized
                  future!
                </p>
              </div>
              <div>
                <div className="bv-image-wrapper">
                  <img
                    src={VideoImg}
                    alt="Person with VR headset"
                    className="bv-main-image"
                    onClick={openVideoModal}
                  />
                  <div className="video-play-button">
                    <div className="play-icon" onClick={openVideoModal}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Modal */}
            {showModal && (
              <div className="video-modal-overlay" onClick={closeVideoModal}>
                <div
                  className="video-modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="video-modal-close"
                    onClick={closeVideoModal}
                  >
                    &times;
                  </button>
                  <div className="video-iframe-wrapper">
                    <iframe
                      src={`https://www.youtube.com/embed/${getVideoId(
                        youtubeVideoUrl
                      )}?autoplay=1`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
            {/* Rest of your existing code */}
            <div className="bv-features-grid" data-aos="flip-right">
              <div className="card-img-wrap">
                <img
                  src={Icon1}
                  alt="AI and Blockchain Icon"
                  className="bv-feature-icon"
                />
                <div className="bv-feature-item">
                  <p className="bv-feature-text">
                    We leverage AI, blockchain, and decentralized finance to
                    offer unmatched opportunities.
                  </p>
                </div>
              </div>

              <div className="card-img-wrap">
                <img
                  src={Icon2}
                  alt="Global Platform Icon"
                  className="bv-feature-icon"
                />
                <div className="bv-feature-item">
                  <p className="bv-feature-text">
                    Our platform is designed for users across the globe,
                    breaking financial barriers.
                  </p>
                </div>
              </div>

              <div className="card-img-wrap">
                <img
                  src={Icon3}
                  alt="User Success Icon"
                  className="bv-feature-icon"
                />
                <div className="bv-feature-item">
                  <p className="bv-feature-text">
                    We prioritize user success with a learn-and-earn model,
                    ensuring everyone has hands-on experience.
                  </p>
                </div>
              </div>

              <div className="card-img-wrap">
                <img
                  src={Icon4}
                  alt="Business Model Icon"
                  className="bv-feature-icon"
                />
                <div className="bv-feature-item">
                  <p className="bv-feature-text">
                    Our business model is designed to grow and evolve with
                    advancements in Web 3.0 and AI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* >>>>>>>>>>><<<<<<<<<<<<<< */}

      {/* >>>>>>>>>>>>>><<<<<<<<<< */}

      <div className="iconic-cities-section">
        <div className="marquee">
          <span>EXPLORE ICONIC CITIES // </span>
          <span>EXPLORE ICONIC CITIES // </span>
          <span>EXPLORE ICONIC CITIES // </span>
        </div>
        <div className="marquee1">
          <span>EXPLORE ICONIC CITIES // </span>
          <span>EXPLORE ICONIC CITIES // </span>
          <span>EXPLORE ICONIC CITIES // </span>
        </div>
        <div className="pulng__container">
          <div
            className="pulng__3d-carousel-container"
            style={{
              position: "relative",
              width: "100%",
              height: "700px",
              perspective: "1200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            {/* Navigation Arrows */}
            <button
              className="carousel3d-arrow carousel3d-arrow-left"
              onClick={carousel3dRetreatSlide}
              style={{
                position: "absolute",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 100,
                background: "rgba(0,0,0,0.3)",
                color: "white",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              &#10094;
            </button>

            <div
              className="pulng__3d-carousel-track"
              ref={carousel3dContainerRef}
              onMouseDown={carousel3dBeginDrag}
              onMouseUp={carousel3dEndDrag}
              onMouseLeave={carousel3dEndDrag}
              onMouseMove={carousel3dProcessDrag}
              style={{
                width: "100%",
                height: "100%",
                transformStyle: "preserve-3d",
                transform: "translateZ(180px)",
                transition: "transform 0.5s ease-out",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {carousel3dCityData.map((city, index) => (
                <div
                  key={index}
                  className={`pulng__card-slide`}
                  onClick={() => {
                    carousel3dJumpToSlide(index);
                    if (index === carousel3dCurrentIndex) {
                      triggerCarousel3dPopup();
                    }
                  }}
                  style={{
                    position: "absolute",
                    width: "300px",
                    height: "450px",
                    transition: "all 0.5s ease-out",
                    cursor: "pointer",
                    ...calculateCarousel3dCardStyle(index),
                  }}
                >
                  <div
                    className={`pulng__card ${city.className}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "12px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      className="pulng__card-inner"
                      style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        className="pulng__visual-box"
                        style={{
                          height: "40%",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={city.image}
                          alt={city.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div
                        className="pulng__card-label"
                        style={{
                          padding: "16px 0px",
                          height: "60%",
                          overflow: "auto",
                        }}
                      >
                        <h3
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            marginBottom: "10px",
                          }}
                        >
                          {city.name}
                        </h3>
                        <p
                          style={{
                            fontSize: "10px",
                            lineHeight: "2.5",
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: "6",
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {city.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel3d-arrow carousel3d-arrow-right"
              onClick={carousel3dAdvanceSlide}
              style={{
                position: "absolute",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 100,
                background: "rgba(0,0,0,0.3)",
                color: "white",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              &#10095;
            </button>

            {/* Dot indicators */}
            {/* <div
              className="carousel3d-dots"
              style={{
                position: "absolute",
                bottom: "20px",
                left: "0",
                right: "0",
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                zIndex: 100,
              }}
            >
              {carousel3dCityData.map((_, index) => (
                <button
                  key={index}
                  className={`carousel3d-dot ${
                    index === carousel3dCurrentIndex ? "active" : ""
                  }`}
                  onClick={() => carousel3dJumpToSlide(index)}
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    border: "none",
                    background:
                      index === carousel3dCurrentIndex
                        ? "#5246E9"
                        : "rgba(255,255,255,0.5)",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div> */}
          </div>

          {/* Popup overlay */}
          {carousel3dPopupVisible && (
            <div
              className="pulng__popup-overlay"
              style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
              }}
            >
              <div
                className="pulng__popup-content"
                style={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  padding: "24px",
                  maxWidth: "400px",
                  width: "90%",
                }}
              >
                <h3
                  style={{
                    marginBottom: "16px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Notice
                </h3>
                <p style={{ marginBottom: "24px", color: "black" }}>
                  You are not eligible to explore cities for now.
                </p>
                <button
                  onClick={hideCarousel3dPopup}
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "#5246E9",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    float: "right",
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* >>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<< */}

      <div className="bg-earth-cnt">
        <div className="bv-content-unique">
          <h4 className="bv-title-unique">BECOME A</h4>
          <h2 className="bv-highlight-unique">BLOCKVIBE</h2>
          <h4 className="bv-subtitle-unique">TO OWN A METAVERSE</h4>
        </div>
        <div className="bv-background-unique">
          <img src={FutureMeta} />
        </div>
        <div class="earth-card-wrap">
          <div class="bg-earth-card-cnt">
            <div class="earth-card1">
              <img className="card-bg-img" alt="" src={FutureCard} />
              <div class="bv-card-body">
                <div class="icon-cnt">
                  <img className="card-icon-img" alt="" src={Future1} />
                </div>
                <h4 class="bv-card-head">Metaverse Integration</h4>
                <div class="bv-bottom-line"></div>
                <p class="bv-card-para">
                  With the Metaverse set to be a key part of the future digital
                  economy, BlockVibe is also looking to integrate its NFT
                  offerings with virtual worlds.
                </p>
              </div>
            </div>
            <div class="earth-card2">
              <img className="card-bg-img" alt="" src={FutureCard} />
              <div class="bv-card-body">
                <div class="icon-cnt">
                  <img className="card-icon-img" alt="" src={Future2} />
                </div>
                <h4 class="bv-card-head">BUY</h4>
                <div class="bv-bottom-line"></div>
                <p class="bv-card-para">
                  Take full ownership of a lounge property. Design your space,
                  create unique games, and build a metaverse empire that draws
                  high-rollers from across the metaverse.
                </p>
              </div>
            </div>
            <div class="earth-card3">
              <img className="card-bg-img" alt="" src={FutureCard} />
              <div class="bv-card-body">
                <div class="icon-cnt">
                  <img className="card-icon-img" alt="" src={Future3} />
                </div>
                <h4 class="bv-card-head">LEASE</h4>
                <div class="bv-bottom-line"></div>
                <p class="bv-card-para">
                  Gain long-term control with leasing, giving you the fexibility
                  to run your lounge and shape it into a popular gaming
                  destination.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* >>>>>>><<<<<<<<<<<< */}

        <div className="key-heighlight-div">
          <div className="key-heighlight-heading">
            <h2>KEY HIGHLIGHTS OF BLOCKVIBE</h2>
          </div>
          <div className="key-highlight-img-div">
            <div className="my-flex">
              <div class="cosmic_container">
                <div class="cosmic_background"></div>
                <div class="cosmic_dots">
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                </div>

                <div class="numerical_badge">
                  <div class="numerical_badge_circle"></div>
                  <div class="numerical_badge_inner">01</div>
                </div>

                <div class="content_title">AI-Powered Smart Tools</div>

                <div class="content_description">
                  Enhance financial decision-making and NFT creation.
                </div>

                <div class="decorative_element decorative_element_1"></div>
                <div class="decorative_element decorative_element_2"></div>
              </div>
              <div class=" myposition1">
                <div class="cosmic_background"></div>
                <div class="cosmic_dots">
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                </div>

                <div class="numerical_badge">
                  <div class="numerical_badge_circle"></div>
                  <div class="numerical_badge_inner">02</div>
                </div>

                <div class="content_title">WEB 3.0 INTEGRATION</div>

                <div class="content_description">
                  Decentralized applications, smart contracts, and metaverse
                  solutions.
                </div>

                <div class="decorative_element decorative_element_1"></div>
                <div class="decorative_element decorative_element_2"></div>
              </div>
              <div class=" myposition2">
                <div class="cosmic_background"></div>
                <div class="cosmic_dots">
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                </div>

                <div class="numerical_badge">
                  <div class="numerical_badge_circle"></div>
                  <div class="numerical_badge_inner">03</div>
                </div>

                <div class="content_title">COMPREHENSIVE WEALTH MANAGEMENT</div>

                <div class="content_description">
                  Tailored investment strategies powered by AI.
                </div>

                <div class="decorative_element decorative_element_1"></div>
                <div class="decorative_element decorative_element_2"></div>
              </div>
            </div>
            <img className="zigzag-img" src={ZigZag} />
            <div className="my-flex1">
              <div class="myposition4">
                <div class="cosmic_background"></div>
                <div class="cosmic_dots">
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                </div>

                <div class="numerical_badge">
                  <div class="numerical_badge_circle"></div>
                  <div class="numerical_badge_inner">04</div>
                </div>

                <div class="content_title">NFT AND GAMING ECOSYSTEM</div>

                <div class="content_description">
                  Opportunities for artists, developers, and gamers to earn and
                  trade digital assets.
                </div>

                <div class="decorative_element decorative_element_1"></div>
                <div class="decorative_element decorative_element_2"></div>
              </div>

              <div class=" myposition5">
                <div class="cosmic_background"></div>
                <div class="cosmic_dots">
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                  <div class="cosmic_dot"></div>
                </div>

                <div class="numerical_badge">
                  <div class="numerical_badge_circle"></div>
                  <div class="numerical_badge_inner">05</div>
                </div>

                <div class="content_title">SECURE & TRANSPARENT PLATFORM</div>

                <div class="content_description">
                  Blockchain-backed transactions ensuring authenticity and
                  trust.
                </div>

                <div class="decorative_element decorative_element_1"></div>
                <div class="decorative_element decorative_element_2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* >>>>>>>>>>>>><<<<<<<< */}
        <section className="pulng__wrapper">
          {/* Header with opposing direction text sliders */}
          <div className="pulng__header">
            <div className="pulng__text-slider pulng__text-slider--left">
              <div className="pulng__sliding-text">
                // POWER UP YOUR LOUNGE // POWER UP YOUR LOUNGE // POWER UP YOUR
                LOUNGE //
              </div>
            </div>
            <div className="pulng__text-slider pulng__text-slider--right">
              <div className="pulng__sliding-text">
                // POWER UP YOUR LOUNGE // POWER UP YOUR LOUNGE // POWER UP YOUR
                LOUNGE //
              </div>
            </div>
          </div>

          {/* Card slider section */}
          <div className="pulng__container">
            <div
              className="pulng__3d-carousel-container"
              style={{
                position: "relative",
                width: "100%",
                height: "600px",
                perspective: "1200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              {/* Navigation Arrows */}
              <button
                className="carousel3d-arrow carousel3d-arrow-left"
                onClick={carousel3dRetreatSlide}
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 100,
                  background: "rgba(0,0,0,0.3)",
                  color: "white",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                &#10094;
              </button>

              <div
                className="pulng__3d-carousel-track"
                ref={carousel3dContainerRef}
                onMouseDown={carousel3dBeginDrag}
                onMouseUp={carousel3dEndDrag}
                onMouseLeave={carousel3dEndDrag}
                onMouseMove={carousel3dProcessDrag}
                style={{
                  width: "100%",
                  height: "100%",
                  transformStyle: "preserve-3d",
                  transform: "translateZ(170px)",
                  transition: "transform 0.5s ease-out",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {reward.map((reward, index) => (
                  <div
                    key={index}
                    className={`pulng__card-slide my_pulng__card-slide`}
                    onClick={() => {
                      carousel3dJumpToSlide(index);
                      if (index === carousel3dCurrentIndex) {
                        triggerCarousel3dPopup();
                      }
                    }}
                    style={{
                      position: "absolute",
                      width: "300px",
                      transition: "all 0.5s ease-out",
                      cursor: "pointer",
                      ...calculateCarousel3dCardStyle(index),
                    }}
                  >
                    <img
                      src={reward.image}
                      alt={reward.name}
                      style={{
                        width: "100%",
                        objectFit: "cover",
                        backgroundSize: "100% 100%",
                      }}
                    />
                    <h2
                      style={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      {reward.name}
                    </h2>
                  </div>
                ))}
              </div>

              <button
                className="carousel3d-arrow carousel3d-arrow-right"
                onClick={carousel3dAdvanceSlide}
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 100,
                  background: "rgba(0,0,0,0.3)",
                  color: "white",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                &#10095;
              </button>

              {/* Dot indicators */}
              {/* <div
              className="carousel3d-dots"
              style={{
                position: "absolute",
                bottom: "20px",
                left: "0",
                right: "0",
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                zIndex: 100,
              }}
            >
              {carousel3dCityData.map((_, index) => (
                <button
                  key={index}
                  className={`carousel3d-dot ${
                    index === carousel3dCurrentIndex ? "active" : ""
                  }`}
                  onClick={() => carousel3dJumpToSlide(index)}
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    border: "none",
                    background:
                      index === carousel3dCurrentIndex
                        ? "#5246E9"
                        : "rgba(255,255,255,0.5)",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div> */}
            </div>

            {/* Popup overlay */}
            {carousel3dPopupVisible && (
              <div
                className="pulng__popup-overlay"
                style={{
                  position: "fixed",
                  inset: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1000,
                }}
              >
                <div
                  className="pulng__popup-content"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    padding: "24px",
                    maxWidth: "400px",
                    width: "90%",
                  }}
                >
                  <h3
                    style={{
                      marginBottom: "16px",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Notice
                  </h3>
                  <p style={{ marginBottom: "24px", color: "black" }}>
                    You are not eligible to explore cities for now.
                  </p>
                  <button
                    onClick={hideCarousel3dPopup}
                    style={{
                      padding: "8px 16px",
                      backgroundColor: "#5246E9",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      float: "right",
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
        {/* >>>>>>>>>>>><<<<<<<<<<<<< */}

        <Tokenomics />
        {/* >>>>>>>>>>>>><<<<<<<<<<<<< */}
        <GamingPod />
        {/* >>>>>>>>>>><<<<<<<<<<<<<< */}
        <RoadMap />
        {/* >>>>>>>>>><<<<<<<<<<< */}
        <div className="bv-token-detail-cnt">
          <div className="bv-token-detail-div">
            <div className="bv-token-detail-left">
              <div className="bv-token-detail-heading">
                <h3>TOKEN DETAILS</h3>
              </div>
              <div className="my-token-detail-wrapper">
                <div className="bv-token-detail-info">
                  <div className="token-detail-box1">
                    <h4 className="token-detail-headings"> Token Name </h4>
                    <p className="token-detail-infos">BLOCKVIBE (BVT)</p>
                  </div>
                  <div className="token-detail-box2">
                    <h4 className="token-detail-headings">Total Supply</h4>
                    <p className="token-detail-infos"> 1000,0000000 BVT</p>
                  </div>
                  <div className="token-detail-box3">
                    <h4 className="token-detail-headings">Token Type</h4>
                    <p className="token-detail-infos"> Binance Smart Chain</p>
                  </div>
                  <div className="token-detail-box4">
                    <h4 className="token-detail-headings">
                      Token Contract Address
                    </h4>
                    <p className="bv-token-address">
                      0xfF7Fed6111E967ad069F2BFEbdBCb8F07B55F196
                    </p>
                  </div>
                  <div className="token-detail-box5">
                    <h4 className="token-detail-headings">Decimals</h4>
                    <p className="token-detail-infos"> 18</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bv-token-detail-right">
              <div className="bv-token-detail-right-cnt">
                <div className="bv-token-detail-right-info">
                  <h5>Presale Details</h5>
                  <p>Pre-Sale started and you can sale at anytime.</p>
                </div>
                <div className="bv-token-detail-right-info">
                  <h5>Current BLOCKVIBE Price</h5>
                  <p>1 BVT = $000.16</p>
                </div>
                <div className="bv-token-detail-right-info">
                  <h5>Exchange Listing Price</h5>
                  <p>1 BVT = $0.020</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* >>>>>>>>>>>><<<<<<<<<<<<<<<<<< */}

        <div className="powered-by-container">
          <h2 className="powered-by-title">POWERED BY</h2>

          <div className="powered-by-grid">
            <div className="powered-by-row top-row">
              <div className="partner-item">
                <img
                  src={spons1}
                  alt="Yahoo Finance logo"
                  className="partner-logo"
                />
              </div>
              <div className="partner-item">
                <img src={spons2} alt="Binance logo" className="partner-logo" />
              </div>
              <div className="partner-item">
                <img src={spons3} alt="Nasdaq logo" className="partner-logo" />
              </div>
              <div className="partner-item">
                <img
                  src={spons4}
                  alt="Cryptonews logo"
                  className="partner-logo"
                />
              </div>
            </div>

            <div className="powered-by-row bottom-row">
              <div className="partner-item">
                <img src={spons5} alt="Tether logo" className="partner-logo" />
              </div>
              <div className="partner-item">
                <img src={spons6} alt="OpenAI logo" className="partner-logo" />
              </div>
              <div className="partner-item">
                <img
                  src={spons7}
                  alt="Crypto World logo"
                  className="partner-logo"
                />
              </div>
            </div>
          </div>
        </div>
        {/* >>>>>>>>>><<<<<<<<<<<<< */}
        <div className="faq-container">
          <h1 className="faq-title">FREQUENTLY ASKED QUESTIONS</h1>

          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3 className="question-text">{item.question}</h3>
                  <button
                    className="toggle-btn"
                    aria-label={
                      openIndex === index ? "Close answer" : "Open answer"
                    }
                  >
                    {openIndex === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 15l-6-6-6 6" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    )}
                  </button>
                </div>
                <div
                  className={`faq-answer ${openIndex === index ? "open" : ""}`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* >>>>>>><<<<<<<<<<< */}
      </div>
    </>
  );
};

export default Home;
