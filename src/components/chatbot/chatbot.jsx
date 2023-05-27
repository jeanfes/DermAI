import { useState, useEffect, useRef } from "react";
import "./chatbot.css";
import Send from "../../assets/send.png";
export function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const chatMessagesRef = useRef(null);
    const handleMessageSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            const newMessage = {
                text: inputValue,
                isUserMessage: true
            };
            setMessages([...messages, newMessage]);
            setInputValue('');
        }
    };
    useEffect(() => {
        const scrollContainer = chatMessagesRef.current;
        const startTime = performance.now();
        const duration = 500;
        const startOffset = scrollContainer.scrollTop;
        const endOffset = scrollContainer.scrollHeight - scrollContainer.clientHeight;
        let progress = 0;
        const scrollStep = () => {
            const currentTime = performance.now();
            const elapsed = currentTime - startTime;
            if (elapsed > 0) {
                progress = elapsed / duration;
                if (progress < 1) {
                    const ease = easeOutCubic(progress);
                    const newOffset = startOffset + (endOffset - startOffset) * ease;
                    scrollContainer.scrollTop = newOffset;
                    requestAnimationFrame(scrollStep);
                } else {
                    scrollContainer.scrollTop = endOffset;
                }
            } else {
                requestAnimationFrame(scrollStep);
            }
        };
        const easeOutCubic = (t) => {
            return 1 - Math.pow(1 - t, 3);
        };

        requestAnimationFrame(scrollStep);
    }, [messages]);
    return (
        <section className="section_chatbot">
            <div className="chat-container">
                <div ref={chatMessagesRef} className="chat-messages">
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.isUserMessage ? 'user-message' : 'system-message'}`}>
                            {message.text}
                        </div>
                    ))}
                </div>
                <form className="chat-input" onSubmit={handleMessageSubmit}>
                    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Escribe tu pregunta..." />
                    <button type="submit">
                        <img src={Send} alt="" />
                    </button>
                </form>
            </div>
        </section>
    );
}