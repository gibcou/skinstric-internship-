import React from 'react';
import { Link } from 'react-router-dom';
import header from '../assets/header.png';

const AIAnalysis = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Header */}
      <div className="flex justify-center pt-8 pb-4">
        <img src={header} alt="Skinstric" className="h-12" />
      </div>

      {/* Title Section - Left Aligned */}
      <div className="px-8 py-4">
        <div className="text-left">
          <h1 className="text-lg font-semibold text-black mb-2">
            A.I. ANALYSIS
          </h1>
          <p className="text-sm text-gray-700 leading-relaxed">
            A.I. HAS ESTIMATED THE FOLLOWING.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            FIX ESTIMATED INFORMATION IF NEEDED.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center px-4 py-8">

        {/* Diamond Layout */}
        <div className="relative w-96 h-96 mb-16">
          {/* Dotted outline container */}
          <div className="absolute inset-0 border-2 border-dotted border-gray-300 rotate-45 opacity-30"></div>
          
          {/* Top Diamond - Demographics */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gray-400 rotate-45 flex items-center justify-center shadow-sm">
            <div className="transform -rotate-45 text-center">
              <div className="text-sm font-bold text-black">
                DEMOGRAPHICS
              </div>
            </div>
          </div>

          {/* Left Diamond - Cosmetic Concerns */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-32 h-32 bg-gray-200 rotate-45 flex items-center justify-center shadow-sm">
            <div className="transform -rotate-45 text-center">
              <div className="text-xs font-bold text-black leading-tight">
                COSMETIC<br />CONCERNS
              </div>
            </div>
          </div>

          {/* Right Diamond - Skin Type Details */}
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-32 h-32 bg-gray-200 rotate-45 flex items-center justify-center shadow-sm">
            <div className="transform -rotate-45 text-center">
              <div className="text-xs font-bold text-black leading-tight">
                SKIN TYPE DETAILS
              </div>
            </div>
          </div>

          {/* Bottom Diamond - Weather */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gray-200 rotate-45 flex items-center justify-center shadow-sm">
            <div className="transform -rotate-45 text-center">
              <div className="text-sm font-bold text-black">
                WEATHER
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-0 right-0 px-8">
        <div className="flex justify-between items-center w-full">
          {/* Back Button */}
          <Link 
            to="/image" 
            className="flex items-center justify-center w-12 h-12 border border-black rotate-45 hover:bg-gray-100 transition-colors"
          >
            <span className="transform -rotate-45 text-xs font-bold text-black">
              BACK
            </span>
          </Link>

          {/* Get Summary Button */}
          <Link 
            to="/demographics" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <span className="text-sm font-semibold text-black">GET SUMMARY</span>
            <div className="flex items-center justify-center w-12 h-12 border border-black rotate-45">
              <span className="transform -rotate-45 text-black">▶</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AIAnalysis;