import React, { useState, useEffect, useRef } from "react";
import GamepodImg from "../../Images/casino-empire/heading-bg.png";
import GamepodStep from "../../Images/casino-empire/step.png";
import GamePodLine from "../../Images/casino-empire/top-line.png";
import LeftWrap from "../../Images/casino-empire/left-wrap.png";
import RightWrap from "../../Images/casino-empire/right-wrap.png";
import GamePod1 from "../../Images/casino-empire/gamepod-1.webp";
import GamePod2 from "../../Images/casino-empire/gamepod-2.webp";
import GamePod3 from "../../Images/casino-empire/gamepod-3.webp";
import GamePod4 from "../../Images/casino-empire/gamepod-4.webp";
import Characters from "../../Images/casino-empire/character-4.webp";
import Characters1 from "../../Images/casino-empire/character-1.webp";
import Characters2 from "../../Images/casino-empire/character-2.webp";
import Characters3 from "../../Images/casino-empire/character-3.webp";
import Equipments from "../../Images/casino-empire/russian-tank.png";
import Equipments1 from "../../Images/casino-empire/ak47.png";
import Equipments2 from "../../Images/casino-empire/bazooka.png";
import Equipments3 from "../../Images/casino-empire/canon.png";
import "bootstrap/dist/css/bootstrap.min.css";

import "./GamingPod.css";

