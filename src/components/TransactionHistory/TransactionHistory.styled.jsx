import styled from 'styled-components';

export const Table = styled.table`
    margin: 0 auto;
    border: 1px solid lightgray;
`;

export const TableHead = styled.thead`
    height: 50px;
    border: 1px solid lightgray;
    & > tr {
        background-color: aqua;
    }
`;

export const TableHeader = styled.th`
    font-size: 14px;
    width: 200px;
    border: 1px solid lightgray;
    text-align: center;
`;

export const TableRow = styled.tr`
    height: 14px;
    background-color: ${props =>
    (props.index + 1) % 2
        ? "white"
        : "lightgray"};
`;

export const TableData = styled.td`
    height: 50px;

    text-align: center;
`;