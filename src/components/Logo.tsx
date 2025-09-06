
import React from 'react';
import logoImage from '@/assets/logo.png';

const Logo = () => {
  return (
    <div className="flex items-center gap-0.5">
      <img src={logoImage} alt="GoalCraft Consultancy" className="h-14 w-auto" />
      <span className="text-xl font-semibold text-foreground">GoalCraft Consultancy</span>
    </div>
  );
};

export default Logo;
