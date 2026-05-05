import React from 'react';

const SuggestedQuestionPill = ({ question, onClick }) => {
  return (
    <button
      onClick={() => onClick(question)}
      className="px-4 py-2 text-sm text-purple-200 bg-purple-500/10 border border-purple-400/20 rounded-[14px] hover:bg-purple-500/20 hover:border-purple-400/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900"
    >
      {question}
    </button>
  );
};

export default SuggestedQuestionPill;

