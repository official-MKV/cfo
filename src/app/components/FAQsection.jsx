import React from 'react';
import FAQItem from './FAQItem';

const FAQSection = () => {
  const faqData = [
    {
      question: "What is this web app, and how does it work?",
      answer: "Our web app is a platform that connects businesses with experienced CFO advisors. It provides a real-time financial dashboard, secure document sharing, and built-in communication tools to facilitate seamless collaboration between clients and financial experts."
    },
    {
      question: "How do I get started?",
      answer: "Simply create an account, set up your profile, and connect with our network of CFO advisors. Our intuitive interface makes collaboration easy and straightforward."
    },
    {
      question: "How do I get started?",
      answer: "Simply create an account, set up your profile, and connect with our network of CFO advisors. Our intuitive interface makes collaboration easy and straightforward."
    }
  ];

  return (
    <div className="w-full mx-auto p-4 rounded-lg spa">
      
      <div className="rounded-lg space-y-6 ">
        {faqData.map((faq, index) => (
          <FAQItem 
            key={index} 
            question={faq.question} 
            answer={faq.answer} 
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;