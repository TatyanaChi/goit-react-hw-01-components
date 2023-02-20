import styled from "@emotion/styled";

export const Table = styled.table`
    width: 50%;
  margin: 16px auto;
  text-align: center;
`;

export const TableTitle = styled.thead`
    text-transform: uppercase;
    color: var(--white);
    background-color: var(--aqua);
`;

export const TableRow = styled.tr`
    &:nth-of-type(2n) {
    background-color: var(--background-grey);
  }
`;

export const TableData = styled.th`
    padding: 8px 0;
   
`;

export const TableValue = styled.td`
    padding: 8px 40px;
    outline: 1px solid var(--background-grey); 
`;

