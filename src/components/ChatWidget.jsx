import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai"; 
import { FaComments, FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "হ্যালো! 👋 আমি হেক্টো অ্যাসিস্ট্যান্ট। কীভাবে সাহায্য করতে পারি?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const GEMINI_API_KEY = import.meta.env.VITE_API_KEY;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userText = input;
    setInput(""); 
    setMessages((prev) => [...prev, { text: userText, sender: "user" }]);
    setIsLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const chatHistory = messages.slice(1).map(msg => ({
        role: msg.sender === "user" ? "user" : "model",
        parts: [{ text: msg.text }]
      }));

      const chat = model.startChat({
        history: [
            {
                role: "user",
                parts: [{ text: "You are a helpful customer support assistant for an e-commerce website named 'Hekto'. You answer concisely and politely. You can answer in Bengali or English depending on the user's language." }],
            },
            {
                role: "model",
                parts: [{ text: "Okay, I understand. I am the Hekto support assistant." }],
            },
            ...chatHistory
        ],
      });

      const result = await chat.sendMessage(userText);
      const response = await result.response;
      const botResponseText = response.text();

      if (botResponseText) {
        setMessages((prev) => [...prev, { text: botResponseText, sender: "bot" }]);
      }

    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [...prev, { text: "দুঃখিত, বর্তমানে একটি যান্ত্রিক ত্রুটি হচ্ছে। কিছুক্ষণ পর আবার চেষ্টা করুন।", sender: "bot" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-8 z-50 flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-80 md:w-96 h-125 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col mb-4"
          >
            <div className="bg-linear-to-r from-[#FB2E86] to-[#F94C9B] p-4 flex justify-between items-center text-white shadow-md">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                  <FaRobot className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide">AI Support</h3>
                  <p className="text-[10px] text-blue-100 flex items-center gap-1 opacity-90">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Active Now
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="hover:bg-white/20 p-2 rounded-full transition duration-200 cursor-pointer"
              >
                <FaTimes />
              </button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto bg-[#F6F5FF] flex flex-col gap-4 custom-scrollbar">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3 px-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.sender === 'user' 
                        ? 'bg-[#FB2E86] text-white rounded-br-none' 
                        : 'bg-white text-[#151875] border border-gray-100 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                   <div className="bg-white border border-gray-100 text-gray-500 text-xs py-2 px-4 rounded-full shadow-sm flex items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                     <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                     <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-3 bg-white border-t border-gray-100">
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200 focus-within:border-[#FB2E86] transition-all duration-200">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask anything..."
                  className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
                />
                <button 
                  onClick={handleSend} 
                  disabled={isLoading}
                  className={`p-2 rounded-full transition-all duration-200 cursor-pointer ${
                    input.trim() 
                      ? 'bg-[#FB2E86] text-white shadow-md hover:bg-[#F94C9B] transform hover:scale-105' 
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <FaPaperPlane size={14} />
                </button>
              </div>
              <div className="text-center mt-2">
                <p className="text-[10px] text-gray-400 font-medium">Powered by Gemini AI</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#151875] text-white rounded-full shadow-lg shadow-blue-900/30 flex items-center justify-center hover:shadow-xl transition-all duration-300 focus:outline-none ring-4 ring-white cursor-pointer"
      >
        {isOpen ? <FaTimes size={24} /> : <FaComments size={28} />}
      </motion.button>
    </div>
  );
};

export default ChatWidget;