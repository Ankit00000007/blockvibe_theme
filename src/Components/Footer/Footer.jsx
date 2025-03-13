import {React, useEffect} from 'react';
import FooterLogo from '../../Images/logo-white.png';
import WhitePaperPDF from "../../Images/pdf/blockvibe-pd.pdf";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      // initialize AOS
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    });
  }, []); 
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
  return (
    <>
      <div className="bv-footer-container">
        <div className="footer-wrapper" data-aos="fade-down">
          <div className="footer-logo-div">
            <img className="footer-logo" src={FooterLogo} />
          </div>
          <div className="bv-footer-content">
            <div className="bv-footer-section bv-story-section">
              <h2 className="bv-section-title">OUR STORY</h2>
              <p className="bv-story-text">
                Established in 2018, BlockVibe has been a key player in
                technology and money management, helping countless individuals
                and businesses adapt to the evolving financial landscape.
              </p>
              <p className="bv-story-text">
                With a strong foundation in blockchain technology and AI-driven
                decision-making, we have successfully built a platform that
                offers users an array of opportunities to invest, trade, and
                earn through decentralized ecosystems.
              </p>
            </div>

            <div className="bv-footer-section bv-links-section">
              <h2 className="bv-section-title">QUICK LINKS</h2>
              <div className="bv-quick-links">
                <div className="bv-link-item">
                  <a
                    href="/"
                    style={{
                      textDecoration: "none",
                      color: "rgba(255, 255, 255, 0.6)",
                      cursor: "pointer",
                    }}
                    className="bv-link-label"
                  >
                    <span className="bv-link-label">Home</span>
                  </a>
                </div>
                <div className="bv-link-item">
                  <a
                    href="#white-paper"
                    onClick={handleWhitePaperDownload}
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    <span className="bv-link-text">White Paper</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bv-footer-section bv-help-section">
              <h2 className="bv-section-title">HELP</h2>
              <p className="bv-help-text">
                If you have any issues contact us at{" "}
                <a href="mailto:help@blockvibe.com" className="bv-email-link">
                  help@blockvibe.com
                </a>{" "}
                or our live chat support.
              </p>
            </div>
          </div>

          <div className="bv-footer-bottom">
            <div className="bv-copyright">
              © 2025 Blockvibe. All rights reserved.
            </div>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer
