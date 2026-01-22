import React, { useState } from 'react';
import { BsChatDotsFill, BsSend } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! How can I help you today?", sender: "bot" }
    ]);
    const [inputText, setInputText] = useState("");

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        // ইউজারের মেসেজ
        const newUserMessage = { id: Date.now(), text: inputText, sender: "user" };
        setMessages((prev) => [...prev, newUserMessage]);
        setInputText("");

        // ডামি AI রেসপন্স (এখানে তুমি পরে রিয়েল API কানেক্ট করতে পারবে)
        setTimeout(() => {
            const botResponse = { 
                id: Date.now() + 1, 
                text: "Thanks for your message! This is a demo AI response. Connect an API to make me smart!", 
                sender: "bot" 
            };
            setMessages((prev) => [...prev, botResponse]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-24 right-8 z-50"> {/* BackToTop বাটনের উপরে পজিশন করা হয়েছে */}
            
            {/* চ্যাট উইন্ডো (যখন ওপেন থাকবে) */}
            {isOpen && (
                <div className="bg-white w-80 h-96 shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-lg flex flex-col mb-4 border border-[#E1E1E4] overflow-hidden animate-bounce-in">
                    
                    {/* হেডার */}
                    <div className="bg-[#FB2E86] p-4 flex justify-between items-center text-white">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#05E6B7] rounded-full animate-pulse"></div>
                            <h3 className="font-josefin font-bold text-lg">AI Assistant</h3>
                        </div>
                        <button onClick={toggleChat} className="hover:text-gray-200 cursor-pointer">
                            <RxCross2 size={20} />
                        </button>
                    </div>

                    {/* মেসেজ এরিয়া */}
                    <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 bg-[#F6F5FF]">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`max-w-[85%] p-3 rounded-lg text-sm font-lato shadow-sm ${
                                msg.sender === 'user' 
                                ? 'bg-[#FB2E86] text-white self-end rounded-br-none' 
                                : 'bg-white text-[#151875] self-start rounded-bl-none border border-[#E1E1E4]'
                            }`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    {/* ইনপুট এরিয়া */}
                    <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-[#E1E1E4] flex gap-2">
                        <input 
                            type="text" 
                            placeholder="Type a message..." 
                            className="flex-1 border border-[#E1E1E4] rounded-full px-4 py-2 text-sm outline-none focus:border-[#FB2E86] font-lato text-[#151875]"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                        <button type="submit" className="bg-[#FB2E86] text-white w-9 h-9 flex justify-center items-center rounded-full hover:bg-[#F94C9B] transition-colors cursor-pointer shadow-md">
                            <BsSend size={16} />
                        </button>
                    </form>
                </div>
            )}

            {/* গোল চ্যাট বাটন (সব সময় দেখা যাবে) */}
            <button 
                onClick={toggleChat}
                className="bg-[#151875] text-white w-14 h-14 rounded-full shadow-lg flex justify-center items-center hover:bg-[#FB2E86] transition-all duration-300 cursor-pointer animate-bounce-slow border-2 border-white"
            >
                {isOpen ? <RxCross2 size={24} /> : <BsChatDotsFill size={24} />}
            </button>
        </div>
    );
};

export default ChatWidget;