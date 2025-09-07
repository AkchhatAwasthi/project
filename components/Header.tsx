import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, CircleDot, LayoutDashboard, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useRouter } from 'next/router';

const Header = () => {
  const [activePage, setActivePage] = useState('how-we-work');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

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
    
    // If not on homepage, navigate to homepage first
    if (router.pathname !== '/') {
      router.push(`/#${targetId}`);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About', icon: CircleDot },
    { id: 'services', label: 'Services', icon: LayoutDashboard },
    { id: 'how-we-work', label: 'How We Work', icon: DollarSign },
    { id: 'contact', label: 'Contact', icon: CircleDot }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <ToggleGroup type="single" value={activePage} onValueChange={setActivePage}>
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <ToggleGroupItem
                    key={item.id}
                    value={item.id}
                    onClick={handleNavClick(item.id)}
                    className={cn(
                      "px-4 py-2 text-sm rounded-full transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                      activePage === item.id && "bg-accent text-accent-foreground"
                    )}
                  >
                    <IconComponent className="h-4 w-4 mr-2" />
                    {item.label}
                  </ToggleGroupItem>
                );
              })}
            </ToggleGroup>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={handleNavClick('contact')}
              className="bg-primary text-primary-foreground hover:bg-primary/80"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={handleNavClick(item.id)}
                    className={cn(
                      "flex items-center px-4 py-3 text-left rounded-lg transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                      activePage === item.id && "bg-accent text-accent-foreground"
                    )}
                  >
                    <IconComponent className="h-4 w-4 mr-3" />
                    {item.label}
                  </button>
                );
              })}
              <Button
                onClick={handleNavClick('contact')}
                className="mt-4 bg-primary text-primary-foreground hover:bg-primary/80"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;