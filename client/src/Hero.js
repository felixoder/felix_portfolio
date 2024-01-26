import React from 'react';
import { Circle } from 'react-shapes';

export default function Hero() {
  return (
    <div>
      <header className="bg-white shadow relative bg-blur z-1">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: 'url("/images/cover.jpeg")', // Update the path to your image
            filter: 'blur(10px)', // Add the blur effect
            WebkitBackdropFilter: 'blur(10px)', // For Safari
          }}
        ></div>

        {/* Content */}
        <div className="hero mx-auto max-w-7xl h-200px px-4 py-6 sm:px-6 lg:px-8 relative z-10">
          <div
            style={{
              position: 'absolute',
              display: 'flex', // Use flexbox for horizontal alignment
              alignItems: 'center', // Center items vertically
              width: '100px',
              height: '100px',
              backgroundImage: 'url("/images/profile.jpg")', // Update the path to your image
              backgroundSize: 'contain',
              borderRadius: '50%', // Make sure the overlay has a circular shape
              backgroundPosition: 'center top', 
            }}
          >
            {/* Circle component for the circular border */}
            <Circle r={50} fill={{ color: 'transparent' }} stroke={{ color: '#E65243' }} strokeWidth={3} />
          </div>

          <div className="ml-4 text-white flex flex-col">
            <h1 className="text-xxl font-bold mb-2">Debayan Ghosh</h1>
            <p className="text-xxl-500">@felixoder</p>
          </div>
          {/* Text to the right of the profile image */}
          <button className="button bg-blue-500 hover:bg-grey-700 text-white font-bold py-2 px-4 rounded ">
          <a
                href="/your-pdf-file.pdf" // Update with the actual path to your PDF
                download="your-file-name.pdf" // Specify the default filename
                className="text-white no-underline"
              >
                Download My-CV
              </a>
</button>
        </div>
      </header>
    </div>
  );
}
