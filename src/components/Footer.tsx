import React from 'react';
import Logo from './Logo';
import { Phone, Mail, Instagram, MessageCircle } from 'lucide-react';
const handleSectionScroll = (sectionId: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};
const Footer = () => {
  return <footer className="w-full py-16 px-6 md:px-12 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6">
            <Logo />
            <p className="text-muted-foreground max-w-xs">
              Helping restaurants dominate <span className="text-red-500 ">Zomato </span>& <span className="text-orange-500 ">Swiggy</span> through strategic consulting and proven optimization techniques.
            </p>
            
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#how-we-work" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block" onClick={handleSectionScroll('how-we-work')}>
                  How We Work
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block" onClick={handleSectionScroll('services')}>
                  Our Services
                </a>
              </li>
              <li>
                <a href="#about-us" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block" onClick={handleSectionScroll('about-us')}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#our-partners" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block" onClick={handleSectionScroll('our-partners')}>
                  Our Partners
                </a>
              </li>
              <li>
                <a href="#dashboard" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block" onClick={handleSectionScroll('dashboard')}>
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground group hover:scale-105 transition-all duration-300">
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:info@goalcraft.com" className="hover:text-foreground transition-all duration-300 hover:translate-x-1">
                  info@goalcraft.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground group hover:scale-105 transition-all duration-300">
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <a href="tel:+918448447408" className="hover:text-foreground transition-all duration-300 hover:translate-x-1">
                  +91 8448447408
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground group hover:scale-105 transition-all duration-300">
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <a href="tel:+919838676097" className="hover:text-foreground transition-all duration-300 hover:translate-x-1">
                  +91 9838676097
                </a>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <a href="https://wa.me/918448447408" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-125 hover:rotate-12">
                  <MessageCircle className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/goalcraft_consultants?igsh=MWRheHZwMDRmNHBhdw==" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-125 hover:-rotate-12">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <div>© 2025 GoalCraft Consultancy. All rights reserved.</div>
          
        </div>
      </div>
    </footer>;
};
export default Footer;