const GamingPod = () => {
  // State to track which option is selected
  const [selectedOption, setSelectedOption] = useState("gamepod");
  const [showDropdown, setShowDropdown] = useState(null);
  const [selectedImages, setSelectedImages] = useState({
    gamepod: GamePod1,
    characters: Characters,
    weapons: Equipments,
  });

  // Main display image
  const [displayImage, setDisplayImage] = useState(GamePod1);

  // Track current index position in the current category
  const [currentIndex, setCurrentIndex] = useState({
    gamepod: 0,
    characters: 0,
    weapons: 0,
  });

  // Create refs for dropdown containers
  const dropdownRefs = useRef({});

  // Sample image options for each category with unique images
  const imageOptions = {
    gamepod: [
      { id: "pod1", src: GamePod1, alt: "Gaming Pod 1" },
      { id: "pod2", src: GamePod2, alt: "Gaming Pod 2" },
      { id: "pod3", src: GamePod3, alt: "Gaming Pod 3" },
      { id: "pod4", src: GamePod4, alt: "Gaming Pod 4" },
    ],
    characters: [
      { id: "char1", src: Characters, alt: "Character 1" },
      { id: "char2", src: Characters1, alt: "Character 2" },
      { id: "char3", src: Characters2, alt: "Character 3" },
      { id: "char4", src: Characters3, alt: "Character 4" },
    ],
    weapons: [
      { id: "equip1", src: Equipments, alt: "Weapon 1" },
      { id: "equip2", src: Equipments1, alt: "Weapon 2" },
      { id: "equip3", src: Equipments2, alt: "Weapon 3" },
      { id: "equip4", src: Equipments3, alt: "Weapon 4" },
    ],
  };

  // Add click outside listener
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showDropdown &&
        !dropdownRefs.current[showDropdown]?.contains(event.target) &&
        !event.target.closest(".dropdown-toggle-btn")
      ) {
        setShowDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // Update the display image to match the selected category
    setDisplayImage(selectedImages[option]);
  };

  // Toggle dropdown visibility
  const toggleDropdown = (option, e) => {
    e.stopPropagation();
    setShowDropdown(showDropdown === option ? null : option);
  };

  // Handle selecting an image from dropdown
  const handleImageSelect = (option, image) => {
    // Find the index of the selected image
    const selectedIndex = imageOptions[option].findIndex(
      (item) => item.src === image.src
    );

    // Update the selected image for the category
    setSelectedImages({
      ...selectedImages,
      [option]: image.src,
    });

    // Update current index for the category
    setCurrentIndex({
      ...currentIndex,
      [option]: selectedIndex,
    });

    // Always update the display image when any dropdown item is clicked
    setDisplayImage(image.src);

    // Switch to the selected category
    setSelectedOption(option);

    // Close the dropdown
    setShowDropdown(null);
  };

  // Function to navigate to previous image
  const goToPrevious = () => {
    const currentCategory = selectedOption;
    const categoryImages = imageOptions[currentCategory];
    const currentIdx = currentIndex[currentCategory];

    // Calculate new index (wrap around to the end if at beginning)
    const newIndex =
      (currentIdx - 1 + categoryImages.length) % categoryImages.length;

    // Update states
    setCurrentIndex({
      ...currentIndex,
      [currentCategory]: newIndex,
    });

    const newImage = categoryImages[newIndex].src;

    setSelectedImages({
      ...selectedImages,
      [currentCategory]: newImage,
    });

    setDisplayImage(newImage);
  };

  // Function to navigate to next image
  const goToNext = () => {
    const currentCategory = selectedOption;
    const categoryImages = imageOptions[currentCategory];
    const currentIdx = currentIndex[currentCategory];

    // Calculate new index (wrap to beginning if at end)
    const newIndex = (currentIdx + 1) % categoryImages.length;

    // Update states
    setCurrentIndex({
      ...currentIndex,
      [currentCategory]: newIndex,
    });

    const newImage = categoryImages[newIndex].src;

    setSelectedImages({
      ...selectedImages,
      [currentCategory]: newImage,
    });

    setDisplayImage(newImage);
  };

  // Simplified SVG rendering function with improved responsiveness
  const renderSVG = (isLeft = true) => {
    return (
      <svg
        viewBox="0 0 173 253"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`responsive-svg ${isLeft ? "prev-button" : "next-button"}`}
      >
        <g clipPath={`url(#clip0_232_${isLeft ? "834" : "675"})`}>
          {/* Simplified gradient rectangle instead of complex paths */}
          <rect
            width="173"
            height="253"
            fill={
              isLeft
                ? "url(#paint0_linear_232_834)"
                : "url(#paint0_linear_232_675)"
            }
          />
        </g>
        <defs>
          <linearGradient
            id={`paint0_linear_232_${isLeft ? "834" : "675"}`}
            x1={isLeft ? "0.000259399" : "173"}
            y1="126.479"
            x2={isLeft ? "173" : "0"}
            y2="126.479"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="currentColor"></stop>
            <stop offset="0.805"></stop>
          </linearGradient>
          <clipPath id={`clip0_232_${isLeft ? "834" : "675"}`}>
            <rect
              width="173"
              height="253"
              fill="white"
              transform={isLeft ? "matrix(-1 0 0 1 173 0)" : ""}
            ></rect>
          </clipPath>
        </defs>
      </svg>
    );
  };

  // Render a dropdown item with improved styling and functionality
  const renderDropdownItem = (category, image) => (
    <div
      key={image.id}
      className="dropdown-item"
      onClick={() => handleImageSelect(category, image)}
    >
      <div className="dropdown-img-container">
        <img src={image.src} alt={image.alt} className="dropdown-img" />
      </div>
      <p className="dropdown-item-text">{image.alt}</p>
    </div>
  );

  // Render a category option with improved responsiveness
  const renderCategoryOption = (category, displayName) => {
    const isActive = selectedOption === category;

    return (
      <div className="gamepod-option-container">
        <div
          className={`gamepod-avtar-cursor-pointer ${isActive ? "active" : ""}`}
          onClick={() => handleOptionSelect(category)}
        >
          <div className="cursor-pointer-inside">
            <img
              alt={displayName}
              loading="lazy"
              className="cursor-pointer-inside-img"
              src={selectedImages[category]}
            />
            <div className="gamepod-overlay"></div>

            {/* Add transparent black film with name */}
            <div className="category-name-overlay">
              <span>{displayName}</span>
            </div>

            <span className="gamepod-corner1"></span>
            <span className="gamepod-corner2"></span>
            <span className="gamepod-corner3"></span>
            <span className="gamepod-corner4"></span>

            {/* Centered tick when this option is selected */}
            {isActive && (
              <div className="avtar-tick-div centered-tick">
                <span className="tick-span1"></span>
                <span className="tick-span2"></span>
                <span className="tick-span3"></span>
                <span className="tick-span4"></span>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="23" height="23" fill="#00AAFF"></rect>
                  <path
                    d="M9.15195 17.25L3.68945 11.7875L5.05508 10.4219L9.15195 14.5188L17.9447 5.72607L19.3103 7.0917L9.15195 17.25Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            )}
          </div>
          <p className="gamepod-box-text">{displayName}</p>
          <button
            className="dropdown-toggle-btn"
            onClick={(e) => toggleDropdown(category, e)}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </button>
        </div>

        {showDropdown === category && (
          <div
            className="gamepod-dropdown"
            ref={(el) => (dropdownRefs.current[category] = el)}
          >
            {imageOptions[category].map((image) =>
              renderDropdownItem(category, image)
            )}
          </div>
        )}
      </div>
    );
  };

  // Add CSS for improved responsiveness
  const responsiveStyles = `
    /* Dropdown styling */
    .gamepod-dropdown {
      position: absolute;
      z-index: 100;
      background-color: #111; 
      border: 1px solid #00AAFF;
      border-radius: 8px;
      max-height: 300px;
      overflow-y: auto;
      width: 200px;
      margin-top: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    }
    
    .dropdown-item {
      display: flex;
      align-items: center;
      padding: 10px;
      cursor: pointer;
      transition: background-color 0.2s;
      border-bottom: 1px solid #222;
    }
    
    .dropdown-item:last-child {
      border-bottom: none;
    }
    
    .dropdown-item:hover {
      background-color: #1a1a1a;
    }
    
    .dropdown-img-container {
      width: 50px;
      height: 50px;
      margin-right: 10px;
      border-radius: 4px;
      overflow: hidden;
      border: 1px solid #333;
    }
    
    .dropdown-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .dropdown-item-text {
      margin: 0;
      color: #fff;
      font-size: 14px;
    }
    
    .dropdown-toggle-btn {
      background: transparent;
      border: none;
      color: #00AAFF;
      cursor: pointer;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s;
    }
    
    .dropdown-toggle-btn:hover {
      transform: scale(1.1);
    }
    
    /* Image transition animation */
    .gamepod1 {
      transition: all 0.3s ease-in-out;
    }
    
    /* Category name overlay on transparent black film */
    .category-name-overlay {
          position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 5px 5px;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    z-index: 5;
    transition: background-color 0.3s ease;
    display: flex
;
    justify-content: center;
    align-items: flex-end;
    }
    
    .active .category-name-overlay {
      background-color: rgba(0, 0, 0, 0.8);
    }
    
    .category-name-overlay span {
      letter-spacing: 0.5px;
      text-transform: uppercase;
      color: white;
    }
    
    /* Tick icon styling - CENTERED VERSION */
    .avtar-tick-div.centered-tick {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      
    }
    
    /* Make sure the tick spans are properly sized for the centered tick */
    .centered-tick .tick-span1,
    .centered-tick .tick-span2,
    .centered-tick .tick-span3,
    .centered-tick .tick-span4 {
      position: absolute;
      // background-color: #00AAFF;
      width: 3px;
      height: 3px;
    }
    
    .centered-tick .tick-span1 {
      top: 0;
      left: 0;
    }
    
    .centered-tick .tick-span2 {
      top: 0;
      right: 0;
    }
    
    .centered-tick .tick-span3 {
      bottom: 0;
      left: 0;
    }
    
    .centered-tick .tick-span4 {
      bottom: 0;
      right: 0;
    }
    
    /* Add a bit of shadow to make the tick more visible */
    .centered-tick svg {
      filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.8));
      transform: scale(0.6);
    }
    
    /* Add overlay to improve visibility of the centered tick */
    .cursor-pointer-inside {
      position: relative;
    }
    
    .gamepod-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      opacity: 0;
      transition: opacity 0.3s;
    }
    
    .active .gamepod-overlay {
      opacity: 0.5;
    }
    
    /* Navigation button styling */
    .gamepod-gradient-div-span, 
    .gamepod-avtar-img1-span {
      cursor: pointer;
      transition: transform 0.2s ease;
      position: relative;
    }
    
    .gamepod-gradient-div-span:hover, 
    .gamepod-avtar-img1-span:hover {
      transform: scale(1.05);
    }
    
    .gamepod-gradient-div-span:after {
      
    }
    
    .gamepod-avtar-img1-span:after {
      
    }
    
    .gamepod-gradient-div-span:hover:after,
    .gamepod-avtar-img1-span:hover:after {
      opacity: 0.8;
    }
    
    /* Animation for image changes */
    @keyframes fadeInOut {
      0% { opacity: 0.5; }
      100% { opacity: 1; }
    }
    
    .gamepod1 {
      animation: fadeInOut 0.3s ease-in-out;
    }
    
    /* Responsive Media Queries */
   @media (max-width: 1200px) {
      .gamepod-inside-div {
        max-width: 95%;
      }
      
      .gamepod-gradient-div {
        max-width: 700px;
      }
    }
    
    @media (max-width: 992px) {
      .gamepod-cnt {
        padding: 25px 15px;
      }
      
      .gamepod-inside-div {
        max-width: 100%;
        padding: 15px;
      }
      
      .gamepod-heading1 {
        font-size: 28px;
      }
      
      .gamepod-main-heading {
        font-size: 22px;
      }
      
      .gamepod-heading-img {
        max-width: 260px;
      }
      
      .gamepod-gradient-div {
        max-width: 600px;
      }
      
      .gamepod-left-wrap-below {
        max-width: 350px;
      }
      
      .gamepod1 {
        max-height: 350px;
      }
      
      .gamepod-option-container {
        width: calc(33.33% - 15px);
        min-width: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .category-name-overlay {
        font-size: 13px;
        padding: 6px 3px;
      }
      
      .gamepod-box-text {
        font-size: 15px;
      }
    }
    
    @media (max-width: 768px) {
      .gamepod-cnt {
        padding: 20px 10px;
      }
      
      .gamepod-heading {
        font-size: 20px;
      }
      
      .gamepod-heading1 {
        font-size: 24px;
      }
      
      .gamepod-heading-break {
        display: block;
      }
      
      .gamepod-heading-img {
        max-width: 220px;
      }
      
      .gamepod-main-heading {
        font-size: 20px;
      }
      
      .gamepod-avtar-option-div {
        flex-wrap: wrap;
        gap: 15px;
      }
      
      .gamepod-option-container {
        width: calc(50% - 10px);
        min-width: 150px;
        max-width: 200px;
      }
      
      .gamepod-gradient-div {
        flex-direction: column;
        margin-bottom: 20px;
      }
      
      .gamepod-gradient-div-span,
      .gamepod-avtar-img1-span {
        transform: rotate(90deg);
        width: 40px;
        height: 40px;
        margin: 10px 0;
      }
      
      .gamepod-avtar-img-div {
        display: none;
      }
      
      .gamepod-left-wrap-below {
        width: 100%;
        max-width: 300px;
        order: 1;
      }
      
      .gamepod-gradient-div-span {
        order: 0;
      }
      
      .gamepod-avtar-img1-span {
        order: 2;
      }
      
      .gamepod1 {
        max-height: 300px;
      }
      
      .centered-tick svg {
        transform: scale(0.8);
      }
      
      .category-name-overlay {
        font-size: 12px;
        padding: 5px 2px;
      }
      
      .dropdown-toggle-btn {
        bottom: 8px;
        right: 8px;
      }
      
      .gamepod-dropdown {
        width: calc(100% - 10px);
        max-height: 250px;
        left: 5px;
      }
    }
    
    @media (max-width: 576px) {
      .gamepod-cnt {
        padding: 15px 5px;
      }
      
      .gamepod-heading {
        font-size: 18px;
      }
      
      .gamepod-heading1 {
        font-size: 22px;
      }
      
      .gamepod-heading-img {
        max-width: 180px;
      }
      
      .gamepod-main-heading {
        font-size: 18px;
      }
      
      .gamepod-option-container {
        width: 100%;
        max-width: 180px;
        margin: 0 auto;
      }
      
      .gamepod-avtar-option-div {
        
        align-items: center;
      }
      
      .gamepod-avtar-cursor-pointer {
        padding: 8px;
      }
      
      .gamepod-box-text {
        font-size: 14px;
        margin: 8px 0 3px;
      }
      
      .gamepod1 {
        max-height: 250px;
      }
      
      .gamepod-gradient-div-span,
      .gamepod-avtar-img1-span {
        width: 35px;
        height: 35px;
        margin: 8px 0;
      }
      
      .centered-tick svg {
        transform: scale(0.6);
      }
      
      .dropdown-item {
        padding: 8px;
      }
      
      .dropdown-img-container {
        width: 40px;
        height: 40px;
      }
      
      .dropdown-item-text {
        font-size: 12px;
      }
      
      .category-name-overlay {
        font-size: 11px;
        padding: 4px 2px;
      }
    }
    
    @media (max-width: 480px) {
      .gamepod-heading {
        font-size: 16px;
      }
      
      .gamepod-heading1 {
        font-size: 20px;
      }
      
      .gamepod-heading-img {
        max-width: 160px;
      }
      
      .gamepod-main-heading {
        font-size: 16px;
        white-space: normal;
        text-align: center;
        width: 80%;
      }
      
      .gamepod-left-wrap-below {
        max-width: 220px;
      }
      
      .gamepod1 {
        max-height: 200px;
      }
      
      .gamepod-option-container {
        max-width: 150px;
      }
      
      .gamepod-gradient-div-span,
      .gamepod-avtar-img1-span {
        width: 30px;
        height: 30px;
        margin: 6px 0;
      }
      
      .centered-tick svg {
        transform: scale(0.4);
      }
      
      .dropdown-toggle-btn {
        bottom: 5px;
        right: 5px;
      }
      
      .gamepod-box-text {
        font-size: 12px;
      }
    }
  `;

  return (
    <>
      <style>{responsiveStyles}</style>
      <div className="gamepod-cnt">
        <div className="gamepod-header">
          <h3 className="gamepod-heading">Personalize your</h3>
          <h4 className="gamepod-heading1">
            Metaverse
            <br className="gamepod-heading-break" />
            Empire
          </h4>
        </div>
        <div className="gamepod-bg-img-div">
          <div className="gamepod-inside-div">
            <div className="gamepod-sub-inside">
              <div className="gamepod-flex">
                <div className="gamepod-flex-inside">
                  <img
                    alt="Heading bg"
                    className="gamepod-heading-img"
                    src={GamepodImg}
                  />
                  <div className="gamepod-main-heading">
                    {selectedOption === "gamepod" && "Gaming Pod"}
                    {selectedOption === "characters" && "Characters"}
                    {selectedOption === "weapons" && "Weapons"}
                  </div>
                </div>
              </div>
              <div className="gamepod-gradient-div">
                <span
                  className="gamepod-gradient-div-span"
                  onClick={goToPrevious}
                  title="Previous image"
                >
                  <svg
                    viewBox="0 0 173 253"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_232_834)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M119.782 0H133.087V13.3113H119.782V0ZM133.087 13.3115H146.392V26.6228H133.087V13.3115ZM133.087 226.377H146.392V239.646V239.689V252.958H133.087V239.689V239.646V226.377ZM119.782 13.3115H106.478V26.6228H119.782V13.3115ZM106.478 199.712H119.782V213.023V213.024V226.335H106.478V213.024V213.023V199.712ZM119.782 226.377H106.478V239.646V239.689V252.958H119.782V239.689V239.646V226.377ZM119.782 39.9763V53.2454H106.478V39.9763V39.9341V26.665H119.782V39.9341V39.9763ZM106.478 26.665H93.1738H93.1731H79.8694V39.9341V39.9763V53.2454H93.1738V39.9763H106.478V26.665ZM93.1738 66.5989H106.478V53.2876H93.1738H93.1731H79.8694V66.5566V66.5989V79.868H93.1738V66.5989ZM93.1738 173.09H79.8694V186.401V186.401V199.712H93.1731H93.1738H106.478V186.401H93.1738V173.09ZM79.8694 199.712H93.1738V213.023H106.478V226.335H93.1738H93.1731H79.8694V213.024V213.023V199.712ZM79.8262 66.5989H66.5225V79.868H53.218V66.5989V66.5566V53.2876H66.5218H66.5225H79.8262V66.5989ZM53.218 173.09H66.5225V186.401H79.8262V199.712H66.5225H66.5218H53.218V186.401V186.401V173.09ZM66.5225 159.778V146.467V146.467V133.156H53.218V146.467V146.467V159.778H66.5225ZM66.5225 93.222H79.8262V79.9106H66.5225H66.5218H53.218V93.2217V93.222V106.533H66.5225V93.222ZM26.6087 146.467V159.778H39.9131V146.467V146.467V133.156H26.6087V146.467V146.467ZM26.6087 106.533V93.222V93.2217V79.9106H39.9131V93.2217V93.222V106.533H26.6087ZM39.9131 133.156V119.845V119.844V106.533H26.6087V119.844V119.845V133.156H39.9131ZM13.3047 106.533H26.6084V119.845H13.3047V133.156H0.000259399V119.845V119.844V106.533H13.304H13.3047ZM133.087 239.646H119.782V252.958H133.087V239.646ZM119.782 213.023H133.087V226.335H119.782V213.023ZM133.087 213.023H146.392V226.335H133.087V213.023ZM119.782 186.401H106.478V199.712H119.782V186.401ZM39.9134 159.778H53.2178V173.09H39.9134V159.778ZM79.8262 159.778H66.5225H66.5218H53.218V173.09H66.5218H66.5225H79.8262V159.778ZM79.8694 159.778H93.1738V173.09H79.8694V159.778ZM26.6087 159.778H39.9131V173.09H26.6087V159.778ZM53.2178 133.156H39.9134V146.467H53.2178V133.156ZM13.3047 133.156H26.6084V146.467H13.3047H13.304H0.000259399V133.156H13.304H13.3047ZM53.2178 106.533H39.9134V119.845H53.2178V106.533ZM53.218 106.533H66.5225V119.845H53.218V106.533ZM39.9134 79.9106H53.2178V93.222H39.9134V79.9106ZM93.1738 79.9106H79.8694V93.222H93.1738V79.9106ZM106.478 53.2876H119.782V66.5989H106.478V53.2876ZM119.782 26.665H133.087V39.9763H119.782V26.665ZM146.392 26.665H133.087V39.9763H146.392V26.665ZM146.392 0H133.087V13.3113H146.392V0ZM106.478 0H119.782V13.3113H106.478V0ZM146.392 53.2876H159.695V66.5989H146.392V79.868H133.087V66.5989V66.5566V53.2876H146.391H146.392ZM159.696 79.868V66.5989V66.5566V53.2876H173V66.5566V66.5989V79.868H159.696ZM159.696 173.09H173V186.401V186.401V199.712H159.696V186.401V186.401V173.09ZM159.695 93.222H146.392V106.533H133.087V93.222V93.2217V79.9106H146.391H146.392H159.695V93.222ZM146.392 159.778V146.467V146.467V133.156H133.087V146.467V146.467V159.778H146.392ZM133.087 173.09H146.392V186.401H159.695V199.712H146.392H146.391H133.087V186.401V186.401V173.09ZM106.478 146.467V159.778H119.782V146.467V146.467V133.156H106.478V146.467V146.467ZM106.478 133.156V119.845V119.844V106.533H119.782V119.844V119.845V133.156H106.478ZM119.782 106.533V93.222V93.2217V79.9106H106.478V93.2217V93.222V106.533H119.782ZM93.1738 119.845H106.478V106.533H93.1738H93.1731H79.8694V119.844V119.845V133.156H93.1738V119.845ZM146.392 159.778H159.695V173.09H146.392H146.391H133.087V159.778H146.391H146.392ZM133.087 159.778H119.782V173.09H133.087V159.778ZM159.696 159.778H173V173.09H159.696V159.778ZM106.478 159.778H119.782V173.09H106.478V159.778ZM106.478 133.156H93.1738H93.1731H79.8694V146.467H93.1731H93.1738H106.478V133.156ZM119.782 133.156H133.087V146.467H119.782V133.156ZM119.782 106.533H133.087V119.845H119.782V106.533ZM133.087 106.533H146.392V119.845H133.087V106.533ZM133.087 79.9106H119.782V93.222H133.087V79.9106ZM173 79.9106H159.696V93.222H173V79.9106Z"
                        fill="url(#paint0_linear_232_834)"
                      ></path>
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_232_834"
                        x1="0.000259399"
                        y1="126.479"
                        x2="173"
                        y2="126.479"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="currentColor"></stop>
                        <stop offset="0.805"></stop>
                      </linearGradient>
                      <clipPath id="clip0_232_834">
                        <rect
                          width="173"
                          height="253"
                          fill="white"
                          transform="matrix(-1 0 0 1 173 0)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div className="gamepod-avtar-img-div">
                  <img alt="" className="gamepod-avtar-img" src={LeftWrap} />
                </div>
                <div className="gamepod-left-wrap-below">
                  <img
                    alt="Selected item preview"
                    loading="lazy"
                    className="gamepod1"
                    src={displayImage}
                  />
                  <div className="gamepod1-below"></div>
                </div>
                <div className="gamepod-avtar-img-div">
                  <img alt="" className="gamepod-avtar-img1" src={RightWrap} />
                </div>
                <span
                  className="gamepod-avtar-img1-span"
                  onClick={goToNext}
                  title="Next image"
                >
                  <svg
                    viewBox="0 0 173 253"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_232_675)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M53.2175 0H39.9131V13.3113H53.2175V0ZM39.9128 13.3115H26.6084V26.6228H39.9128V13.3115ZM39.9128 226.377H26.6084V239.646V239.689V252.958H39.9128V239.689V239.646V226.377ZM53.2178 13.3115H66.5222V26.6228H53.2178V13.3115ZM66.5222 199.712H53.2178V213.023V213.024V226.335H66.5222V213.024V213.023V199.712ZM53.2178 226.377H66.5222V239.646V239.689V252.958H53.2178V239.689V239.646V226.377ZM53.2178 39.9763V53.2454H66.5222V39.9763V39.9341V26.665H53.2178V39.9341V39.9763ZM66.5225 26.665H79.8262H79.8269H93.1306V39.9341V39.9763V53.2454H79.8262V39.9763H66.5225V26.665ZM79.8262 66.5989H66.5225V53.2876H79.8262H79.8269H93.1306V66.5566V66.5989V79.868H79.8262V66.5989ZM79.8262 173.09H93.1306V186.401V186.401V199.712H79.8269H79.8262H66.5225V186.401H79.8262V173.09ZM93.1306 199.712H79.8262V213.023H66.5225V226.335H79.8262H79.8269H93.1306V213.024V213.023V199.712ZM93.1738 66.5989H106.478V79.868H119.782V66.5989V66.5566V53.2876H106.478H106.478H93.1738V66.5989ZM119.782 173.09H106.478V186.401H93.1738V199.712H106.478H106.478H119.782V186.401V186.401V173.09ZM106.478 159.778V146.467V146.467V133.156H119.782V146.467V146.467V159.778H106.478ZM106.478 93.222H93.1738V79.9106H106.478H106.478H119.782V93.2217V93.222V106.533H106.478V93.222ZM146.391 146.467V159.778H133.087V146.467V146.467V133.156H146.391V146.467V146.467ZM146.391 106.533V93.222V93.2217V79.9106H133.087V93.2217V93.222V106.533H146.391ZM133.087 133.156V119.845V119.844V106.533H146.391V119.844V119.845V133.156H133.087ZM159.695 106.533H146.392V119.845H159.695V133.156H173V119.845V119.844V106.533H159.696H159.695ZM39.9131 239.646H53.2175V252.958H39.9131V239.646ZM53.2175 213.023H39.9131V226.335H53.2175V213.023ZM39.9128 213.023H26.6084V226.335H39.9128V213.023ZM53.2178 186.401H66.5222V199.712H53.2178V186.401ZM133.087 159.778H119.782V173.09H133.087V159.778ZM93.1738 159.778H106.478H106.478H119.782V173.09H106.478H106.478H93.1738V159.778ZM93.1306 159.778H79.8262V173.09H93.1306V159.778ZM146.391 159.778H133.087V173.09H146.391V159.778ZM119.782 133.156H133.087V146.467H119.782V133.156ZM159.695 133.156H146.392V146.467H159.695H159.696H173V133.156H159.696H159.695ZM119.782 106.533H133.087V119.845H119.782V106.533ZM119.782 106.533H106.478V119.845H119.782V106.533ZM133.087 79.9106H119.782V93.222H133.087V79.9106ZM79.8262 79.9106H93.1306V93.222H79.8262V79.9106ZM66.5222 53.2876H53.2178V66.5989H66.5222V53.2876ZM53.2175 26.665H39.9131V39.9763H53.2175V26.665ZM26.6084 26.665H39.9128V39.9763H26.6084V26.665ZM26.6084 0H39.9128V13.3113H26.6084V0ZM66.5222 0H53.2178V13.3113H66.5222V0ZM26.6084 53.2876H13.3047V66.5989H26.6084V79.868H39.9128V66.5989V66.5566V53.2876H26.6091H26.6084ZM13.3044 79.868V66.5989V66.5566V53.2876H0V66.5566V66.5989V79.868H13.3044ZM13.3044 173.09H0V186.401V186.401V199.712H13.3044V186.401V186.401V173.09ZM13.3047 93.222H26.6084V106.533H39.9128V93.222V93.2217V79.9106H26.6091H26.6084H13.3047V93.222ZM26.6084 159.778V146.467V146.467V133.156H39.9128V146.467V146.467V159.778H26.6084ZM39.9128 173.09H26.6084V186.401H13.3047V199.712H26.6084H26.6091H39.9128V186.401V186.401V173.09ZM66.5222 146.467V159.778H53.2178V146.467V146.467V133.156H66.5222V146.467V146.467ZM66.5222 133.156V119.845V119.844V106.533H53.2178V119.844V119.845V133.156H66.5222ZM53.2178 106.533V93.222V93.2217V79.9106H66.5222V93.2217V93.222V106.533H53.2178ZM79.8262 119.845H66.5225V106.533H79.8262H79.8269H93.1306V119.844V119.845V133.156H79.8262V119.845ZM26.6084 159.778H13.3047V173.09H26.6084H26.6091H39.9128V159.778H26.6091H26.6084ZM39.9131 159.778H53.2175V173.09H39.9131V159.778ZM13.3044 159.778H0V173.09H13.3044V159.778ZM66.5222 159.778H53.2178V173.09H66.5222V159.778ZM66.5225 133.156H79.8262H79.8269H93.1306V146.467H79.8269H79.8262H66.5225V133.156ZM53.2175 133.156H39.9131V146.467H53.2175V133.156ZM53.2175 106.533H39.9131V119.845H53.2175V106.533ZM39.9128 106.533H26.6084V119.845H39.9128V106.533ZM39.9131 79.9106H53.2175V93.222H39.9131V79.9106ZM0 79.9106H13.3044V93.222H0V79.9106Z"
                        fill="url(#paint0_linear_232_675)"
                      ></path>
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_232_675"
                        x1="173"
                        y1="126.479"
                        x2="0"
                        y2="126.479"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="currentColor"></stop>
                        <stop offset="0.805"></stop>
                      </linearGradient>
                      <clipPath id="clip0_232_675">
                        <rect width="173" height="253" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
              <div className="gamepod-avtar-option-div">
                {renderCategoryOption("gamepod", "Gaming Pod")}
                {renderCategoryOption("weapons", "Weapons")}
                {renderCategoryOption("characters", "Characters")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GamingPod;
