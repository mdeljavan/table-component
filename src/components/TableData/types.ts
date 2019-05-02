import { CSSProperties } from "react";
type TableHeaderDataT = {
  title: string;
  style?: CSSProperties;
  className?: string;
};
type TableBodyDataT = {
    tr: {
        className?: string,
        style?: CSSProperties,
    },
    td: {
        data: any[],
        style: CSSProperties,
        className: string
    }
}
export type TableHeaderP = {
  data: TableHeaderDataT[];
};
export type TableDataP ={
    headerData: TableHeaderDataT[],
    bodyData: TableBodyDataT[]
}
export type TableBodyP = {
    data: TableBodyDataT[]
}