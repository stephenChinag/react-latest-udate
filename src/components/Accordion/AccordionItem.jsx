import React from "react";
import { useAccordionContext } from "./Accordion";

export default function AccordionItem({ id, title, children, className }) {
  const { openItemId, openItem, closeItem } = useAccordionContext();

  const isOpen = openItemId === id;

  function handleClick() {
    console.log("was clicked");
    if (isOpen) {
      closeItem();
    } else {
      openItem(id);
    }
  }
  return (
    <li className={className}>
      <h3 onClick={handleClick}>{title}</h3>
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
