import React, { createContext, useContext, useState } from "react";

const AccordianContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordianContext);
  if (!ctx) {
    throw new Error("Accordian-related ");
  }
  return ctx;
}

export default function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState();

  function openItem(id) {
    setOpenItemId(id);
  }

  function closeItem() {
    setOpenItemId(null);
  }
  const contextValue = {
    openItemId,
    openItem,
    closeItem,
  };
  return (
    <AccordianContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>;
    </AccordianContext.Provider>
  );
}
