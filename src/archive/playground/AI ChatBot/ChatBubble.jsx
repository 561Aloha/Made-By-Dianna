import React from 'react';
import TypingIndicator from './TypingIndictor.jsx';
import FormattedMessage from './FormattedMessage';

const MessageRole = {
  USER: 'user',
  MODEL: 'model'
};

const UserIcon = () => (
  <div className="w-8 h-8 rounded-full bg-pink-400/30 flex-shrink-0 flex items-center justify-center">
    <span className="text-pink-200 text-sm">You</span>
  </div>
);

const ModelIcon = () => (
  <div className="w-8 h-8 rounded-full bg-purple-400/30 flex-shrink-0 flex items-center justify-center">
    <span className="text-xl">🌸</span>
  </div>
);

const ChatBubble = ({ message, isLoading = false }) => {
  const isUser = message.role === MessageRole.USER;

  const bubbleClasses = isUser
    ? 'bg-pink-520/10 border border-pink-500/20 text-pink-100'
    : 'bg-blue-500/10 border border-blue-500/20 text-blue-100';

  const layoutClasses = isUser ? 'flex-row-reverse' : 'flex-row';

  return (
    <div className={`flex items-start gap-3 w-full ${layoutClasses}`}>
      {isUser ? <UserIcon /> : <ModelIcon />}
      <div
        className={`max-w-[80%] rounded-[14px] p-3.5 text-sm md:text-base leading-relaxed ${bubbleClasses}`}
      >
        {isLoading && message.text.length === 0 ? (
          <TypingIndicator />
        ) : (
          <FormattedMessage text={message.text} />
        )}
      </div>
    </div>
  );
};

export default ChatBubble;