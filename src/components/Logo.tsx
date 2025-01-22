import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/images/logo1.png"
        alt="Zebracat AI Logo"
        width={24}
        height={24}
        className="text-primary"
      />
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Zebracat AI
      </span>
    </div>
  );
};

export default Logo;