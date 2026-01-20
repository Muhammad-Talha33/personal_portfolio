"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiJavascript, SiTypescript, SiTailwindcss, SiSanity, SiOpenai } from "react-icons/si";

const Skills = () => {
  return (
    <motion.section className="max-container padding-container gap-20 py-16 pb-32 md:gap-28 lg:py-20 xl:flex-row" initial={{ opacity: 0, y: -100 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}>
      {/* Title */}
      <div className="text-center bold-18 uppercase tracking-[1rem] text-black pb-20 ml-2 md:ml-0">
        Skills
      </div>

      {/* Skills Icons */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <FaHtml5 className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-red-600 hover:scale-110 transition-all duration-500" />
          <span className="mt-2 text-sm sm:text-md md:text-lg">HTML5</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <SiJavascript className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-yellow-500 hover:scale-110 transition-all duration-500" />
          <span className="mt-2 text-sm sm:text-md md:text-lg">JavaScript</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FaCss3Alt className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-blue-700 hover:scale-110 transition-all duration-500" />
          <span className="mt-2 text-sm sm:text-md md:text-lg">CSS3</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <SiTypescript className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-blue-500 hover:scale-110 transition-all duration-500" />
          <span className="mt-2 text-sm sm:text-md md:text-lg">TypeScript</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <RiNextjsFill className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-black hover:scale-110 transition-all duration-500" />
          <span className="mt-2 text-sm sm:text-md md:text-lg">Next.js</span>
        </div>
                <div className="flex flex-col items-center justify-center">
          <FaReact  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-blue-500 hover:scale-110 transition-all duration-500" />
          <span className="mt-2 text-sm sm:text-md md:text-lg">React</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <SiTailwindcss className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-[#52B2BF] hover:scale-110 transition-all duration-500" />
          <span className="mt-2 text-sm sm:text-md md:text-lg">Tailwind CSS</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FaGithub className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-gray-700 hover:scale-110 transition-all duration-500" />
          <span className="mt-2 text-sm sm:text-md md:text-lg">GitHub</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FaGitAlt className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-red-500 hover:scale-110 transition-all duration-500" />
          <span className="mt-2 text-sm sm:text-md md:text-lg">Git</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <SiSanity  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-black hover:scale-110 transition-all duration-500" />
          <span className="mt-2 text-sm sm:text-md md:text-lg">Sanity</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FaPython   className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-blue-500 hover:scale-110 transition-all duration-500" />
          <span className="mt-2 text-sm sm:text-md md:text-lg">Python</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <SiOpenai   className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-black hover:scale-110 transition-all duration-500" />
          <span className="mt-2 text-sm sm:text-md md:text-lg">OpenAI Agents SDK</span>
        </div>
      </ul>
    </motion.section>
  );
};

export default Skills;

// type SkillItem = {
//   title: string;
//   icon: string;
//   description: string;
// };

// const SkillItem = ({ title, icon, description }: SkillItem) => {
//   return (
//     <li className="relative flex w-full flex-1 flex-col items-center text-center shadow-[0_35px_40px_-15px_rgb(0,0,0,0.2)] rounded-2xl p-10 hover:bg-blue-500 group duration-[1200ms] transition">
//       <div className="rounded-full p-5 bg-blue-500 absolute -top-6 group-hover:bg-black ">
//         <Image src={icon} alt="map" width={28} height={28} />
//       </div>
//       <h3 className="bold-20 lg:bold-22 mt-6 capitalize group-hover:text-white">
//         {title}
//       </h3>
//       <p className="regular-16 text-gray-30 mt-4 group-hover:text-white">
//         {description}
//       </p>
//     </li>
//   );
// };

//SKILLS ICONS
//   <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20">Skills</div>
// <ul className=' flex gap-10 md:gap-12 justify-center items-center flex-wrap'>
// <FaHtml5 className=' w-[125px] h-[125px] text-red-600'/>
// <FaCss3Alt className=' w-[125px] h-[125px] text-blue-700'/>
// <SiJavascript  className=' w-[125px] h-[125px] text-yellow-500'/>
// <SiTypescript className=' w-[125px] h-[125px] text-blue-500'/>
// <RiNextjsFill className=' w-[125px] h-[125px] text-black'/>
// <SiTailwindcss className=' w-[125px] h-[125px] text-[#52B2BF]'/>
// <FaGithub className=' w-[125px] h-[125px] text-gray-700'/>
