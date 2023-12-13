import { useState } from 'react';
import {
  AccordionContainer,
  AccordionHeader,
  AccordionContent,
} from './Accordion.style';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion}>{title}</AccordionHeader>
      <AccordionContent open={isOpen}>{children}</AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
