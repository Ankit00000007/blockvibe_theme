import { React, useState, useEffect, useRef } from "react";
import Logo from "../../Images/logo-white.png";
// import RightBtn from "../../Images/bg/btn-bg-right.svg";
import WhitePaperPDF from "../../Images/pdf/blockvibe-pd.pdf";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLanguage } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Header.css";



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWhitePaperDownload = (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = WhitePaperPDF;
    link.download = "BVT_WhitePaper.pdf"; // Name of the file when downloaded

    // Append to the body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("En");
  const dropdownRef = useRef(null);

  const languages = [
    { code: "En", name: "English" },
    { code: "हि", name: "हिन्दी" },
    { code: "Es", name: "Spanish" },
    { code: "Fr", name: "French" },
    { code: "De", name: "German" },
    { code: "It", name: "Italian" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language.code);
    setIsOpen(false);
  };

  return (
    <>
      <header className="header" data-aos="fade-down">
        {/* Desktop/Default View */}
        <div className="desktop-header">
          <div className="logo-container">
            <img src={Logo} alt="LuckHunter Logo" className="logo" />
          </div>

          <nav className="main-nav">
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a
                  href="#white-paper"
                  onClick={handleWhitePaperDownload}
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  WHITE PAPER
                </a>
              </li>
              <li>
                <a href="#kyc">Blogs</a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <div ref={dropdownRef} className="language-selector-container">
              <div className="language-selector" onClick={toggleDropdown}>
                <FaLanguage />
                <span className="selected-language">{selectedLanguage}</span>
                <span className="dropdown-arrow">▼</span>
              </div>

              {isOpen && (
                <div className="language-dropdown-menu">
                  {languages.map((language) => (
                    <div
                      key={language.code}
                      className={`language-dropdown-item ${
                        selectedLanguage === language.code ? "selected" : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        selectLanguage(language);
                      }}
                    >
                      {language.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* <a className="log-in-btn1 nav-wallet-btn" href="/#how-to-buy">
        <img 
          alt="Left button background" 
          loading="lazy" 
          width="1600" 
          height="1600" 
          decoding="async" 
          data-nimg="1" 
          className="button-image-left" 
          style={{color: 'transparent'}} 
          src={RightBtn}
        />
        <span className="log-btn-text">Connect Wallet</span>
      </a> */}
          </div>
          {/* Hamburger Menu Toggle */}
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <div className="menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="mobile-menu-overlay">
            <div className="mobile-menu-header">
              <button className="close-menu-btn" onClick={toggleMenu}>
                ✕
              </button>
            </div>

            <nav className="mobile-nav">
              <ul>
                <li>
                  <a href="/">HOME</a>
                </li>
                <li>
                  <a
                    href="#white-paper"
                    onClick={handleWhitePaperDownload}
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    WHITE PAPER
                  </a>
                </li>
                <li>
                  <a href="#kyc">Blogs</a>
                </li>
              </ul>
              <div className="bv-social-icons">
                <a href="#" className="bv-social-link">
                  <span className="bv-icon">
                    <FaTelegram />
                  </span>
                </a>
                <a href="https://x.com/vkk41190" className="bv-social-link">
                  <span className="bv-icon">
                    <FaXTwitter />
                  </span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Header
