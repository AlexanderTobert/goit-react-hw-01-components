import PropTypes from 'prop-types';
import { Table, TableHead, TableHeader, TableRow, TableData } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
        <TableHead>
            <TableRow>
                <TableHeader>Type</TableHeader>
                <TableHeader>Amount</TableHeader>
                <TableHeader>Currency</TableHeader>
            </TableRow>
        </TableHead>

        <tbody>
            {items.map(({ id, type, amount, currency }, index) => (
            <TableRow key={id} index={index}>
                <TableData className="type">{type}</TableData>
                <TableData>{amount}</TableData>
                <TableData>{currency}</TableData>
            </TableRow>
            ))}
        </tbody>
        </Table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    })
    ).isRequired,
};