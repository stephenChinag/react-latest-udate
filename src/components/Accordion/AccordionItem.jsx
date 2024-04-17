import React from "react";

export default function AccordionItem({ title, children, className }) {
  return (
    <li className={className}>
      <h3>{title}</h3>
      {children}
    </li>
  );
}
