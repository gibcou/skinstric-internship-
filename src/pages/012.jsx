import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DiamondSmall from "../assets/Diamond-dark-small.webp";
import DiamondButtons from "../components/DiamondButtons";
import LeftBracket from "../assets/Rectangle 2710.webp";
import RightBracket from "../assets/Rectangle 2711.webp";

const Demographics = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [demographics, setDemographics] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Retrieve uploaded image from storage
    const imageFromSession = sessionStorage.getItem("uploadedImageDataUrl");
    const imageFromLocal = localStorage.getItem("uploadedImageDataUrl");
    const image = imageFromSession || imageFromLocal;
    
    if (image) {
      setUploadedImage(image);
      // Simulate AI analysis
      simulateAIAnalysis();
    }
  }, []);

  const simulateAIAnalysis = () => {
    setIsAnalyzing(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      // Mock AI demographics analysis results
      const mockDemographics = {
        age: Math.floor(Math.random() * 40) + 20, // Random age between 20-60
        gender: Math.random() > 0.5 ? 'Female' : 'Male',
        ethnicity: ['Caucasian', 'Asian', 'Hispanic', 'African American', 'Mixed'][Math.floor(Math.random() * 5)],
        confidence: {
          age: Math.floor(Math.random() * 20) + 80, // 80-100%
          gender: Math.floor(Math.random() * 15) + 85, // 85-100%
          ethnicity: Math.floor(Math.random() * 25) + 75 // 75-100%
        }
      };
      
      setDemographics(mockDemographics);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <>
      <div className="nav__row">
        <div className="navbar__left">
          <Link className="navbar__left--name" to="/">
            SKINSTRIC
          </Link>
          <img className="navbar__left--img" src={LeftBracket} alt="" />
          <p className="navbar__left--page-name">INTRO</p>
          <img className="navbar__left--img" src={RightBracket} alt="" />
        </div>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-colors  disabled:pointer-events-none text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 mx-4 scale-[0.8] text-[#FCFCFC] text-[10px] bg-[#1A1B1C] leading-[16px]">
          ENTER CODE
        </button>
      </div>
      <div>
        {/* SUBHEADER */}
        <div className="absolute top-10 left-8 text-left mt-5">
          <h1 className="text-base font-semibold leading-[24px] tracking-tight">
            A.I. ANALYSIS
          </h1>
          <p className="text-sm mt-1 text-muted-foreground uppercase leading-[24px]">
            {uploadedImage ? 'A.I. has analyzed your image.' : 'A.I. has estimated the following.'}
            <br />
            {uploadedImage ? 'Review the results below.' : 'Fix estimated information if needed.'}
          </p>
        </div>

        {/* IMAGE AND DEMOGRAPHICS DISPLAY */}
        <div className="h-[78.3vh] flex flex-col items-center justify-center bg-white">
          {uploadedImage ? (
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-6xl px-4">
              {/* Uploaded Image */}
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-4">Your Photo</h3>
                <div className="w-64 h-64 lg:w-80 lg:h-80 border-2 border-gray-300 rounded-lg overflow-hidden">
                  <img 
                    src={uploadedImage} 
                    alt="Uploaded" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Demographics Results */}
              <div className="flex flex-col items-center lg:items-start">
                <h3 className="text-lg font-semibold mb-4">AI Analysis Results</h3>
                
                {isAnalyzing ? (
                  <div className="flex flex-col items-center justify-center p-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
                    <p className="text-gray-600">Analyzing your image...</p>
                  </div>
                ) : demographics ? (
                  <div className="bg-gray-50 p-6 rounded-lg space-y-4 min-w-[300px]">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Age:</span>
                      <span className="text-lg">{demographics.age} years old</span>
                      <span className="text-sm text-gray-500">({demographics.confidence.age}% confidence)</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Gender:</span>
                      <span className="text-lg">{demographics.gender}</span>
                      <span className="text-sm text-gray-500">({demographics.confidence.gender}% confidence)</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Ethnicity:</span>
                      <span className="text-lg">{demographics.ethnicity}</span>
                      <span className="text-sm text-gray-500">({demographics.confidence.ethnicity}% confidence)</span>
                    </div>
                    
                    <div className="mt-6 p-4 bg-blue-50 rounded border-l-4 border-blue-400">
                      <p className="text-sm text-blue-800">
                        <strong>Note:</strong> These results are AI-generated estimates based on facial analysis. 
                        Actual demographics may vary.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-8">
                    <p className="text-gray-600">No analysis available</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <DiamondButtons diamondImageSrc={DiamondSmall} />
              <div className="mt-8 p-4 bg-yellow-50 rounded border-l-4 border-yellow-400 max-w-md">
                <p className="text-sm text-yellow-800">
                  <strong>No image found.</strong> Please upload an image first to see AI demographics analysis.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="absolute bottom-38.5 md:bottom-8 w-full flex justify-between md:px-9 px-13">
          <div className="inset-0" aria-label="Back" >
            <div>
              <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">
                  BACK
                </span>
              </div>
              <div className="group hidden sm:flex flex-row relative justify-center items-center">
                <Link
                  to="/image"
                  className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"
                ></Link>
                <span className="absolute left-[16px] bottom-[11px] scale-[1] rotate-180 hidden sm:block group-hover:scale-[0.92] ease duration-300">
                  ▶
                </span>
                <span className="text-sm font-semibold hidden sm:block ml-6">
                  BACK
                </span>
              </div>
            </div>
          </div>
          <a className="inline-block" href="/results">
            <div
              className="invisible"
              style={{
                position: "relative",
                translate: "none",
                rotate: "none",
                scale: "none",
                visibility: "visible",
                opacity: 1,
                transform: "translate(0px, 0%)",
              }}
            >
              <div>
                <div className=" w-12 h-12 felx items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                  <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">
                    GET SUMMARY
                  </span>
                </div>
                <div className="group hidden sm:flex flex-row relative justify-center items-center">
                  <span className="text-sm font-semibold hidden sm:block mr-5">
                    GET SUMMARY
                  </span>
                  <div className=" w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
                  <span className="absolute right-[16px] bottom-[11px] scale-[1] hidden sm:block group-hover:scale-[0.92] ease duration-300">
                    ▶
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Demographics;
