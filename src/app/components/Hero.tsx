"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuGithub, LuLinkedin } from "react-icons/lu";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false); // State to manage loading
  const socialLinks = [
    {
      icon: LuGithub,
      href: "https://github.com/Muhammad-Talha33",
      label: "GitHub",
    },
    {
      icon: LuLinkedin,
      href: "https://www.linkedin.com/in/muhammad-talha33",
      label: "LinkedIn",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/synthsensations",
      label: "Instagram",
    },
  ];

  const handleDownloadCV = () => {
    setIsLoading(true); // Set loading to true
    // Replace 'cv.pdf' with the actual file name and path
    const fileUrl = "/Muhammad_Talha_Resume.pdf"; // Path to your CV file in the public folder
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Muhammad_Talha_Resume.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Simulate a delay to show loading state (optional)
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after download
    }, 1000); // Adjust the delay as needed
  };
  return (
    <motion.section
      className="max-container padding-container flex flex-col flexCenter gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row "
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* <span className="max-container absolute top-64 left-44 h-[144px] w-[777px] bg-blue-400 rounded-full shadow-lg blur-[7rem] -z-10"></span> */}
      {/* Left */}
      <div className="relative z-20 flex flex-1 flex-col pt-16">
        <h4 className="font-semibold lg:text-left text-center md:bold-20 text-3xl">
          Hi, I'm
        </h4>
        <h1 className="bold-40 lg:bold-64 lg:text-left relative text-center">
          Muhammad Talha
        </h1>
        <h2 className="bold-22 lg:bold-32 lg:text-left text-[1.8rem] capitalize text-center">
          {/* A {""} */}
          <span>
            <Typewriter
              words={["Frond-End Developer", "AI Enthusiast", "Programmer"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="regular-16 max-w-[555px] my-4 text-center lg:text-left">
          I craft beautiful, functional web experiences with modern technologies. Passionate about clean code, innovative design, and solving complex problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 pt-3 lg:flexStart">
          <button
            className="px-5 sm:px-7 py-3 sm:py-4 text-sm sm:text-base rounded-md border-2 border-gray-200 transition-all duration-300 hover:scale-105 shadow-md"
            onClick={handleDownloadCV}
            disabled={isLoading}
          >
             {isLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Downloading...
                </span>
              ) : (
                "Download Resume"
              )}
          </button>
          {/* <Button
            type="button"
            title="Download CV"
            icon="/download.svg"
            variant="btn_dark_rounded"
            onClick={handleDownloadCV} // Pass onClick handler
          /> */}
          <div
            className="fade-in flex justify-center space-x-4 sm:space-x-6"
            style={{ animationDelay: "0.4s" }}
          >
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="p-2 sm:p-3 rounded-full glass-card hover:scale-110 transition-all duration-300 hover:glow-effect group"
                aria-label={social.label}
                target="_blank"
              >
                <social.icon className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="hidden lg:flex lg:flex-1 xl:flexEnd">
        <Image
          src="/picture.jpg"
          alt="bg"
          width={488}
          height={488}
          className="w-auto"
        />
      </div>
    </motion.section>
  );
};

export default Hero;
