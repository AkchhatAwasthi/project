import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, CircleDot, LayoutDashboard, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const Header = () => {
  const [activePage, setActivePage] = useState('how-we-work');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActivePage(page);
    
    let targetId = page;
    
    // Map navigation items to their corresponding section IDs
    if (page === 'about') {
      targetId = 'about-us';
    } else if (page === 'contact') {
      // Scroll to footer
      const footer = document.querySelector('footer');
      if (footer) {
        footer.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        setMobileMenuOpen(false);
        return;
      }
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="w-full bg-white/50 z-50">
      <header className="w-full mx-auto py-3 px-4 md:px-8 flex items-center justify-between">
        <div className="p-3">
          <Logo />
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-3 rounded-2xl text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover:bg-accent/20" 
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
          <div className="rounded-full px-1 py-1 bg-white border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <ToggleGroup 
              type="single" 
              value={activePage} 
              onValueChange={value => value && setActivePage(value)}
            >
              <ToggleGroupItem 
                value="how-we-work" 
                className={cn(
                  "px-4 py-2 rounded-full transition-all duration-300 relative hover:scale-105", 
                  activePage === 'how-we-work' 
                    ? 'text-accent-foreground bg-accent' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )} 
                onClick={handleNavClick('how-we-work')}
              >
                <CircleDot size={16} className="inline-block mr-1.5 transition-transform duration-300 group-hover:rotate-180" /> 
                How We Work
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="about" 
                className={cn(
                  "px-4 py-2 rounded-full transition-all duration-300 relative hover:scale-105", 
                  activePage === 'about' 
                    ? 'text-accent-foreground bg-accent' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )} 
                onClick={handleNavClick('about')}
              >
                <LayoutDashboard size={16} className="inline-block mr-1.5 transition-transform duration-300 group-hover:scale-110" /> 
                About
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="contact" 
                className={cn(
                  "px-4 py-2 rounded-full transition-all duration-300 relative hover:scale-105", 
                  activePage === 'contact' 
                    ? 'text-accent-foreground bg-accent' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )} 
                onClick={handleNavClick('contact')}
              >
                Contact
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </nav>
        
        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-4 right-4 bg-white py-4 px-6 border border-border rounded-2xl shadow-lg z-50">
            <div className="flex flex-col gap-4">
              <a 
                href="#how-we-work" 
                className={`px-3 py-2 text-sm rounded-md transition-all duration-300 hover:scale-105 hover:translate-x-2 ${
                  activePage === 'how-we-work' 
                    ? 'bg-accent text-accent-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`} 
                onClick={handleNavClick('how-we-work')}
              >
                <CircleDot size={16} className="inline-block mr-1.5 transition-transform duration-300 hover:rotate-180" /> 
                How We Work
              </a>
              <a 
                href="#about" 
                className={`px-3 py-2 text-sm rounded-md transition-all duration-300 hover:scale-105 hover:translate-x-2 ${
                  activePage === 'about' 
                    ? 'bg-accent text-accent-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`} 
                onClick={handleNavClick('about')}
              >
                <LayoutDashboard size={16} className="inline-block mr-1.5 transition-transform duration-300 hover:scale-110" /> 
                About
              </a>
              <a 
                href="#contact" 
                className={`px-3 py-2 text-sm rounded-md transition-all duration-300 hover:scale-105 hover:translate-x-2 ${
                  activePage === 'contact' 
                    ? 'bg-accent text-accent-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`} 
                onClick={handleNavClick('contact')}
              >
                Contact
              </a>
            </div>
          </div>
        )}
        
        <div className="hidden md:flex items-center gap-4">
          <div className="rounded-2xl">
            {/* Add any additional content here */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;