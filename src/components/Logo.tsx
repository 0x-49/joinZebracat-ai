import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img 
        src="/zebracat ai.jpg" 
        alt="Zebracat AI Logo" 
        className="h-12 w-12 rounded-full object-cover hover:scale-105 transition-transform duration-300"
      />
      <span className="ml-3 text-xl font-bold text-white">Zebracat AI</span>
    </div>
  );
};

export default Logo;
