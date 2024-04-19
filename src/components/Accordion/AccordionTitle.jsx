import React from "react";
import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

function AccordionTitle({ className, children }) {
  const { toogleItem } = useAccordionContext();
  const id = useAccordionItemContext();

  function handleClick() {
    console.log("was clicked");
    toogleItem(id);
  }
  return (
    <h3 className={className} onClick={handleClick}>
      {children}
    </h3>
  );
}

export default AccordionTitle;
