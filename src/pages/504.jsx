import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LeftBracket from "../assets/Rectangle 2710.webp";
import RightBracket from "../assets/Rectangle 2711.webp";
import DiamondLarge from "../assets/Diamond-light-large.webp";
import DiamondMedium from "../assets/Diamond-medium-medium.webp";
import DiamondSmall from "../assets/Diamond-dark-small.webp";

const City = () => {
  const routerLocation = useLocation();
  const navigate = useNavigate();
  const { name: routedName } = routerLocation.state || {};

  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, [routedName]);

  function handleCity(e) {
    setCity(e.target.value);
  }

  function validateInput(value) {
    const v = value.trim();
    // letters, spaces, hyphen, apostrophe, dot — tweak if you need stricter rules
    return v.length > 0 && /^[A-Za-z .'-]+$/.test(v);
  }

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setError("");

    if (!validateInput(city)) {
      setError("Please enter a valid location (letters only).");
      return;
    }

    // prefer the name from route state, fallback to localStorage
    const storedName = routedName || localStorage.getItem("name");
    if (!storedName) {
      setError("Name is missing. Please go back and enter your name.");
      return;
    }

    try {
      const response = await fetch(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: storedName, location: city }),
        }
      );

      if (!response.ok) {
        // surface backend message when possible
        const text = await response.text();
        throw new Error(`Upload failed (${response.status}): ${text}`);
      }

      // navigate after successful submit
      navigate("/infoloading");
    } catch (err) {
      setError(err.message || "Something went wrong while submitting.");
    }
  };

  return (
    <div className="main__intro__page">
      <div className="nav__row">
        <div className="navbar__left">
          <Link className="navbar__left--name" to="/">SKINSTRIC</Link>
          <img className="navbar__left--img" src={LeftBracket} alt="" />
          <p className="navbar__left--page-name">INTRO</p>
          <img className="navbar__left--img" src={RightBracket} alt="" />
        </div>
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-colors disabled:pointer-events-none text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 mx-4 scale-[0.8] text-[#FCFCFC] text-[10px] bg-[#1A1B1C] leading-[16px]"
          type="button"
        >
          ENTER CODE
        </button>
      </div>

      <div className="min-h-[90vh] flex flex-col items-center justify-center bg-white text-center">
        <div className="absolute top-16 left-9 text-left">
          <p className="font-semibold text-xs">TO START ANALYSIS</p>
        </div>

        <div className="relative flex flex-col items-center justify-center mb-40 w-full h-full">
          <p className="text-sm text-gray-400 tracking-wider uppercase mb-1">CLICK TO TYPE</p>

          <form className="relative z-10" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center" />
            <input
              onChange={handleCity}
              value={city}
              className="text-5xl sm:text-6xl font-normal text-center bg-transparent border-b border-black focus:outline-none appearance-none w-[372px] sm:w-[432px] pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-10"
              placeholder="Your City Name"
              autoComplete="off"
              type="text"
              name="city"
            />
            <button type="submit" className="sr-only">Submit</button>
          </form>

          {error && (
            <p className="mt-3 text-sm text-red-600">{error}</p>
          )}

          <img alt="Diamond Large" loading="lazy" decoding="async" className="absolute w-[480px] h-[480px] md:w-[762px] md:h-[762px] animate-spin-slow rotate-190 color:transparent" src={DiamondLarge} />
          <img alt="Diamond Medium" loading="lazy" decoding="async" className="absolute w-[400px] h-[400px] md:w-[682px] md:h-[682px] animate-spin-slower rotate-185 color:transparent" src={DiamondMedium} />
          <img alt="Diamond Small" loading="lazy" decoding="async" className="absolute w-[320px] h-[320px] md:w-[602px] md:h-[602px] animate-spin-slowest color:transparent" src={DiamondSmall} />
        </div>

        <div className="absolute bottom-38.5 md:bottom-8 w-full flex justify-between md:px-9 px-13">
          <div className="inset-0" aria-label="Back">
            <div>
              <Link to="/name" className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">BACK</span>
              </Link>
              <div className="group hidden sm:flex flex-row relative justify-center items-center">
                <Link to="/name" className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300" />
                <span className="absolute left-[16px] bottom-[11px] scale-[1] rotate-180 hidden sm:block group-hover:scale-[0.92] ease duration-300">▶</span>
                <span className="text-sm font-semibold hidden sm:block ml-6">BACK</span>
              </div>
            </div>
          </div>

          {/* Proceed button triggers the same submit handler */}
          <button
            onClick={handleSubmit}
            className="inline-block"
            type="button"
          >
            <div className="invisible" style={{ position: "relative", translate: "none", rotate: "none", scale: "none", visibility: "visible", opacity: 1, transform: "translate(0px, 0%)" }}>
              <div>
                <div className="w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                  <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">PROCEED</span>
                </div>
                <div className="group hidden sm:flex flex-row relative justify-center items-center">
                  <span className="text-sm font-semibold hidden sm:block mr-5">PROCEED</span>
                  <div className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300" />
                  <span className="absolute right-[16px] bottom-[11px] scale-[1] hidden sm:block group-hover:scale-[0.92] ease duration-300">▶</span>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default City;
