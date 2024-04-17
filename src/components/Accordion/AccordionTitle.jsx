import React from "react";
import { useAccordionContext } from "./Accordion";

function AccordionTitle({ id, className, children }) {
  const { toogleItem } = useAccordionContext();

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
