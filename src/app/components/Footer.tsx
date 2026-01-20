"use client";
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
import {FaInstagram} from 'react-icons/fa';
import { LuGithub, LuLinkedin } from "react-icons/lu";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: LuGithub, href: 'https://github.com/Muhammad-Talha33', label: 'GitHub' },
    { icon: LuLinkedin, href: 'https://www.linkedin.com/in/muhammad-talha33', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/synthsensations', label: 'Instagram' },
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <motion.footer className="glass-card border-t border-border/50 mt-20" initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Muhammad Talha
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Front-End Developer passionate about creating beautiful, 
              functional web experiences that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                  target='_blank'
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Get In Touch
            </h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Karachi, PK</p>
              <p>motalha901@gmail.com</p>
              <p>+92 308-2279429</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center">
            © {currentYear} Muhammad Talha.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;