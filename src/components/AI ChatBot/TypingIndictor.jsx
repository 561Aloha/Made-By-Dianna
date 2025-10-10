import React from 'react';

const TypingIndicator = () => {
  return (
    <div className="flex items-center space-x-1.5 p-2">
      <div className="h-2 w-2 bg-pink-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-2 w-2 bg-pink-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-2 w-2 bg-pink-300 rounded-full animate-bounce"></div>
    </div>
  );
};

export default TypingIndicator;
