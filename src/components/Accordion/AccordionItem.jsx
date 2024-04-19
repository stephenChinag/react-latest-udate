import React, { createContext, useContext } from "react";

const AccordionItemContex = createContext();

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContex);
  if (!ctx) {
    throw new Error("Accordian-related ");
  }
  return ctx;
}

export default function AccordionItem({ id, children, className }) {
  return (
    <AccordionItemContex.Provider value={id}>
      <li className={className}>{children}</li>;
    </AccordionItemContex.Provider>
  );
}
