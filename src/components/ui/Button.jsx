import React from 'react';

const Button = ({ children = "Learn More", className = "" }) => {
  return (
    <div className={`inline-block ${className}`}>
      <button className="learn-more-btn relative inline-block cursor-pointer outline-none border-0 bg-transparent p-0 font-inherit w-48 h-auto group">
        <span 
          className="circle relative block m-0 w-12 h-12 bg-gray-300 rounded-full transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full" 
          aria-hidden="true"
        >
          <span className="icon arrow absolute top-0 bottom-0 my-auto left-2.5 w-4 h-0.5 bg-transparent transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:bg-black group-hover:translate-x-4 before:absolute before:content-[''] before:-top-1 before:right-0 before:w-2.5 before:h-2.5 before:border-t-2 before:border-r-2 before:border-black before:rotate-45" />
        </span>
        <span className="button-text absolute top-0 left-0 right-0 bottom-0 py-3 ml-7 text-gray-100 font-bold leading-6 text-center uppercase text-sm transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:text-black">
          {children}
        </span>
      </button>
    </div>
  );
};



export default Button;
