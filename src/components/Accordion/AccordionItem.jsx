import React from "react";
import { useAccordionContext } from "./Accordion";

export default function AccordionItem({ id, title, children, className }) {
  const { openItemId, toogleItem } = useAccordionContext();

  return <li className={className}>{children}</li>;
}
