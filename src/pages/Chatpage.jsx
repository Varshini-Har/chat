// pages/ChatPage.jsx
import React, { useState } from 'react';
import { chatFlows } from '../ChatFlows';
import { motion } from 'framer-motion';
import '../styles.css';

const ChatPage = ({ role, onBack }) => {
  const flow = chatFlows[role] || [];
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [done, setDone] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const jobOptions = [
    'Frontend Developer',
    'Backend Developer',
    'python  Developer',
    
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { fromUser: true, text: input };
    const newAnswers = [...answers, input];
    const newMessages = [...messages, userMsg];

    setMessages(newMessages);
    setAnswers(newAnswers);
    setInput('');

    handleNextStep(newMessages, newAnswers);
  };

  const handleNextStep = (currentMessages, currentAnswers) => {
    setTimeout(() => {
      if (step < flow.length) {
        const botMsg = { fromUser: false, text: flow[step] };
        setMessages([...currentMessages, botMsg]);
        setStep(step + 1);
      } else if (!done) {
        const finalMsg = {
          fromUser: false,
          text: '🎉 Thank you! We’ll get back to you soon.'
        };
        setMessages([...currentMessages, finalMsg]);
        setDone(true);
        setLoading(true);

        console.log(`Answers for ${role}:`, currentAnswers);

        setTimeout(() => {
          setLoading(false);
          onBack();
        }, 2500);
      }
    }, 600);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileUploaded(true);

      const fileMsg = {
        fromUser: true,
        text: `📎 Uploaded: ${file.name}`
      };
      const newMessages = [...messages, fileMsg];
      const newAnswers = [...answers, file.name];

      setMessages(newMessages);
      setAnswers(newAnswers);

      setTimeout(() => {
        const botMsg = {
          fromUser: false,
          text: '✅ Resume received! Thank you.'
        };
        setMessages([...newMessages, botMsg]);
        setStep(step + 1);
      }, 500);
    }
  };

  const handleRadioSubmit = () => {
    if (!selectedOption) return;
    const userMsg = { fromUser: true, text: selectedOption };
    const newAnswers = [...answers, selectedOption];
    const newMessages = [...messages, userMsg];

    setMessages(newMessages);
    setAnswers(newAnswers);
    setSelectedOption('');

    handleNextStep(newMessages, newAnswers);
  };

  const isResumeStep = role === '🧑‍💼 HR' && flow[step] === 'Please upload your resume.' && !fileUploaded;
  const isOptionsStep = role === '🧑‍💼 HR' && flow[step] === '__OPTIONS__';

  return (
    <div className="chat-fullscreen">
      <div className="chat-header">
        <span>{role} Chat</span>
        <button onClick={onBack}>🔙 Back</button>
      </div>

      <div className="chat-window">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            className={`chat-bubble ${msg.fromUser ? 'user' : 'bot'}`}
            initial={{ opacity: 0, x: msg.fromUser ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {msg.text}
          </motion.div>
        ))}
        {loading && <div className="loading">⏳ Redirecting to dashboard...</div>}
      </div>

      <div className="chat-input-area">
        {isResumeStep ? (
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileUpload}
            style={{ color: '#fff' }}
          />
        ) : isOptionsStep ? (
          <div className="radio-options">
            {jobOptions.map((option, index) => (
              <label key={index} className="radio-label">
                <input
                  type="radio"
                  name="jobOption"
                  value={option}
                  checked={selectedOption === option}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                {option}
              </label>
            ))}
            <button onClick={handleRadioSubmit} disabled={!selectedOption}>
              Submit
            </button>
          </div>
        ) : (
          <>
            <input
              type="text"
              placeholder="Type here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              disabled={done}
            />
            <button onClick={handleSend} disabled={done || !input.trim()}>
              ➡️
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
