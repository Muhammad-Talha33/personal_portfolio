"use client";
import React from "react";
import { PORTFOLIO } from "../../../constants";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
const Portfolio = () => {
  return (
    <section className="max-container padding-container gap-10 py-16 pb-20 md:gap-14 lg:py-16 xl:flex-row bg-slate-50">
      {/* Section Title */}
      <motion.div
        className="text-center bold-18 uppercase tracking-[1rem] text-black pb-10 ml-4 md:ml-0"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Projects
      </motion.div>

      {/* Portfolio Items Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-[95%] m-auto">
        {PORTFOLIO.map((project, index) => (
          <PortfolioItem key={project.title} project={project} index={index} />
        ))}
      </ul>

      {/* Optional View All Button */}
      <div className="text-center mt-12 sm:mt-16">
        <button
          className="px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
        >
          View All Projects on GitHub
          <LuGithub className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

type PortfolioItemProps = {
  project: {
    title: string;
    description: string;
    ImgURL: string;
    link: string;
    deployLink: string;
    tags?: string[];
    featured?: boolean;
  };
  index: number;
};

const PortfolioItem = ({ project, index }: PortfolioItemProps) => {
  return (
    <motion.li
      className={`glass-card shadow-lg rounded-xl overflow-hidden border-2 border-gray-200 group flex flex-col transition-transform duration-300 hover:scale-105`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <Image
          src={project.ImgURL}
          alt={project.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Top-right hover buttons */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            href={project.deployLink}
            className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            target="_blank"
            aria-label="Live Demo"
          >
            <FiExternalLink className="h-4 w-4" />
          </Link>
          <Link
            href={project.link}
            className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            target="_blank"
            aria-label="View Code"
          >
            <LuGithub className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Tags */}
          {project.tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-gray-200 rounded-full transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0">
          <button className="hover:opacity-90 flex-1 rounded-lg bg-black text-white">
            <Link href={project.deployLink} target="_blank">
              {/* <FiExternalLink className="w-4 h-4 mr-2" /> */}
              Live Demo
            </Link>
          </button>
          <button  className="flex-1 bg-gray-100 rounded-lg">
            <Link href={project.link} target="_blank">
              {/* <LuGithub className="w-4 h-4 mr-2" /> */}
              Code
            </Link>
          </button>
        </div>
      </div>
    </motion.li>
  );
};

export default Portfolio;
