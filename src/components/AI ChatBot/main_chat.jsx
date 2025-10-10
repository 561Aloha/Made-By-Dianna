import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { SUGGESTED_QUESTIONS, SYSTEM_INSTRUCTION } from './constants';
import './chatbot.css';

const MessageRole = {
  USER: 'user',
  MODEL: 'model'
};

const MainChat = () => {
  const [chat, setChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userMessageCount, setUserMessageCount] = useState(0);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const initChat = async () => {
      try {
        const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
        const model = genAI.getGenerativeModel({ 
          model: "gemini-2.5-flash"
        });
        
        const newChat = model.startChat({
          history: [
            {
              role: "user",
              parts: [{ text: "You are a helpful assistant. " + SYSTEM_INSTRUCTION }]
            },
            {
              role: "model",
              parts: [{ text: "I understand! I'll follow those instructions carefully and answer questions about her in a friendly, warm way using only the information provided. I'll keep responses under 50 words and interpret 'you/your' as referring to her. 🌸" }]
            }
          ],
        });
        
        setChat(newChat);
        setMessages([
          {
            role: MessageRole.MODEL,
            text: "Hello! It's so nice to meet you. Feel free to ask me anything about Dianna. 🌸",
          },
        ]);
      } catch (error) {
        console.error("Error initializing chat:", error);
      }
    };
    initChat();
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = useCallback(async (messageText) => {
    if (!chat || !messageText.trim() || isLoading) return;

    const text = messageText.trim();
    setInputValue('');
    setIsLoading(true);

    const userMessage = { role: MessageRole.USER, text };
    const newUserCount = userMessageCount + 1;
    setUserMessageCount(newUserCount);
    
    // Track chatbot interaction in Google Analytics
    if (window.gtag) {
      window.gtag('event', 'chatbot_message_sent', {
        event_category: 'Chatbot',
        event_label: 'User Question',
        question_text: text,
        value: newUserCount
      });
    }
    
    setMessages(prev => [...prev, userMessage, { role: MessageRole.MODEL, text: '' }]);
    
    try {
      const result = await chat.sendMessageStream(text);
      
      let fullResponse = '';
      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        fullResponse += chunkText;
        
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = fullResponse;
          return newMessages;
        });
      }

      // Track AI response in Google Analytics
      if (window.gtag) {
        window.gtag('event', 'chatbot_response_received', {
          event_category: 'Chatbot',
          event_label: 'AI Response',
          value: newUserCount
        });
      }

      // After 5th user message, add contact suggestion
      if (newUserCount === 5) {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            role: MessageRole.MODEL,
            text: "Love that you're wanting to learn more about her! You should message her at DiannaDimam@gmail.com or connect via LinkedIn! 💖✨"
          }]);
          
          // Track contact suggestion shown
          if (window.gtag) {
            window.gtag('event', 'chatbot_contact_suggestion_shown', {
              event_category: 'Chatbot',
              event_label: 'Contact CTA'
            });
          }
        }, 1000);
      }
      
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].text = "Oh no! Something went wrong. Please try again. 💖";
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  }, [chat, isLoading, userMessageCount]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

const handleSuggestedQuestionClick = (question) => {
  if (isLoading) return;
  if (window.gtag) {
    window.gtag('event', 'chatbot_suggested_question_clicked', {
      event_category: 'Chatbot',
      event_label: 'Suggested Question',
      question_text: question
    });
  }
  
  setInputValue(question);
  handleSendMessage(question);
};

  const ChatBubble = ({ message, isLoading: bubbleLoading }) => {
    const isUser = message.role === MessageRole.USER;
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = message.text.split(urlRegex);

    return (
      <div className={`chatbot-message ${isUser ? 'chatbot-message-user' : 'chatbot-message-model'}`}>
        <div className="chatbot-message-icon">
          {isUser ? <span className="chatbot-icon-text">You</span> : <span className="chatbot-icon-emoji">🌸</span>}
        </div>
        <div className={`chatbot-message-bubble ${isUser ? 'chatbot-bubble-user' : 'chatbot-bubble-model'}`}>
          {bubbleLoading && message.text.length === 0 ? (
            <div className="chatbot-typing">
              <div className="chatbot-typing-dot"></div>
              <div className="chatbot-typing-dot"></div>
              <div className="chatbot-typing-dot"></div>
            </div>
          ) : (
            <p className="chatbot-message-text">
              {parts.map((part, index) =>
                urlRegex.test(part) ? (
                  <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="chatbot-link">
                    {part}
                  </a>
                ) : (
                  <span key={index}>{part}</span>
                )
              )}
            </p>
          )}
        </div>
      </div>
    );
  };
  
  const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
      <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.949a.75.75 0 00.95.545l3.252-.928a.75.75 0 010 1.362l-3.252-.928a.75.75 0 00-.95.545l-1.414 4.949a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
    </svg>
  );

  const handleContainerInteraction = (e) => {
    e.stopPropagation();
  };
  const getRandomQuestions = (arr, count) => {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };
  const randomQuestions = getRandomQuestions(SUGGESTED_QUESTIONS, 2);

  return (
    <div 
      className="chatbot-window-static"
      onMouseMove={handleContainerInteraction}
      onMouseDown={handleContainerInteraction}
      onMouseUp={handleContainerInteraction}
      onClick={handleContainerInteraction}
      onKeyDown={handleContainerInteraction}
      onKeyUp={handleContainerInteraction}
      onInput={handleContainerInteraction}
      onChange={handleContainerInteraction}
    >
      <header className="chatbot-header">
        <h2 className="chatbot-title">About Me AI ✨</h2>
      </header>

      <main ref={chatContainerRef} className="chatbot-messages">
        {messages.map((msg, index) => (
          <ChatBubble 
            key={index} 
            message={msg}
            isLoading={isLoading && index === messages.length - 1} 
          />
        ))}
      </main>

      <footer className="chatbot-footer">
        <div className="chatbot-suggestions">

      {randomQuestions.map(q => (
        <button 
          key={q} 
          onClick={() => handleSuggestedQuestionClick(q)}
          className="chatbot-suggestion-btn"
        >
          {q}
        </button>
          ))}
        </div>
        <form onSubmit={handleFormSubmit} className="chatbot-input-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask a question..."
            disabled={isLoading}
            className="chatbot-input"
          />
          <button
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            className="chatbot-send-btn"
            aria-label="Send message"
          >
            <SendIcon />
          </button>
        </form>
      </footer>
    </div>
  );
};

export default MainChat;