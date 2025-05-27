"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

function FAQItem({ question, answer, isOpen, toggleOpen }: FAQItemProps) {
  return (
    <div className="border-b py-4">
      <button
        className="flex w-full justify-between items-center text-left"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <div className="text-primary ml-4">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      {isOpen && (
        <div className="mt-2 text-muted-foreground">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: "What is VisaEase?",
      answer:
        "VisaEase is a digital platform that simplifies the Schengen visa application process for Turkish citizens by automating form filling, providing document checklists, and generating supporting documents.",
    },
    {
      question: "How does VisaEase work?",
      answer:
        "You enter your information once, and our system automatically fills out all necessary application forms, generates a personalized document checklist, and creates required supporting documents like travel itineraries and accommodation bookings.",
    },
    {
      question: "Is my data secure with VisaEase?",
      answer:
        "Yes, we use bank-level encryption and security measures to protect your personal information. We never share your data with third parties without your explicit consent.",
    },
    {
      question: "Can VisaEase guarantee my visa approval?",
      answer:
        "While we can't guarantee approval (no service can), our platform significantly increases your chances by ensuring your application is complete, accurate, and professionally presented - the key factors consulates look for.",
    },
    {
      question: "How much time can I save using VisaEase?",
      answer:
        "Most users complete their visa application process 70% faster with VisaEase compared to traditional methods, saving approximately 5-10 hours of paperwork and research.",
    },
    {
      question: "What if I need help during the application process?",
      answer:
        "Our customer support team is available via chat and email to assist with any questions you may have during the application process.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about VisaEase and the Schengen visa
            application process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
