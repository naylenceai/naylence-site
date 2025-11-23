import React, { useState } from 'react';

const Logo = ({ className = "w-10 h-10" }) => {
  const [logoError, setLogoError] = useState(false);

  if (logoError) {
    return (
      <div className={`${className} bg-gradient-to-tr from-teal-600 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-teal-900/50`}>
        <span className="font-bold text-white text-xl">N</span>
      </div>
    );
  }
  
  return (
    <img 
      src="/swirl_dark_teal_darker_bg.png" 
      alt="Naylence Logo" 
      className={`${className} object-contain`} 
      onError={() => setLogoError(true)}
    />
  );
};

export default Logo;

