import React, { useState } from 'react';
import { FAQ } from './FrequentlyAsked.style';
import { Text } from "../../styles/foundations";
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <details 
      className="details" 
      open={isOpen}
      onClick={(e) => {
        e.preventDefault();
        toggleOpen();
      }}
    >
      <summary className="summary">
        {question}
        {isOpen ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
      </summary>
      <p className="p">{answer}</p>
    </details>
  );
};

const FrequentlyAsked = () => {
  const faqItems = [
    {
      question: "What's the difference between Aim and AimHub?",
      answer: "Aim is the open-source experiment tracker... (etc)"
    },
    {
      question: "Can I self-host AimHub?",
      answer: "Yes, you can self-host AimHub on your own infrastructure."
    },
    {
      question: "What happens if I stop using a paid plan?",
      answer: "Yes, you can self-host AimHub on your own infrastructure."
    },
    {
      question: "Is there a free plan for teams?",
      answer: "Yes, you can self-host AimHub on your own infrastructure."
    },
      {
      question: "Is AimHub secure for enterprise use?",
      answer: "Yes, you can self-host AimHub on your own infrastructure."
    },
    {
      question: "Can we migrate from tools like W&B or MLflow?",
      answer: "Yes, you can self-host AimHub on your own infrastructure."
    },
  ];

  return (
    <FAQ>
      <Text as="h1" size={8} css={{ marginBottom: '50px', textAlign: 'center'}}>
        Frequently Asked Questions
      </Text>
      {faqItems.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </FAQ>
  );
};

export default FrequentlyAsked;