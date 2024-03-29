import React from "react";
import "../styles/Table.scss";

export function TableContainer({ children }) {
  return <div className="table-container">{children}</div>;
}
export function Table({ children }) {
  return <table className="table">{children}</table>;
}

export function Thead({ children }) {
  return <thead>{children}</thead>;
}
export function Th({ children }) {
  return <th className="table--heading">{children}</th>;
}
export function Tr({ children }) {
  return <tr>{children}</tr>;
}
export function Tbody({ children }) {
  return <tbody>{children}</tbody>;
}
export function Tcurrency({ children }) {
  return <td className="table--currency table--element">{children}</td>;
}
export function Tvalue({ children }) {
  return <td className="table--value table--element">{children}</td>;
}
export function Tchange({ children }) {
  return <td className="table--change table--element">{children}</td>;
}
