import React from "react";
import { useAccordionContext } from "./Accordion";

export default function AccordionItem({ id, title, children, className }) {
  const { openItemId, toogleItem } = useAccordionContext();

  const isOpen = openItemId === id;

  function handleClick() {
    console.log("was clicked");
    toogleItem(id);
  }
  return (
    <li className={className}>
      <h3 className="pointer" onClick={handleClick}>
        {title}
      </h3>
      <div
        className={
          isOpen ? "accordion-item-content open" : "accordion-item-content"
        }
      >
        {children}
      </div>
    </li>
  );
}
