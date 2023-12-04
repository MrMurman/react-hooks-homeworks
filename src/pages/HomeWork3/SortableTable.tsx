import React, { FC, useState } from "react";
import classes from "./styles.module.css";
import { SortedParam, SortingStatus, IProps, Row } from "./types";

const INITIAL_STATE: Record<SortedParam, SortingStatus> = {
  userID: "notSorted",
  id: "notSorted",
  title: "notSorted",
};



export const SortableTable: FC<IProps> = ({ rows }) => {
  const [sorting, setSorting] = useState(INITIAL_STATE);
  const [sortedRows, setSortedRows] = useState(rows);

  const applySorting = (type: SortedParam) => {
    setSorting({
      ...INITIAL_STATE,
      [type]:
        (sorting[type] === "notSorted" || sorting[type] === "descending")
          ? "ascending"
          : "descending",
    });

    const sortAscending = (a: Row, b: Row) => a[type] > b[type] ? 1 : -1
    const sortDescending = (a: Row, b: Row) => a[type] < b[type] ? 1 : -1

    setSortedRows(
      sorting[type] === 'ascending' ? [...sortedRows].sort((a, b) => sortDescending(a, b)) : [...sortedRows].sort((a, b) => sortAscending(a, b))
    
    );
  };

  return (
    <div style={{ border: "1px solid grey", maxWidth: "100%" }}>
      <table style={{ borderCollapse: "collapse" }}>
        <thead className={classes.thCell}>
          <th className={classes.firstCol}>
            userID'
            <button
              onClick={() => applySorting("userID")}
              className={classes.button}
            >
              {sorting.userID === "notSorted" ? '↓' : '⥯'}</button>
          </th>
          <th className={classes.secondCol}>
            ID
            <button
              onClick={() => applySorting("id")}
              className={classes.button}
            >
              {sorting.id === "notSorted" ? '↓' : '⥯'}
            </button>
          </th>
          <th className={classes.lastCol}>
            Title
            <button
              onClick={() => applySorting("title")}
              className={classes.button}
            >
              {sorting.title === "notSorted" ? '↓' : '⥯'}
            </button>
          </th>
        </thead>
        <tbody className={classes.tdCell}>
          {sortedRows.map(({ userID, id, title }) => (
            <tr>
              <td>{userID}</td>
              <td>{id}</td>
              <td>{title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
