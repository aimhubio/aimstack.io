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
      <p className="p" dangerouslySetInnerHTML={{ __html: answer }}></p>
    </details>
  );
};

const FrequentlyAsked = () => {
  const faqItems = [
    {
      question: "What's the difference between Aim and AimHub?",
      answer: "Aim is the open-source experiment tracker designed for individuals. AimHub builds on top of Aim with team collaboration features, user management, and analytics designed for professional ML teams."
    },
    {
      question: "Can I self-host AimHub?",
      answer: "Yes! AimHub is built to be self-hosted on any infrastructure — whether it's bare metal, AWS, GCP, or Kubernetes. You keep full control over your data and environment."
    },
    {
      question: "What happens if I stop using a paid plan?",
      answer: "You won't lose access to your experiments. All your data stays with you, and you can continue using the open-source version of Aim anytime, without vendor lock-in."
    },
    {
      question: "Is there a free plan for teams?",
      answer: "Yes — teams can get started with the open-source version of Aim. To unlock collaboration, dashboards, and user management, we recommend the <strong>Team plan</strong> at $11/user/month."
    },
    {
      question: "Is AimHub secure for enterprise use?",
      answer: "Yes. AimHub is designed with enterprise-grade privacy and control in mind. You deploy it on your own infrastructure, behind your own firewalls, no data ever leaves your environment unless you choose to share it."
    },
    {
      question: "Can we migrate from tools like W&B or MLflow?",
      answer: "Absolutely. Many teams switch to AimHub from other trackers. We support custom migration scripts and our team can assist with setup during onboarding to make the transition smooth."
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