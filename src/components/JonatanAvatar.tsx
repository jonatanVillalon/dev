import React from 'react';

interface JonatanAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showBadge?: boolean;
}

export const JonatanAvatar: React.FC<JonatanAvatarProps> = ({
  size = 'lg',
  className = '',
  showBadge = true,
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-48 h-48 md:w-64 md:h-64',
    xl: 'w-64 h-64 md:w-80 md:h-80',
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Outer Glow Ring */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#FF6D09] via-[#F6445F] to-[#7E5498] rounded-3xl blur-md opacity-40 animate-pulse" />

      {/* Main Avatar Container */}
      <div
        className={`${sizeClasses[size]} relative rounded-2xl overflow-hidden border-4 border-white dark:border-[#2F4858] shadow-2xl bg-gradient-to-b from-[#2F4858] to-[#1e303c] flex flex-col items-center justify-center`}
      >
        {/* Render High Quality Styled Vector Illustration representing Jonatan Villalón */}
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full object-cover"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2F4858" />
              <stop offset="100%" stopColor="#1C2D37" />
            </linearGradient>
            <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>
            <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A2E1B" />
              <stop offset="100%" stopColor="#2A180C" />
            </linearGradient>
            <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FAD3B6" />
              <stop offset="100%" stopColor="#E8B593" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="200" height="200" fill="url(#bgGrad)" />

          {/* Code Matrix Background Lines */}
          <path
            d="M 20,40 L 180,40 M 30,80 L 170,80 M 10,120 L 190,120"
            stroke="#FF6D09"
            strokeOpacity="0.15"
            strokeWidth="1"
            strokeDasharray="4 4"
          />

          {/* Shoulders / T-shirt (White T-shirt) */}
          <path
            d="M 25 200 C 25 155 60 145 100 145 C 140 145 175 155 175 200 Z"
            fill="url(#shirtGrad)"
          />
          {/* T-shirt Collar Line */}
          <path
            d="M 75 145 C 85 160 115 160 125 145"
            fill="none"
            stroke="#CBD5E1"
            strokeWidth="3"
          />

          {/* Neck */}
          <rect x="85" y="115" width="30" height="35" rx="4" fill="url(#skinGrad)" />
          {/* Neck Shadow */}
          <path d="M 85 115 C 95 125 105 125 115 115 Z" fill="#D49B76" opacity="0.6" />

          {/* Head & Face */}
          <path
            d="M 65 75 C 65 48 135 48 135 75 C 135 115 125 125 100 125 C 75 125 65 115 65 75 Z"
            fill="url(#skinGrad)"
          />

          {/* Ears */}
          <circle cx="63" cy="80" r="8" fill="url(#skinGrad)" />
          <circle cx="137" cy="80" r="8" fill="url(#skinGrad)" />

          {/* Eyes */}
          <ellipse cx="83" cy="78" rx="4.5" ry="5" fill="#2A180C" />
          <ellipse cx="117" cy="78" rx="4.5" ry="5" fill="#2A180C" />
          <circle cx="84.5" cy="76.5" r="1.5" fill="#FFFFFF" />
          <circle cx="118.5" cy="76.5" r="1.5" fill="#FFFFFF" />

          {/* Eyebrows */}
          <path d="M 74 69 Q 83 66 90 70" fill="none" stroke="#2A180C" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 110 70 Q 117 66 126 69" fill="none" stroke="#2A180C" strokeWidth="2.5" strokeLinecap="round" />

          {/* Nose */}
          <path d="M 100 78 L 98 90 H 103" fill="none" stroke="#C58B65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

          {/* Beard / Stubble (Short neat beard & mustache) */}
          <path
            d="M 66 88 C 66 118 78 125 100 125 C 122 125 134 118 134 88 C 134 105 122 123 100 123 C 78 123 66 105 66 88 Z"
            fill="#3D2313"
            opacity="0.8"
          />
          {/* Mustache */}
          <path
            d="M 88 98 Q 100 95 112 98 Q 100 103 88 98 Z"
            fill="#3D2313"
            opacity="0.85"
          />

          {/* Warm Smile */}
          <path
            d="M 88 102 Q 100 112 112 102"
            fill="none"
            stroke="#2A180C"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Curly Brown Hair */}
          {/* Main Hair Volume */}
          <path
            d="M 60 70 C 52 50 65 30 90 28 C 110 26 135 32 142 52 C 146 65 140 75 138 75 C 135 52 118 36 98 37 C 78 38 65 52 62 70 Z"
            fill="url(#hairGrad)"
          />
          {/* Curly Curls */}
          <circle cx="68" cy="48" r="10" fill="url(#hairGrad)" />
          <circle cx="82" cy="38" r="12" fill="url(#hairGrad)" />
          <circle cx="100" cy="35" r="13" fill="url(#hairGrad)" />
          <circle cx="118" cy="38" r="11" fill="url(#hairGrad)" />
          <circle cx="132" cy="46" r="10" fill="url(#hairGrad)" />
          <circle cx="74" cy="55" r="8" fill="url(#hairGrad)" />
          <circle cx="126" cy="55" r="8" fill="url(#hairGrad)" />

          {/* Top Foreground Curls Highlights */}
          <path
            d="M 80 34 Q 86 28 94 32 M 102 30 Q 110 26 118 32 M 66 44 Q 72 38 78 44"
            fill="none"
            stroke="#633E24"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Name Overlay Tag at bottom */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent py-1.5 text-center">
          <span className="text-[10px] font-black tracking-wider text-white uppercase drop-shadow-sm">
            Jonatan Villalón
          </span>
        </div>
      </div>

      {/* WordPress Expert Badge */}
      {showBadge && (
        <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#FF6D09] to-[#F6445F] text-white p-2 rounded-xl shadow-lg border-2 border-white dark:border-[#2F4858] flex items-center gap-1.5">
          {/* WordPress Icon SVG */}
          <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 0 1-5.18-1.92l4.13-11.33 3 8.35.88-2.58a33 33 0 0 1 .8 2.65A8 8 0 0 1 12 20zm6.18-4.23a8 8 0 0 1-2.12 2.37l2.25-6.52a7.86 7.86 0 0 1-.13 4.15zM12 4a7.92 7.92 0 0 1 5.3 2.08L14.6 13.8l-2.73-7.58a.8.8 0 0 0-.75-.52h-.17a.8.8 0 0 0-.75.52L7.47 13.8 4.77 6.08A7.92 7.92 0 0 1 12 4zM4.18 8.1l3.52 9.8A8 8 0 0 1 4 12a7.87 7.87 0 0 1 .18-3.9z" />
          </svg>
          <span className="text-[11px] font-extrabold tracking-tight hidden sm:inline">
            Especialista WP
          </span>
        </div>
      )}
    </div>
  );
};
