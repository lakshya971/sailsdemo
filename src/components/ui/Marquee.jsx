import React from 'react';
import { cn } from "../../lib/Utils";

// Optimized Marquee Component
const Marquee = ({ 
  className = "", 
  reverse = false, 
  pauseOnHover = false, 
  children,
  speed = 40,
  ...props 
}) => {
  return (
    <div
      className={`relative flex overflow-hidden ${className}`}
      style={{ 
        maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)'
      }}
      {...props}
    >
      <div
        className={`flex ${reverse ? 'animate-marquee-smooth-reverse' : 'animate-marquee-smooth'}`}
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: pauseOnHover ? 'running' : 'running',
          gap: '2rem',
          minWidth: 'max-content'
        }}
        onMouseEnter={(e) => pauseOnHover && (e.target.style.animationPlayState = 'paused')}
        onMouseLeave={(e) => pauseOnHover && (e.target.style.animationPlayState = 'running')}
      >
        {children}
        {/* Duplicate for seamless loop */}
        {children}
      </div>
    </div>
  );
};

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative flex-shrink-0 w-80 h-40 cursor-pointer overflow-hidden rounded-xl border p-6 bg-gray-800/50 backdrop-blur-sm",
        "border-gray-700/50 hover:border-blue-600/50 transition-all duration-300 hover:bg-gray-800/70"
      )}
      style={{ 
        minWidth: '320px',
        maxWidth: '320px'
      }}
    >
      <div className="flex flex-row items-center gap-3 mb-3">
        <img className="rounded-full flex-shrink-0" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col min-w-0">
          <figcaption className="text-sm font-medium text-white truncate">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-400 truncate">{username}</p>
        </div>
      </div>
      <blockquote className="text-sm text-gray-300 leading-relaxed line-clamp-3 overflow-hidden">
        {body}
      </blockquote>
    </figure>
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative w-full max-w-full overflow-hidden py-4">
      <div className="flex flex-col gap-8">
        {/* Upper marquee moving right */}
        <Marquee reverse pauseOnHover speed={35}>
          {firstRow.map((review, index) => (
            <ReviewCard key={`${review.username}-${index}`} {...review} />
          ))}
        </Marquee>
        {/* Lower marquee moving left */}
        <Marquee pauseOnHover speed={35}>
          {secondRow.map((review, index) => (
            <ReviewCard key={`${review.username}-reverse-${index}`} {...review} />
          ))}
        </Marquee>
      </div>
      {/* Left fade gradient */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/90 to-transparent z-10"></div>
      {/* Right fade gradient */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/90 to-transparent z-10"></div>
    </div>
  )
}
