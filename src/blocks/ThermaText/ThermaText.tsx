import React from 'react';

const ThermaText: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center pointer-events-none w-full h-full text-center">
      <div 
        style={{
          fontFamily: '"Diplomata SC"',
          color: 'black',
          fontSize: '8rem',
          fontWeight: 'normal',
          textTransform: 'uppercase',
          letterSpacing: '-0.05em',
          lineHeight: 0.8,
          textShadow: '0 0 20px #FC0606, 0 0 20px #FC0606, 0 0 20px #FC0606, 0 0 20px #FC0606',
          zIndex: 10,
          opacity: 1,
          userSelect: 'none'
        }}
      >
        <h1>Utkarsh</h1>
      </div>
      <div 
        style={{
          fontFamily: '"Diplomata SC"',
          color: '#FC0606',
          fontSize: '2rem',
          fontWeight: 'normal',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          marginTop: '1rem',
          textShadow: '0 0 10px #000, 0 0 10px #000, 0 0 10px #000, 0 0 10px #000',
          zIndex: 10,
          opacity: 0.9,
          userSelect: 'none'
        }}
      >
        EAT, SLEEP, CODE, REPEAT
      </div>
    </div>
  );
};

export default ThermaText;
