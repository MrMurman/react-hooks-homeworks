export type SortedParam = "userID" | "id" | "title";
export type SortingStatus = "notSorted" | "ascending" | "descending";
export type Row = Record<string, string | number>

export interface IProps {
    rows: Row[]
}