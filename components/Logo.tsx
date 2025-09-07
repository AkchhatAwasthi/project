import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-0.5">
      <img src="/assets/logo.png" alt="GoalCraft Consultancy" className="h-14 w-auto" />
      <span className="text-xl font-semibold text-foreground">GoalCraft Consultancy</span>
    </div>
  );
};

export default Logo;