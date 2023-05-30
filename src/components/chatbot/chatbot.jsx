import { useState, useEffect, useRef } from "react";
import "./chatbot.css";
import Send from "../../assets/send.png";

export function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [result, setResult] = useState('');
  const chatMessagesRef = useRef(null);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      const newUserMessage = {
        text: inputValue,
        isUserMessage: true
      };
      setMessages(prevMessages => [...prevMessages, newUserMessage]);
      setInputValue("");
    }
  };

  useEffect(() => {
    const scrollContainer = chatMessagesRef.current;
    scrollContainer.scrollTop = scrollContainer.scrollHeight;
  }, [messages]);

  async function onSubmit(event) {
    event.preventDefault();
    try {
      setDisabled(true);
      const response = await fetch("http://localhost:3000/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputValue }),
      });
      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      setResult(data.result);
      setInputValue("");
      const newSystemMessage = {
        text: data.result,
        isUserMessage: false,
      };
      setMessages(prevMessages => [...prevMessages, newSystemMessage]);
      setDisabled(false);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  const handleCombinedSubmit = (event) => {
    event.preventDefault();
    handleMessageSubmit(event);
    onSubmit(event);
  };

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
        <form className="chat-input" onSubmit={handleCombinedSubmit}>
          <input disabled={disabled} type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Escribe tu pregunta..." />
          {disabled == true && <div class="loader">
              <span></span>
              <span></span>
              <span></span>
            </div>}
          {disabled == false && <button type="submit">
            <img src={Send} alt="" />
          </button>}
        </form>
      </div>
    </section>
  );
}
