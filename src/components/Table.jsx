import React from "react";
import "../styles/Table.scss";

export function TableContainer({ children }) {
  return <div>{children}</div>;
}
export function Table({ children }) {
  return <table>{children}</table>;
}

export function Thead({ children }) {
  return <thead>{children}</thead>;
}
export function Th({ children }) {
  return <th>{children}</th>;
}
export function Tr({ children }) {
  return <tr>{children}</tr>;
}
export function Tbody({ children }) {
  return <tbody>{children}</tbody>;
}
export function Td({ children }) {
  return <td className="table-element">{children}</td>;
}
