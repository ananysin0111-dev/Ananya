import React from 'react';

export default function ScanlineOverlay({ active = true }) {
  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden crt-scanlines">
      {/* CRT Vignette / Screen curvature shadow */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.75), inset 0 0 40px rgba(0, 20, 10, 0.5)'
        }}
      />
    </div>
  );
}

